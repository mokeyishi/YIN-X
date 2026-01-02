
export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string; // 支持 Emoji 或 图片 URL
  bannerColor: string;
  tags: string[];
  link: string;
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

/* Interface for the Article type used in ArticlesPage */
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  link: string;
}
