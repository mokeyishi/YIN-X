
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
    id: 'guide',
    title: 'YIN-X 站点维护与内容更新指南',
    excerpt: '本教程将指导你如何手动在代码中添加工具分类、更新文章内容以及使用置顶功能。',
    content: `## 1. 如何添加工具分类
在 \`constants.ts\` 的 \`CATEGORIES\` 数组中添加一个对象：
- \`id\`: 唯一标识符（如 'ai'）
- \`name\`: 显示的名称（如 '人工智能'）
- \`icon\`: 一个 Emoji 图标

## 2. 如何在分类下添加工具卡片
在 \`TOOLS\` 数组中新增对象，关键是 \`category\` 字段必须与分类的 \`id\` 一致：
\`\`\`ts
{
  id: 'unique-id',
  title: '工具名称',
  category: 'efficiency', // 对应分类 ID
  isPinned: true, // 设置为 true 即可置顶
  ...
}
\`\`\`

## 3. 如何管理文章分类
文章分类采用的是**动态感应机制**。你不需要在别处预定义分类，只需在 \`ARTICLES\` 数组的新文章中直接写 \`category: "新分类名称"\`，系统会自动在列表页顶部生成对应的过滤按钮。

## 4. 如何添加新文章
在 \`ARTICLES\` 数组中添加新成员：
- \`content\`: 支持简单的类 Markdown 语法。
- \`## \`: 二级标题（带紫色装饰条）。
- \`### \`: 三级标题。
- \`- \`: 无序列表。
- \`**文字**\`: 加粗。
- \`[文字](链接)\`: 插入超链接。

## 5. 如何实现“置顶”功能
无论是工具还是文章，只要在对象属性中加入 \`isPinned: true\`，该项就会：
1. 自动排列在列表的最顶端。
2. 获得专属的 "Pinned" 勋章视觉效果。`,
    date: '2024-10-25',
    category: '系统教程',
    tags: ['维护', '指南', '配置'],
    link: '#article/guide',
    isPinned: true
  },
  {
    id: '1',
    title: '如何利用 AI 提升 10 倍开发效率',
    excerpt: '在 AI 时代，开发者的角色正在发生深刻变化。本文将探讨如何将 Cursor、Copilot 等工具融入日常工作流。',
    content: `## 为什么 AI 是开发者的必修课\n\n在过去的一年里，大语言模型（LLM）彻底改变了编写代码的方式。\n\n### 核心技巧：\n1. **提示词工程 (Prompt Engineering)**\n2. **原子化提交**\n3. **代码审查**`,
    date: '2024-10-20',
    category: 'AI 实践',
    tags: ['AI', 'Cursor', '开发效率'],
    link: '#article/1',
    isPinned: false
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
