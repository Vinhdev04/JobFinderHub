import { 
  BellOutlined, 
  UserOutlined, 
  MenuOutlined,
  CloseOutlined,
  SearchOutlined,
  HomeOutlined,
  FileTextOutlined,
  HeartOutlined,
  MoonOutlined,
  SunOutlined,
  PlusOutlined,
  EnvironmentOutlined,
  RocketOutlined,
  TeamOutlined,
  DownOutlined,
  CheckOutlined,
  FolderOpenOutlined,
  ClockCircleOutlined,
  EyeOutlined
} from '@ant-design/icons';

const navItems = [
  { id: 'home', label: 'Trang chủ', icon: <HomeOutlined /> },
  { id: 'jobs', label: 'Tìm việc làm', icon: <SearchOutlined />, hasDropdown: true },
  { id: 'companies', label: 'Công ty', icon: <FileTextOutlined /> },
  { id: 'saved', label: 'Việc đã lưu', icon: <HeartOutlined />, badge: 3 },
];

// Cities data - có thể render từ API sau này
const cities = [
  { id: 1, name: 'Hồ Chí Minh', count: 15234 },
  { id: 2, name: 'Hà Nội', count: 12456 },
  { id: 3, name: 'Đà Nẵng', count: 3421 },
  { id: 4, name: 'Cần Thơ', count: 1234 },
  { id: 5, name: 'Hải Phòng', count: 2145 },
  { id: 6, name: 'Bình Dương', count: 4567 },
  { id: 7, name: 'Đồng Nai', count: 2890 },
  { id: 8, name: 'Khánh Hòa', count: 1567 },
];

export { navItems, cities };