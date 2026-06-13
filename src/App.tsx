import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Bot,
  Braces,
  Brain,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Eye,
  FileText,
  Mail,
  Network,
  Phone,
  Play,
  Search,
  Shapes,
  Sparkles,
  Video,
  Wrench,
} from "lucide-react";
import { useCallback, useState } from "react";
import AmbientMusicButton from "./components/AmbientMusicButton";
import Ferrofluid from "./components/Ferrofluid";
import Galaxy from "./components/Galaxy";
import GlobalBorderGlow from "./components/GlobalBorderGlow";
import ContactCard from "./components/ContactCard";
import ExperienceCarousel from "./components/ExperienceCarousel";
import LoadingScreen from "./components/LoadingScreen";
import Hyperspeed from "./components/Hyperspeed";
import PillNav from "./components/PillNav";
import ProjectCard, { type Project } from "./components/ProjectCard";
import SectionLabel from "./components/SectionLabel";
import SkillCard from "./components/SkillCard";
import ToolLab from "./components/ToolLab";
import WordsPullUpMultiStyle from "./components/WordsPullUpMultiStyle";

const projects: Project[] = [
  {
    number: "01",
    title: "小红书「点点」AI 搜索 SFT 数据标评项目",
    period: "2025.04 - 2025.08",
    role: "AI 训练师 / 项目助理",
    icon: "search",
    tags: ["SFT 数据", "生活场景", "图文一致性", "规则构建", "质检闭环"],
    description: "参与小红书独立 AI 搜索 App「点点」的 SFT 训练数据构建，覆盖旅行规划、美食推荐、购物决策、生活技巧等场景。负责场景指南、图文一致性、需求层级、试标管理、动态质检与评测 SOP。",
    metrics: [
      { value: "25", label: "一级生活场景规则建设" },
      { value: "8,000 对", label: "试标期管理数据" },
      { value: "93.8%", label: "标注一致率" },
      { value: "+30%", label: "工具与 SOP 人效提升" },
      { value: "+9.2%", label: "旅行场景回答准确率" },
    ],
  },
  {
    number: "02",
    title: "腾讯混元多模态 VQA 视觉问答项目",
    period: "2025.09 - 2025.12",
    role: "多模态标注实习生 / 项目助理",
    icon: "eye",
    tags: ["VQA", "视觉问答", "OCR", "视觉幻觉", "Badcase 分析"],
    description: "参与腾讯混元及腾讯元宝相关视觉问答数据建设，覆盖 K12 教育、电商导购和生活百科。重点处理看图不识数、答非所问、OCR 乱码和强答幻觉等问题。",
    metrics: [
      { value: "7 类", label: "核心问题标签体系" },
      { value: "≥20%", label: "日常抽检比例" },
      { value: "2.8 万", label: "高难度样本处理" },
      { value: "95%+", label: "正式标注准确率" },
      { value: "97%", label: "答案事实准确率" },
    ],
  },
  {
    number: "03",
    title: "腾讯音画一致性 Caption 图像描述项目",
    period: "2026.01 - 2026.05",
    role: "AI 数据训练 / 多模态质检实习生",
    icon: "file",
    tags: ["Caption", "视频理解", "音画一致", "时间轴", "AIGC 标签"],
    description: "参与视频 Caption 标注与质检，覆盖影视剧、综艺、动漫、短视频和 AIGC。对画面内容、背景音、人物动作、镜头语言和情绪氛围进行细粒度描述与对齐。",
    metrics: [
      { value: "10+", label: "规则版本更新" },
      { value: "8 步", label: "完整 Caption 标注 SOP" },
      { value: "16 项", label: "Checklist 质检分级" },
      { value: "≥95%", label: "个人标注准确率" },
      { value: "-40%", label: "基础格式核查耗时" },
    ],
  },
];

const cases = [
  { icon: CheckCircle2, metric: "93.8%", title: "从试标分歧到一致率提升", text: "通过每日复盘、规则回流和疑难样本归因，将标注一致率从 80.2% 提升至 93.8%。" },
  { icon: Eye, metric: "专项维度", title: "从 Badcase 到专项审核", text: "发现透明与反光物体识别缺陷，将问题沉淀为审核维度，避免后续大规模返工。" },
  { icon: Wrench, metric: "+30%~40%", title: "从人工核查到自动检查", text: "使用 Vibe Coding 校验字段、路径、时间轴和标签闭合，减少重复性人工核查。" },
  { icon: FileText, metric: "1.5 天", title: "从个人经验到团队 SOP", text: "将质检口径和错例判断沉淀为规则文档与 Checklist，缩短新人上手周期。" },
];

const skills = [
  { title: "数据训练与标注", items: ["SFT 数据构建", "VQA 视觉问答", "Caption 标注", "多模态图文一致性", "音画一致性判断"] },
  { title: "规则与质检", items: ["标注规则文档搭建", "Good / Bad Case 归纳", "Checklist 质检", "抽检复核", "错误归因与规则迭代"] },
  { title: "模型评测", items: ["人工打分与自动化评测", "多轮评测 SOP", "Badcase 分布统计", "模型薄弱场景定位", "生成质量评估"] },
  { title: "工具与协作", items: ["Python 数据清洗", "JSON 字段规范化", "Vibe Coding 工具开发", "飞书 / 企业微信", "多地团队协同培训"] },
];

const collaborators = [
  {
    icon: Brain,
    name: "Claude",
    role: "思维与文案",
    badge: "AI",
    description: "用于梳理复杂对象、策略、文案和信息架构，帮助我把模糊问题转化为清晰方案。",
    tags: "STRATEGY · WRITING · ARCHITECT",
  },
  {
    icon: Braces,
    name: "Codex",
    role: "代码施工",
    badge: "AI",
    description: "承担前端开发、功能实现、代码审查和调试验证，把产品想法快速变成可运行版本。",
    tags: "FRONTEND · REFACTOR · AUTO",
  },
  {
    icon: Shapes,
    name: "Gemini",
    role: "资料与多模态分析",
    badge: "AI",
    description: "辅助处理资料检索、长文本、多模态内容和不同方案的交叉验证。",
    tags: "RESEARCH · MULTIMODAL · REVIEW",
  },
  {
    icon: Video,
    name: "PixVerse",
    role: "视觉生成",
    badge: "AI",
    description: "用于视频概念、动态素材和视觉表达探索，让项目叙事更具冲击力。",
    tags: "IMAGE · VIDEO · CONCEPT",
  },
  {
    icon: Bot,
    name: "Coze",
    role: "工作流编排",
    badge: "AI",
    description: "搭建 Bot 和自动化流程，将重复任务封装为稳定、可复用的处理链路。",
    tags: "WORKFLOW · BOT · RAG",
  },
  {
    icon: BookOpen,
    name: "Obsidian",
    role: "知识管理",
    badge: "PKM",
    description: "沉淀项目复盘、规则文档和 Prompt 资产，通过双向链接构建个人知识网络。",
    tags: "NOTES · PKM · THINKING",
  },
  {
    icon: Code2,
    name: "VS Code",
    role: "开发工作台",
    badge: "INFRA",
    description: "编写代码、文档和自动化脚本的主要工作环境，也是本地验证与交付入口。",
    tags: "IDE · MARKDOWN · EXTENSION",
  },
  {
    icon: Network,
    name: "GitHub",
    role: "版本与扩展",
    badge: "INFRA",
    description: "管理版本、脚本与项目归档，并通过插件、MCP 和 Skills 扩展 AI 工作流。",
    tags: "VERSION · SCRIPTS · ARCHIVE",
  },
];

const mediaCases = [
  {
    eyebrow: "GOOD CASE / BAD CASE",
    title: "如何建立可执行的正负样本判断",
    text: "从视觉事实、合理推断到强答幻觉，用对照案例统一标注口径，并把争议样本沉淀进规则文档。",
    video: "/media/goodcase.mp4",
    poster: "/media/goodcase-cover.jpg",
  },
  {
    eyebrow: "BAD CASE ANALYSIS",
    title: "从错误现象追到模型薄弱维度",
    text: "围绕 OCR、数量、透明反光物体和图文不一致问题，展示 Badcase 归因与专项审核思路。",
    video: "/media/badcase.mp4",
    poster: "/media/badcase-cover.jpg",
  },
];

const ferrofluidColors = ["#f8fcff", "#45c8f0", "#8ce9dc"];
const hyperspeedOptions = {
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  colors: {
    roadColor: 526344,
    islandColor: 657930,
    background: 0,
    shoulderLines: 1250072,
    brokenLines: 1250072,
    leftCars: [14177983, 6770850, 12732332],
    rightCars: [242627, 941733, 3294549],
    sticks: 242627,
  },
};

function Hero() {
  return (
    <section id="home" className="river-hero">
      <Hyperspeed effectOptions={hyperspeedOptions} />
      <Galaxy />
      <div className="hero-scrim" />
      <header className="hero-topbar">
        <a href="#home" className="hero-signature">
          <strong>田丰</strong>
          <span>TianFeng</span>
        </a>
        <div className="hero-actions">
          <AmbientMusicButton />
          <a href="#contact" className="hero-control contact-control">联系我 <ArrowDownRight size={15} /></a>
        </div>
      </header>

      <div className="hero-copy">
        <p className="hero-kicker">AI DATA × MODEL EVALUATION × DELIVERY</p>
        <h1><span>田丰</span><small>TIAN FENG</small></h1>
        <div className="hero-roles">
          <strong>AI 训练师</strong>
          <strong>大模型数据标注项目经理</strong>
          <strong>技术交付经理 · 数据提效方向</strong>
        </div>
        <p className="hero-intro">把复杂任务拆成规则，把模糊问题变成数据，把重复工作交给自动化。</p>
        <div className="hero-cta-row">
          <a href="#media" className="hero-cta hero-cta-primary">查看精选案例</a>
          <a href="#contact" className="hero-cta hero-cta-secondary">联系合作</a>
        </div>
      </div>
      <p className="hyperspeed-hint">PRESS &amp; HOLD TO ACCELERATE</p>

      <PillNav
        logo="/tf-logo.svg"
        logoAlt="田丰 TF"
        items={[
          { label: "案例视频", href: "#media" },
          { label: "自动化能力", href: "#automation" },
          { label: "项目经历", href: "#experience" },
          { label: "个人经历", href: "#life" },
          { label: "联系与账号", href: "#contact" },
        ]}
        baseColor="#f4f1e8"
        pillColor="#090a0a"
        pillTextColor="#f4f1e8"
        hoveredPillTextColor="#090a0a"
        initialLoadAnimation
      />
    </section>
  );
}

function VideoCaseCard({ item, index }: { item: typeof mediaCases[number]; index: number }) {
  return (
    <motion.article
      className={`video-case-card ${index === 2 ? "is-wide" : ""}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="video-frame">
        <video controls preload="metadata" poster={item.poster}>
          <source src={item.video} type="video/mp4" />
        </video>
        <span className="video-index">0{index + 1}</span>
      </div>
      <p className="video-eyebrow">{item.eyebrow}</p>
      <h3>{item.title}</h3>
      <p className="video-description">{item.text}</p>
    </motion.article>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const finishLoading = useCallback(() => setLoaded(true), []);

  return (
    <>
      <GlobalBorderGlow />
      <AnimatePresence>{!loaded && <LoadingScreen onComplete={finishLoading} />}</AnimatePresence>
      <Ferrofluid
        className="site-ferrofluid"
        dpr={0.85}
        colors={ferrofluidColors}
        backgroundColor="#020407"
        speed={0.46}
        scale={1.5}
        turbulence={1.08}
        fluidity={0.12}
        rimWidth={0.22}
        sharpness={2.9}
        shimmer={1.12}
        glow={1.95}
        flowDirection="down"
        opacity={0.94}
        mouseInteraction
        mouseStrength={1.15}
        mouseRadius={0.28}
      />
      <main className="site-content bg-noise overflow-hidden text-primary">
        <Hero />

        <section id="about" className="px-4 py-24 md:px-6 md:py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel mx-auto max-w-6xl rounded-[2rem] border border-white/5 px-6 py-16 text-center md:px-12 md:py-24">
            <SectionLabel>AI Training / Data Evaluation</SectionLabel>
            <h2 className="mx-auto max-w-5xl text-3xl font-bold leading-[1.2] tracking-[-0.04em] md:text-6xl">
              <WordsPullUpMultiStyle segments={[
                { text: "我不是只做标注，" },
                { text: "我更关注数据如何真正推动模型变好。", className: "text-primary" },
                { text: "从规则、质检到评测，我把复杂任务拆成可执行的标准流程。", className: "mt-2 text-primary/45" },
              ]} />
            </h2>
            <p className="mx-auto mt-10 max-w-3xl text-sm leading-8 text-gray-400 md:text-base">
              我主要聚焦多模态数据训练与模型评测，项目覆盖规则文档、试标校准、人员培训、动态质检、Badcase 归因、评测 SOP 和自动化工具提效。
            </p>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-page px-4 py-24 md:px-6 md:py-32">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="max-w-4xl text-5xl font-bold tracking-[-0.055em] md:text-8xl">核心项目经历</h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">从 SFT、多模态 VQA 到视频 Caption，我参与的是模型能力背后的数据工程。</p>
          <div className="mt-16 grid gap-6">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        </section>

        <section id="media" className="mx-auto max-w-page px-4 py-24 md:px-6 md:py-32">
          <SectionLabel>Video Casebook</SectionLabel>
          <h2 className="max-w-5xl text-5xl font-bold tracking-[-0.055em] md:text-8xl">把判断过程讲清楚。</h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">这里不只展示结果，也展示我如何理解规则、拆解错误、完成多模态数据交付。</p>
          <div className="video-case-grid">{mediaCases.map((item, index) => <VideoCaseCard key={item.title} item={item} index={index} />)}</div>
        </section>

        <section className="spring-film-section px-4 py-24 md:px-6 md:py-32">
          <div className="spring-film mx-auto max-w-page">
            <div className="spring-film-copy">
              <SectionLabel>Public Service Film</SectionLabel>
              <h2>把春天种进沙漠</h2>
              <p>一支关于生长、坚持与公共价值的公益短片。它也是我在内容理解、叙事节奏和多模态审美上的一次完整实践。</p>
              <span><Play size={14} /> 01:01 · 公益影像作品</span>
            </div>
            <video controls preload="metadata" poster="/media/spring-desert-cover.jpg">
              <source src="/media/spring-desert.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section id="automation" className="mx-auto max-w-page px-4 py-24 md:px-6 md:py-32">
          <SectionLabel>Selected Portfolio</SectionLabel>
          <div className="tool-lab-heading">
            <h2>作品不是概念，<br />而是解决问题的过程。</h2>
            <p>从 AI 工作流、RPA 自动化到产品方案与视觉内容创作，这里集中展示我在工具落地、效率提升和内容表达上的实践。</p>
          </div>
          <ToolLab />
        </section>

        <section id="cases" className="mx-auto max-w-page px-4 py-24 md:px-6 md:py-32">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] md:text-7xl">我如何把数据标注做成模型改进闭环</h2>
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {cases.map(({ icon: Icon, metric, title, text }, index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -4 }} className="glass-card rounded-[2rem] border border-white/5 p-7 hover:border-primary/30 md:p-9">
                <div className="flex items-center justify-between"><Icon className="text-primary/65" strokeWidth={1.4} /><strong className="text-2xl text-primary/35">{metric}</strong></div>
                <h3 className="mt-20 text-2xl font-bold tracking-[-0.035em] md:text-3xl">{title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-page px-4 py-24 md:px-6 md:py-32">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="text-5xl font-bold tracking-[-0.055em] md:text-8xl">能力矩阵</h2>
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{skills.map((skill) => <SkillCard key={skill.title} {...skill} />)}</div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-gray-500 md:grid-cols-4">
            {[Brain, Database, Search, Sparkles].map((Icon, i) => <div key={i} className="flex items-center gap-3 border-t border-white/10 pt-4"><Icon size={16} />{["模型理解", "数据策略", "评测归因", "工具提效"][i]}</div>)}
          </div>
        </section>

        <section className="collaborators-section px-4 py-24 md:px-6 md:py-32">
          <div className="mx-auto max-w-page">
            <SectionLabel>Digital Collaborators</SectionLabel>
            <div className="collaborators-heading">
              <h2>COLLABORATORS</h2>
              <div>
                <strong>我不是一个人在工作。</strong>
                <p>这些数字伙伴承担研究、创作、开发与交付中的不同角色，共同组成我的 AI 工作流。</p>
                <small>工具协作关系展示，不代表与相关品牌存在官方商业合作。</small>
              </div>
            </div>

            <div className="collaborator-group-label"><span>AI PARTNERS</span><i /></div>
            <div className="collaborators-grid">
              {collaborators.slice(0, 4).map(({ icon: Icon, name, role, badge, description, tags }, index) => (
                <motion.article
                  key={name}
                  className="collaborator-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="collaborator-card-top"><Icon /><span>{badge}</span></div>
                  <h3>{name}</h3>
                  <p className="collaborator-role">{role}</p>
                  <p className="collaborator-description">{description}</p>
                  <footer>{tags}</footer>
                </motion.article>
              ))}
            </div>

            <div className="collaborator-group-label"><span>CRAFT + INFRA</span><i /></div>
            <div className="collaborators-grid">
              {collaborators.slice(4).map(({ icon: Icon, name, role, badge, description, tags }, index) => (
                <motion.article
                  key={name}
                  className="collaborator-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="collaborator-card-top"><Icon /><span>{badge}</span></div>
                  <h3>{name}</h3>
                  <p className="collaborator-role">{role}</p>
                  <p className="collaborator-description">{description}</p>
                  <footer>{tags}</footer>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-4 pt-24 md:px-6 md:pt-32">
          <div className="glass-panel mx-auto max-w-page rounded-[2rem] border border-white/5 px-6 py-16 md:px-12 md:py-24">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.06em] md:text-8xl">让数据成为模型进化的燃料。</h2>
            <div className="contact-layout">
              <div>
                <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">如果你需要多模态数据评测、标注规则搭建、SFT 数据质检、自动化提效或模型 Badcase 分析支持，可以与我联系。</p>
                <div className="mt-10 grid gap-3 md:grid-cols-2">
                  <ContactCard icon="mail" label="邮箱" value="2427219422@qq.com" href="mailto:2427219422@qq.com" />
                  <ContactCard icon="work" label="电话" value="15658888916" href="tel:15658888916" />
                  <ContactCard icon="location" label="岗位方向" value="AI 训练师 / 项目经理 / 技术交付" />
                  <ContactCard icon="work" label="协作方式" value="可远程协作 / 可参与项目制交付" />
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="mailto:2427219422@qq.com" className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-bold text-black"><Mail size={17} />发送邮件</a>
                  <a href="tel:15658888916" className="inline-flex items-center gap-3 rounded-full border border-primary/20 px-6 py-3 text-sm text-primary"><Phone size={17} />拨打电话</a>
                  <a href="/田丰-AI训练师-简历.docx" download className="inline-flex items-center gap-3 rounded-full border border-primary/20 px-6 py-3 text-sm text-primary"><Download size={17} />下载简历</a>
                </div>
              </div>
              <figure className="wechat-card">
                <img src="/media/wechat-qr.png" alt="田丰微信二维码" loading="lazy" />
                <figcaption><span>WECHAT</span><strong>扫码添加微信</strong></figcaption>
              </figure>
            </div>

            <div className="social-heading"><span>SELF MEDIA</span><h3>我的自媒体账号</h3></div>
            <div className="social-grid">
              {[
                { name: "抖音", src: "/media/douyin.jpg", note: "短视频内容与项目分享" },
                { name: "快手", src: "/media/kuaishou.jpg", note: "个人创作与实践记录" },
                { name: "小红书", src: "/media/xiaohongshu.jpg", note: "AI 学习与成长笔记" },
              ].map((item) => (
                <figure className="social-card" key={item.name}>
                  <img src={item.src} alt={`${item.name}账号二维码`} loading="lazy" />
                  <figcaption><strong>{item.name}</strong><span>{item.note}</span><ArrowRight size={15} /></figcaption>
                </figure>
              ))}
            </div>

          </div>
        </section>

        <section id="life" className="life-section py-24 md:py-32">
          <div className="mx-auto max-w-page px-4 md:px-6">
            <SectionLabel>Beyond The Work</SectionLabel>
            <h2 className="max-w-5xl text-5xl font-bold tracking-[-0.055em] md:text-8xl">两段经历，两种成长。</h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-400 md:text-base">左右画廊分别记录校园实践与军旅生涯。将鼠标停在任意一栏，通过滚轮或上下拖动浏览照片。</p>
          </div>
          <ExperienceCarousel />
        </section>

        <footer className="mx-auto flex max-w-page flex-col gap-3 border-t border-white/10 px-6 py-8 text-[11px] text-gray-600 md:flex-row md:justify-between">
          <span>田丰 · AI Trainer Portfolio</span><span>React · TypeScript · Framer Motion</span>
        </footer>
      </main>
    </>
  );
}

export default App;
