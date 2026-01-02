
import { Tool, Category, NavItem, Article } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: '全部工具', icon: '🎡' },
  { id: 'docs', name: '字幕编辑', icon: '📝' },
  { id: 'efficiency', name: '影音剪辑', icon: '⚡' },
  { id: 'dev', name: 'PT站点', icon: '🛠️' },
  { id: 'image', name: '有趣站点', icon: '🎨' },
  { id: 'learning', name: '其它工具', icon: '🎓' },
];

export const TOOLS: Tool[] = [
  {
    id: '1',
    title: 'Subtitle Edit',
    description: '它是字幕制作界的“瑞士军刀”，功能全面到近乎全能且完全免费。',
    category: 'docs',
    icon: '🎬',
    bannerColor: 'bg-purple-500/10 dark:bg-purple-600',
    tags: ['开源', '强大'],
    link: 'https://github.com/SubtitleEdit/subtitleedit/releases',
    poster: 'https://raw.githubusercontent.com/zpen1992/YIN-X/main/img/IMAGES-1.png',
    isPinned: true
  },
  {
    id: '2',
    title: 'HandBrake',
    description: '开源、跨平台的视频转码神器，支持几乎所有视频格式。',
    category: 'efficiency',
    icon: '⚙️',
    bannerColor: 'bg-amber-500/10 dark:bg-amber-500',
    tags: ['开源', '转码'],
    link: 'https://handbrake.fr/'
  },
  {
    id: '3',
    title: 'PikPak',
    description: '极速云盘工具，支持离线下载，是你数字生活的强力助手。',
    category: 'image',
    icon: '📦',
    bannerColor: 'bg-blue-500/10 dark:bg-blue-500',
    tags: ['云盘', '离线'],
    link: 'https://mypikpak.com/'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'guide',
    title: 'YIN-X 站点维护与内容更新指南',
    excerpt: '本教程将指导你如何手动在代码中添加工具分类、更新文章内容以及使用置顶功能。',
    content: `## 1. 如何更新工具数据\n如果你需要添加新的工具，请找到 \`constants.ts\` 文件中的 \`TOOLS\` 数组。按照以下格式添加对象：\n\n- \`id\`: 唯一的数字或字符串\n- \`title\`: 工具名称\n- \`isPinned\`: 设置为 \`true\` 即可显示右上角的呼吸灯标识。\n\n## 2. 更新文章内容\n文章内容支持基础的 Markdown 语法。你可以使用 \`##\` 来创建章节标题，详情页会自动为其添加侧边装饰条。同时，你可以使用 \`**加粗**\` 或 \`[链接](url)\` 来丰富你的表达。\n\n## 3. 图片与海报\n我们推荐使用高质量的图片链接。如果未提供海报，系统将自动使用随机的占位图以保持美观。`,
    date: '2024-11-20',
    category: '系统教程',
    tags: ['维护', '指南'],
    link: '#article/guide',
    isPinned: true
  },
  {
    id: 'subtitle-guide',
    title: '深度解析：Subtitle Edit 高级压制技巧',
    excerpt: '掌握 ASS 特效代码，让你的视频字幕更具视觉冲击力。',
    content: `## 字幕压制的艺术\nSubtitle Edit 不仅仅是一个文字编辑器。在压制领域，掌握 **ASS 样式渲染** 是区分新手与专业人士的分水岭。\n\n## ASS 代码基础\n你可以在内容中使用特定的代码来控制样式：\n- \`{\\pos(x,y)}\`: 控制字幕位置。\n- \`{\\be1}\`: 添加边缘模糊效果，使文字更柔和。\n\n## 自动化翻译流\n结合 Gemini API，你可以实现自动化的双语对照翻译。在工具设置中接入 API Key 后，通过批量任务即可完成以往需要数小时的工作。`,
    date: '2024-11-22',
    category: '影音技术',
    tags: ['字幕', '进阶'],
    link: '#article/subtitle-guide'
  },
  {
    id: 'pt-rules',
    title: 'PT 站点生存法则：如何快速提升上传量',
    excerpt: '新手入坑必看，关于刷流量、考核周期及分流技巧的完整总结。',
    content: `## 核心规则：生存即胜利\n在任何私人 Tracker (PT) 站点，保持良好的分享率 (Ratio) 是重中之重。\n\n## 快速刷量技巧\n1. **关注 Freeleech 资源**: 寻找那些带有黄色“免费”标识的种子，它们只计上传不计下载。\n2. **发布新种子**: 虽然门槛较高，但这是获取上传量最快的方式。\n\n## 关于 RSS 自动下载\n建议配合 qBittorrent 的 RSS 功能，设置过滤器自动下载最新发布的剧集，利用初期的大流量环境获取收益。`,
    date: '2024-11-25',
    category: 'PT运营',
    tags: ['PT', '攻略'],
    link: '#article/pt-rules'
  },
  {
    id: 'video-encoding',
    title: 'HandBrake 压制参数设置详解',
    excerpt: '针对 4K HDR 视频的最优压制方案，兼顾画质与文件体积。',
    content: `## 为什么选择 HandBrake\n它是开源界最稳定的编码器之一。在处理 4K HDR 资源时，正确的参数设置可以让你在减少 60% 体积的同时，保留 95% 以上的视觉质量。\n\n## 视频编码参数 (HEVC 10-bit)\n- **Encoder**: H.265 (x265) 10-bit\n- **Framerate**: Same as source\n- **Constant Quality**: RF 22-24 是一个甜点位。\n\n## 保持 HDR 效果\n务必在“滤镜”选项卡中关闭所有可能破坏色彩位深的选项，并确保色彩空间设置为 BT.2020。`,
    date: '2024-11-28',
    category: '影音技术',
    tags: ['视频', '压制'],
    link: '#article/video-encoding'
  },
  {
    id: 'pikpak-tips',
    title: 'PikPak 配合播放器实现秒开 4K',
    excerpt: '通过 WebDAV 协议将云盘挂载到本地播放器，打造私人影视库。',
    content: `## 云端观影的新高度\nPikPak 的优势在于其强大的离线解析能力和不限速下载。通过 WebDAV 协议，我们可以将其与本地播放器完美融合。\n\n## 挂载流程\n1. **获取 WebDAV 地址**: 在 PikPak 官网或客户端开启第三方访问权限。\n2. **使用 Infuse 或 PotPlayer**: 输入提供的服务器地址、账号和密码。\n\n## 极速体验\n由于直连加速，即便是 80GB 的 4K 原盘文件，在开启后通常只需等待 3-5 秒即可开始流畅播放。`,
    date: '2024-12-01',
    category: '有趣站点',
    tags: ['云盘', '工具'],
    link: '#article/pikpak-tips'
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt 提示词工程：提升 AI 翻译质量',
    excerpt: '如何通过精准的提示词让 Gemini 翻译出更有电影感的对白。',
    content: `## 提示词的力量\nAI 的输出质量 90% 取决于你的 Prompt。对于电影字幕翻译，你需要赋予它特定的“角色”。\n\n## 推荐模版\n你可以尝试使用以下提示词：\n> "你是一位资深的电影翻译专家，擅长信达雅的翻译风格。请将以下对白翻译为中文，注意保持语境的连贯性，并使用通俗易懂的口语表达。"\n\n## 术语表 (Glossary)\n在翻译长篇系列剧集时，维护一份术语表并随提示词一起发送，可以有效避免角色译名不统一的问题。`,
    date: '2024-12-05',
    category: 'AI应用',
    tags: ['AI', '翻译'],
    link: '#article/prompt-engineering'
  },
  {
    id: 'nas-setup',
    title: '家用 NAS 选购与多端协同搭建方案',
    excerpt: '从零开始配置你的家庭数字化中心，实现全屋影视资源共享。',
    content: `## 硬件选择：白裙还是黑群？\n对于大多数用户，群晖 (Synology) 的官方硬件提供了最省心的体验。但如果你追求极致性价比，组装一台黑群晖或使用 TrueNAS 也是极佳的选择。\n\n## 核心服务部署\n- **Docker**: 用于运行各类增强工具。\n- **Plex / Emby / Jellyfin**: 构建美观的媒体墙。\n\n## 远程访问\n通过 Lucky 或 DDNS-Go 实现内网穿透，让你无论在任何地方都能访问家里的海量资源。`,
    date: '2024-12-10',
    category: '系统教程',
    tags: ['NAS', '硬件'],
    link: '#article/nas-setup'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '教程文章', path: '/articles' },
  { label: '关于我', path: '/about' },
];

export const SKILLS = [
  '字幕制作', '视频压制', 'PT 运营', 'React', 'TypeScript', 'Tailwind CSS'
];
