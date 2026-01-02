
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

// Added Article interface to fix import error in ArticlesPage.tsx
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  link: string;
}
