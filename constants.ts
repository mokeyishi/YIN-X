
import { Tool, Category, NavItem, Article } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: '全部工具集', icon: '🎡' },
  { id: 'docs', name: '文档处理', icon: '📝' },
  { id: 'efficiency', name: '效率工具', icon: '⚡' },
  { id: 'dev', name: '开发辅助', icon: '🛠️' },
  { id: 'image', name: '图像处理', icon: '🎨' },
  { id: 'learning', name: '学习资源', icon: '🎓' },
];

export const TOOLS: Tool[] = [
  {
    id: '1',
    title: 'iPhone 照片格式转换器',
    description: '完全免费的在线 HEIC 转 JPG 工具。支持高速批量转换为 JPG/PNG/WebP 格式。',
    category: 'image',
    icon: '📱',
    bannerColor: 'bg-purple-500/10 dark:bg-purple-600',
    tags: ['开源', '批量', '无损'],
    link: 'https://example.com/heic'
  },
  {
    id: '2',
    title: '批量文件名提取工具',
    description: '一键提取文件夹内的所有文件名。支持拖拽目录、Excel 导出，离线可用。',
    category: 'efficiency',
    icon: '📁',
    bannerColor: 'bg-amber-500/10 dark:bg-amber-500',
    tags: ['本地', '快速', 'Excel'],
    link: 'https://example.com/batch'
  },
  {
    id: '3',
    title: '练字格生成器',
    description: '可定制的田字格、米字格生成工具。支持自定义文字、颜色及 PDF 下载打印。',
    category: 'learning',
    icon: '📝',
    bannerColor: 'bg-indigo-500/10 dark:bg-indigo-600',
    tags: ['PDF', '打印', '自定义'],
    link: 'https://example.com/practice'
  },
  {
    id: '4',
    title: 'PDF 属性修改器',
    description: '在线修改 PDF 的元数据信息，包括标题、作者、主题、关键词等信息。',
    category: 'docs',
    icon: '📄',
    bannerColor: 'bg-pink-500/10 dark:bg-pink-600',
    tags: ['PDF', '工具', '隐私'],
    link: 'https://example.com/pdf'
  },
  {
    id: '5',
    title: '全屏极简倒计时',
    description: '一个极简风格的全屏倒计时工具。支持自定义时长、静音提醒，适合专注工作。',
    category: 'efficiency',
    icon: '⏱️',
    bannerColor: 'bg-rose-500/10 dark:bg-rose-500',
    tags: ['专注', '全屏', '极简'],
    link: 'https://example.com/timer'
  },
  {
    id: '6',
    title: '在线智能提词器',
    description: '专业视频创作者必备。支持自动滚动、字体调整、镜像翻转，适配多种设备。',
    category: 'efficiency',
    icon: '📺',
    bannerColor: 'bg-blue-500/10 dark:bg-blue-600',
    tags: ['视频', '录制', '智能'],
    link: 'https://example.com/prompt'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '精选文章', path: '/articles' },
  { label: '关于我', path: '/about' },
];

export const SKILLS = [
  'Cursor AI', 'GitHub Copilot', 'Claude', '提示词工程', 'Next.js', 'React',
  'TypeScript', 'Node.js', 'Python', 'AI 辅助开发', '代码审计', '性能优化'
];

// Added ARTICLES export to fix the error in ArticlesPage.tsx
export const ARTICLES: Article[] = [
  {
    id: '1',
    title: '为什么说 2025 年是 AI 开发的元年？',
    excerpt: '探讨大模型如何彻底改变我们的编程习惯与开发流程，以及如何在这场浪潮中保持竞争力。',
    category: 'AI 趋势',
    date: '2025-01-20',
    link: '#'
  },
  {
    id: '2',
    title: '提示词工程：从入门到进阶的完整指南',
    excerpt: '一套系统化的 Prompt Engineering 方法论，帮助你从零开始掌握与 AI 沟通的艺术。',
    category: '技术深度',
    date: '2025-01-15',
    link: '#'
  },
  {
    id: '3',
    title: 'Cursor AI 与开发者的 10 倍效率之路',
    excerpt: '深入剖析如何深度利用 Cursor 的 AI 能力，将编码速度提升一个量级。',
    category: '工具评测',
    date: '2025-01-10',
    link: '#'
  }
];
