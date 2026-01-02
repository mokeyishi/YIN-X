
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
    link: 'https://example.com/heic',
    poster: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    isPinned: true
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
    link: 'https://example.com/practice',
    poster: 'https://images.unsplash.com/photo-1503551723145-6c040742065b?auto=format&fit=crop&q=80&w=800'
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: '如何利用 AI 提升 10 倍开发效率',
    excerpt: '在 AI 时代，开发者的角色正在发生深刻变化。本文将探讨如何将 Cursor、Copilot 等工具融入日常工作流。',
    content: `## 为什么 AI 是开发者的必修课\n\n在过去的一年里，大语言模型（LLM）彻底改变了编写代码的方式。\n\n### 核心技巧：\n1. **提示词工程 (Prompt Engineering)**\n2. **原子化提交**\n3. **代码审查**`,
    date: '2024-10-20',
    category: 'AI 实践',
    tags: ['AI', 'Cursor', '开发效率'],
    link: '#article/1',
    isPinned: true
  },
  {
    id: '2',
    title: '2024 年前端技术趋势观察',
    excerpt: '从 React 19 到服务端组件，前端生态正经历新一轮洗牌。我们需要关注哪些核心技术？',
    content: `## 前端开发的下一站\n\nReact 19 的发布带来了很多令人兴奋的特性。`,
    date: '2024-09-15',
    category: '技术趋势',
    tags: ['React', '前端', '2024'],
    link: '#article/2'
  },
  {
    id: '3',
    title: '数字化转型的个人实践：从碎片到系统',
    excerpt: '在这个信息爆炸的时代，如何通过工具构建个人知识库？本文分享我的数字化工作流。',
    content: `## 信息获取与沉淀\n\n建立一个高效的工作流，第一步是过滤信息。`,
    date: '2024-08-10',
    category: '效率提升',
    tags: ['效率', '工作流', 'Notion'],
    link: '#article/3'
  },
  {
    id: '4',
    title: '深度工作：夺回你的专注力',
    excerpt: '为什么你总是感到忙碌却无所作为？探索深度工作背后的生理与心理学基础。',
    content: `## 专注的力量\n\n在各种通知弹窗的干扰下，保持专注已成为一种奢侈。`,
    date: '2024-07-22',
    category: '认知升级',
    tags: ['心理学', '专注', '效率'],
    link: '#article/4'
  },
  {
    id: '5',
    title: '2025 年设计审美趋势预判',
    excerpt: '从扁平化到拟态，再到现在的 Bento Grid 与极简主义，审美是如何轮回的？',
    content: `## 设计的未来\n\n随着屏显技术的进步，我们将看到更多微动效和复杂光影在 Web 端应用。`,
    date: '2024-06-05',
    category: '设计趋势',
    tags: ['设计', 'UI/UX', '审美'],
    link: '#article/5'
  },
  {
    id: '6',
    title: '测试分页：这是第 6 篇文章',
    excerpt: '当你看到这篇文章时，说明分页功能已经生效，它应该出现在第二页。',
    content: `## 分页测试内容\n\n为了演示“超过 5 篇自动分页”，我们添加了这篇测试文章。`,
    date: '2024-05-10',
    category: '系统测试',
    tags: ['分页', '测试'],
    link: '#article/6'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '教程文章', path: '/articles' },
  { label: '关于我', path: '/about' },
];

export const SKILLS = [
  'Cursor AI', 'GitHub Copilot', 'Claude', '提示词工程', 'Next.js', 'React',
  'TypeScript', 'Node.js', 'Python', 'AI 辅助开发', '代码审计', '性能优化'
];
