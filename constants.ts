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
    excerpt: '本教程将指导你如何手动在代码中添加工具分类、更新文章内容以及使用置顶功能，是维护本站的必读文档。',
    content: `## 1. 如何添加工具分类
在 \`constants.ts\` 的 \`CATEGORIES\` 数组中添加一个新对象。
- **id**: 唯一标识（如 'design'），将用于工具关联。
- **name**: 侧边栏显示的文本。
- **icon**: 推荐使用 Emoji，增强视觉识别度。

## 2. 如何添加工具卡片
在 \`TOOLS\` 数组中新增对象。
- **category**: 必须匹配 \`CATEGORIES\` 中的某个 \`id\`，否则将无法在对应分类下显示。
- **poster**: 推荐使用 16:9 的图片链接。如果留空，系统会自动生成基于 ID 的随机艺术海报。
- **tags**: 数组格式，建议不超过 3 个标签以保持 UI 整洁。

## 3. 如何发布新文章
在 \`ARTICLES\` 数组中末尾或开头添加对象。
- **id**: 建议使用语义化的字符串（如 'my-new-post'）。
- **content**: 渲染引擎支持类 Markdown 语法。你可以使用 \`##\` 表示二级标题，\`-\` 表示无序列表，\`**文本**\` 表示加粗，\`\` \`代码\` \`\` 表示行内代码。
- **category**: 文章分类是动态感应的，只需填入分类名，列表页顶部会自动生成对应的过滤按钮。

## 4. 置顶功能说明 (Important)
工具 (\`TOOLS\`) 和文章 (\`ARTICLES\`) 都支持 \`isPinned: true\` 属性。
- **视觉表现**: 置顶内容右上方会显示一个渐变色的 **Pinned** 勋章，并伴有呼吸灯动效。
- **排序逻辑**: 无论日期先后，置顶内容始终排在列表的最前端。建议每个模块置顶不要超过 3 个。

## 5. 主题颜色自定义
如果你想修改系统默认的 10 种配色，可以修改 \`App.tsx\` 中的 \`THEME_COLORS\` 数组。每种颜色需要提供 50 到 700 的全色阶定义以确保深浅模式下的完美渲染。`,
    date: '2024-11-20',
    category: '系统教程',
    tags: ['维护', '指南', '核心配置'],
    link: '#article/guide',
    isPinned: true
  },
  {
    id: 'poster-guide',
    title: '导航海报规格与设计最佳实践',
    excerpt: '如何为你的工具导航站选择最合适的海报尺寸？本文分享 16:9 比例下的视觉优化建议与性能标准。',
    content: `## 1. 为什么选择 16:9 比例？
在 UI/UX 设计中，16:9 (1.77:1) 是目前最通用的长宽比，它在各种屏幕下都能保持最舒适的视觉张力。

## 2. 推荐分辨率标准
- **标准规格**：\`800 x 450 px\`（推荐用于普通加载）
- **超清规格**：\`1200 x 675 px\`（适用于视网膜屏幕）
- **性能优化**：单张海报务必控制在 **100KB 以内**，首选 WebP 格式以减少首屏加载负担。

## 3. 视觉构图技巧
由于 UI 会在图片上方叠加标签和标题，建议将工具 Logo 或核心视觉元素放在画面**中心偏右下**的位置。避免在图片左上角放置重要文字，以免被分类标签遮挡。`,
    date: '2024-11-19',
    category: '设计规范',
    tags: ['海报', '尺寸', '优化'],
    link: '#article/poster-guide',
    isPinned: false
  },
  {
    id: 'ai-efficiency',
    title: '2025年 AI 工具集成工作流建议',
    excerpt: '如何将 Cursor、ChatGPT 4o 以及本地 Llama 3 整合进日常工作流程中？',
    content: `## AI 时代的工作流重塑
当前的 AI 工具已经不仅仅是助手，而是可以深度参与决策的准成员。我们建议将工作流分为：**探索性对话、辅助式编码、自动化测试**三个核心阶段。

- **探索阶段**：使用 Claude 3.5 Sonnet 进行架构设计。
- **实现阶段**：利用 Cursor 的 Composer 模式快速生成代码脚手架。
- **审计阶段**：通过本地运行的 Llama 3 保护隐私数据并进行逻辑检查。`,
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
    content: `## 核心原则
1. **关注点分离**：逻辑（Hooks）与视图（JSX）解耦。
2. **原子化设计**：组件粒度控制在可复用的最小单元。
3. **强类型保护**：利用 TS 接口定义严格的 Props 约束。

编写代码时，始终考虑“如果六个月后我来改这段代码，我还能看懂吗？”。良好的命名比任何注释都更有力。`,
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
    content: `## 异步协作的精髓
远程团队最大的挑战不是沟通工具，而是沟通习惯。通过**任务看板+深度文档**，我们可以减少 70% 无效的 Zoom 会议。

- **拒绝即时通讯焦虑**：不要期待消息秒回。
- **结构化汇报**：使用固定模版同步进度。
- **单一真理来源**：所有决策必须沉淀到 Wiki，而不是留在聊天记录里。`,
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
    content: `## 字体优化的三板斧
1. **子集化压缩**：只提取常用 3500 字，将 10MB 的字体压缩到 300KB。
2. **font-display: swap**：保证首屏文字在字体加载完成前快速出现。
3. **系统字体回退**：优先调用系统默认字体（如 PingFang SC），提供最稳妥的阅读体验。`,
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
    content: `## 极简的力量
当你的电脑里装了 3 个笔记软件、4 个待办应用时，你的大脑已经分心了。真正的效率高手往往只需要一个好用的 Markdown 编辑器。

选择工具的三个准则：
- **数据跨平台透明**：不被特定生态绑架。
- **毫秒级启动速度**：不打断心流。
- **纯粹的功能专注**：只做一件事并做到极致。`,
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