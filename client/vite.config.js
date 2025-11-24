import { defineConfig, loadEnv } from 'vite'; // <<< Thêm loadEnv
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => { // <<< Thay đổi ở đây
  // Tải biến môi trường (VITE_BASE_PATH) theo mode (production/development)
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  
  // Xác định BASE_PATH
  // Sử dụng env.VITE_BASE_PATH. Nếu không tồn tại, mặc định là chuỗi rỗng ''
  const BASE_PATH = env.VITE_BASE_PATH || '';

  return {
    plugins: [react()],
    base: BASE_PATH, // Sử dụng biến BASE_PATH đã xác định
  };
});