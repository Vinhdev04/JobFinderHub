module.exports = (io) => {
    const users = new Map(); // userId -> socketId
  
    io.on('connection', (socket) => {
      console.log('User connected:', socket.id);
  
      // Register user
      socket.on('register', (userId) => {
        users.set(userId, socket.id);
        socket.userId = userId;
      });
  
      // Send message
      socket.on('send_message', async (data) => {
        const { receiverId, content } = data;
        const receiverSocketId = users.get(receiverId);
  
        if (receiverSocketId) {
          io.to(receiverSocketId).emit('new_message', {
            senderId: socket.userId,
            content,
            createdAt: new Date(),
          });
        }
      });
  
      // Disconnect
      socket.on('disconnect', () => {
        if (socket.userId) {
          users.delete(socket.userId);
        }
        console.log('User disconnected:', socket.id);
      });
    });
  };