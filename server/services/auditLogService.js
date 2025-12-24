// server/services/auditLogService.js
// Ghi lại mọi hành động quan trọng vào bảng AuditLog
import prisma from '../lib/prisma.lib.js';

class AuditLogService {
    /**
     * Ghi log hành động
     * @param {Object} logData - {
     *   actorId: string,
     *   actionType: string,
     *   targetTable: string,
     *   targetId?: string,
     *   oldValue?: object,
     *   newValue?: object,
     *   ipAddress?: string,
     *   userAgent?: string
     * }
     */
    async log(logData) {
        try {
            const {
                actorId,
                actionType,
                targetTable,
                targetId = null,
                oldValue = null,
                newValue = null,
                ipAddress = null,
                userAgent = null
            } = logData;

            await prisma.auditLog.create({
                data: {
                    actorId,
                    actionType,
                    targetTable,
                    targetId,
                    oldValue,
                    newValue,
                    ipAddress,
                    userAgent
                }
            });
        } catch (error) {
            // Không throw error để không làm gián đoạn luồng chính
            console.error('❌ Audit Log Error:', error.message);
        }
    }

    /**
     * Lấy danh sách audit logs (Chỉ SYS_ADMIN và INTERN_MANAGER)
     * @param {Object} filters - { actorId?, actionType?, targetTable?, limit?, offset? }
     * @returns {Array} Audit logs
     */
    async getLogs(filters = {}) {
        const {
            actorId,
            actionType,
            targetTable,
            limit = 50,
            offset = 0
        } = filters;

        const where = {};
        if (actorId) where.actorId = actorId;
        if (actionType) where.actionType = actionType;
        if (targetTable) where.targetTable = targetTable;

        const logs = await prisma.auditLog.findMany({
            where,
            take: limit,
            skip: offset,
            orderBy: { createdAt: 'desc' },
            include: {
                actor: {
                    select: {
                        id: true,
                        email: true,
                        fullName: true,
                        role: true
                    }
                }
            }
        });

        return logs;
    }

    /**
     * Lấy logs của một user cụ thể
     * @param {string} userId - User ID
     * @param {number} limit - Số lượng logs
     * @returns {Array} User's audit logs
     */
    async getUserLogs(userId, limit = 20) {
        return await this.getLogs({ actorId: userId, limit });
    }

    /**
     * Thống kê số lượng hành động theo type
     * @param {Date} startDate - Ngày bắt đầu
     * @param {Date} endDate - Ngày kết thúc
     * @returns {Array} Statistics
     */
    async getActionStats(startDate, endDate) {
        const logs = await prisma.auditLog.groupBy({
            by: ['actionType'],
            where: {
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            },
            _count: {
                actionType: true
            },
            orderBy: {
                _count: {
                    actionType: 'desc'
                }
            }
        });

        return logs.map((log) => ({
            actionType: log.actionType,
            count: log._count.actionType
        }));
    }
}

export default new AuditLogService();
