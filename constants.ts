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
    id: 'poster-guide',
    title: '导航海报规格与设计最佳实践',
    excerpt: '如何为你的工具导航站选择最合适的海报尺寸？本文分享 16:9 比例下的视觉优化建议与性能标准。',
    content: `## 1. 为什么选择 16:9 比例？
在 UI/UX 设计中，16:9 (1.77:1) 是目前最通用的长宽比。
- **视觉平衡**：它能提供足够的横向空间展示工具特性。
- **多端适配**：在移动端和桌面端的三栏布局中，16:9 都能保持极佳的缩放效果。
- **裁剪最小**：由于代码中使用了 \`object-cover\`，使用 16:9 比例的素材可以最大程度保留原始构图。

## 2. 推荐分辨率标准
为了兼顾清晰度与加载速度，建议采用以下像素规格：
- **标准规格**：\`800 x 450 px\`（推荐，平衡性最好）
- **高清规格**：\`1200 x 675 px\`（适用于视网膜屏展示）
- **极简规格**：\`640 x 360 px\`（用于缩略图展示）

## 3. 性能优化建议
- **文件格式**：首选 **WebP**，其次是 JPG。避免使用 PNG（体积过大）。
- **文件大小**：单张海报务必控制在 **100KB 以内**，以防页面滚动卡顿。
- **压缩工具**：推荐使用 TinyPNG 或 Squoosh 进行二次压缩。

## 4. 视觉构图技巧
由于 UI 界面会在图片上方叠加置顶勋章和分类标签，设计时请遵循以下原则：
1. **核心避让**：将工具 Logo 或核心元素放在画面**中心略微偏右下**的位置。
2. **渐变暗角**：如果背景颜色较浅，可以手动在海报底部添加 20% 的暗影，确保白色文字清晰。
3. **色调统一**：尽量选择与站点当前主题色（如紫色、蓝色）相近的色调，提升整体质感。`,
    date: '2024-11-20',
    category: '设计规范',
    tags: ['海报', '尺寸', '优化'],
    link: '#article/poster-guide',
    isPinned: true
  },
  {
    id: 'guide',
    title: 'YIN-X 站点维护与内容更新指南',
    excerpt: '本教程将指导你如何手动在代码中添加工具分类、更新文章内容以及使用置顶功能。',
    content: `## 1. 如何添加工具分类\n在 \`constants.ts\` 的 \`CATEGORIES\` 数组中添加一个对象。\n\n## 2. 如何在分类下添加工具卡片\n在 \`TOOLS\` 数组中新增对象，关键是 \`category\` 字段必须与分类的 \`id\` 一致。`,
    date: '2024-10-25',
    category: '系统教程',
    tags: ['维护', '指南', '配置'],
    link: '#article/guide',
    isPinned: false
  },
  {
    id: 'ai-efficiency',
    title: '2025年 AI 工具集成工作流建议',
    excerpt: '如何将 Cursor、ChatGPT 4o 以及本地 Llama 3 整合进日常工作流程中？',
    content: `## AI 时代的工作流重塑\n\n当前的 AI 工具已经不仅仅是助手，而是可以深度参与决策的准成员。我们建议将工作流分为：**探索性对话、辅助式编码、自动化测试**三个核心阶段。`,
    date: '2024-11-15',
    category: 'AI 实践',
    tags: ['AI', 'Workflow', 'Efficiency'],
    link: '#article/ai-efficiency',
    isPinned: false
  },
  {
    id: 'clean-code',
    title: '现代化 React 组件编写准则',
    excerpt: '拒绝面条代码：如何利用 TypeScript 和 Hooks 编写可维护的 UI 组件。',
    content: `## 核心原则\n\n1. **关注点分离**：逻辑与视图解耦。\n2. **原子化设计**：组件粒度控制在可复用的最小单元。\n3. **强类型保护**：利用 TS 接口定义严格的 Props 约束。`,
    date: '2024-11-05',
    category: '开发笔记',
    tags: ['React', 'TS', 'Code Quality'],
    link: '#article/clean-code',
    isPinned: false
  },
  {
    id: 'remote-culture',
    title: '远程办公下的团队异步协作',
    excerpt: '打破时区障碍：为什么文档化驱动比实时会议更高效。',
    content: `## 异步协作的精髓\n\n远程团队最大的挑战不是沟通工具，而是沟通习惯。通过**任务看板+深度文档**，我们可以减少 70% 无效的 Zoom 会议。`,
    date: '2024-10-30',
    category: '效率研究',
    tags: ['远程', '协作', '异步'],
    link: '#article/remote-work',
    isPinned: false
  },
  {
    id: 'typography-web',
    title: 'Web 字体的性能与美学平衡',
    excerpt: '如何选择支持中文阅读且不影响 LCP 指标的 Web 字体方案。',
    content: `## 字体优化的三板斧\n\n1. **子集化压缩**：只提取常用字符。\n2. **font-display: swap**：保证首屏文字快速出现。\n3. **系统字体回退**：提供最稳妥的阅读体验。`,
    date: '2024-10-15',
    category: '设计规范',
    tags: ['字体', '性能', 'CSS'],
    link: '#article/typography',
    isPinned: false
  },
  {
    id: 'minimalist-tools',
    title: '为什么我推崇“极简工具主义”',
    excerpt: '工具越多效率越低？探讨如何精简你的工具箱，找回专注力。',
    content: `## 极简的力量\n\n当你的电脑里装了 3 个笔记软件、4 个待办应用时，你的大脑已经分心了。真正的效率高手往往只需要一个好用的 Markdown 编辑器。`,
    date: '2024-09-28',
    category: '效率研究',
    tags: ['极简', '专注', '工具'],
    link: '#article/minimalist',
    isPinned: false
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