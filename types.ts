export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  bannerColor: string;
  tags: string[];
  link: string;
  poster?: string;
  isPinned?: boolean; // 新增：置顶标识
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  link: string;
  isPinned?: boolean; // 新增：置顶标识
}