 // Stats data
 import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Youtube,
  Linkedin,
  Apple,
  Smartphone,
  ChevronUp,
  Building2,
  Users,
  Award,
  TrendingUp,
  Hexagon,
  Layers,
  Clock,
  Zap
} from 'lucide-react';
 const stats = [
    { 
      icon: Building2, 
      label: 'Công ty', 
      value: '50K+', 
      variant: 'blue' 
    },
    { 
      icon: Users, 
      label: 'Ứng viên', 
      value: '2M+', 
      variant: 'purple' 
    },
    { 
      icon: Award, 
      label: 'Việc làm', 
      value: '100K+', 
      variant: 'green' 
    },
    { 
      icon: TrendingUp, 
      label: 'Tỷ lệ thành công', 
      value: '95%', 
      variant: 'orange' 
    }
  ];

  // Contact info
  const contacts = [
    { 
      icon: Phone, 
      label: 'Hotline', 
      value: '(024) 7107 6480',
      variant: 'blue'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'hotro@jobfinderhub.vn',
      variant: 'purple'
    },
    { 
      icon: MapPin, 
      label: 'Địa chỉ', 
      value: 'Hà Nội, Việt Nam',
      variant: 'green'
    }
  ];

  // App download
  const apps = [
    { 
      icon: Apple, 
      label: 'App Store', 
      subtitle: 'Tải trên',
      variant: 'apple'
    },
    { 
      icon: Smartphone, 
      label: 'Google Play', 
      subtitle: 'Tải trên',
      variant: 'android'
    }
  ];

  // Footer links
  const linkColumns = [
    {
      id: 'about',
      title: 'Về JobFinderHub',
      icon: Building2,
      links: [
        'Giới thiệu',
        'Góc báo chí',
        'Tuyển dụng',
        'Liên hệ',
        'Hỏi đáp',
        'Chính sách bảo mật',
        'Điều khoản dịch vụ'
      ]
    },
    {
      id: 'cv',
      title: 'Hồ sơ & CV',
      icon: Award,
      links: [
        'Quản lý CV của bạn',
        'Hướng dẫn viết CV',
        'Thư viện CV theo ngành nghề',
        'Review CV',
        'Mẫu CV đẹp',
        'Tạo CV online'
      ]
    },
    {
      id: 'discover',
      title: 'Khám phá',
      icon: Zap,
      links: [
        'Ứng dụng di động',
        'Tính lương Gross - Net',
        'Tính lãi suất kép',
        'Trắc nghiệm MBTI',
        'Trắc nghiệm MI',
        'Bảo hiểm thất nghiệp'
      ]
    }
  ];

  // Tech ecosystem
  const techCards = [
    { 
      icon: Hexagon,
      variant: 'blue', 
      title: 'Nền tảng công nghệ tuyển dụng thông minh JobFinderHub.vn' 
    },
    { 
      icon: Layers,
      variant: 'orange', 
      title: 'Nền tảng quản lý & gia tăng trải nghiệm nhân viên' 
    },
    { 
      icon: Clock,
      variant: 'cyan', 
      title: 'Nền tảng thiết lập và đánh giá năng lực nhân viên theo định kỳ' 
    },
    { 
      icon: Zap,
      variant: 'green', 
      title: 'Giải pháp quản trị tuyển dụng hiệu suất cao ShiRing.ai' 
    }
  ];

  // Social media
  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Youtube, url: '#', label: 'YouTube' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' }
  ];
export { stats, contacts, apps, linkColumns, techCards, socialLinks };