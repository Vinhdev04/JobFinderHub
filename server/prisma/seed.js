const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Create System Admin
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.create({
    data: {
      email: 'admin@jobfinderhub.com',
      passwordHash: hashedPassword,
      fullName: 'System Admin',
      role: 'SYS_ADMIN',
      isActive: true,
    },
  });

  console.log('✅ Seed completed:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });