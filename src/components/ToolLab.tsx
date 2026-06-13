import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Expand, Play, X } from "lucide-react";
import { useEffect, useState } from "react";

type PortfolioItem = {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  src: string;
  poster?: string;
  type: "image" | "video";
  size: "featured" | "standard" | "wide";
  status?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: "coze",
    index: "01",
    category: "AI WORKFLOW",
    title: "Coze JSON 数据预检流程",
    description: "面向数据清洗与标注前预审的自动化工作流，实现字段缺失检测、格式校验、结构拦截和异常结果输出。",
    tags: ["Coze", "JSON Schema", "数据预检"],
    src: "/media/portfolio/coze-workflow.webp",
    type: "image",
    size: "featured",
  },
  {
    id: "snake",
    index: "02",
    category: "PRODUCT DESIGN",
    title: "安全避蛇助手 APP",
    description: "围绕户外风险预警、附近风险查看与一键上报设计的移动端产品方案。",
    tags: ["移动产品", "风险地图", "交互设计"],
    src: "/media/portfolio/snake-safety-app.webp",
    type: "image",
    size: "standard",
  },
  {
    id: "rpa",
    index: "03",
    category: "RPA AUTOMATION",
    title: "RPA 自动化工作流搭建",
    description: "解决法务逐张截图的重复工作。2023 年 3 月至今累计处理 5000 多张图片，原本人工至少需要 1 天，自动化流程约 2 小时即可完成，人效提升 80% 以上。同事只需在旁监看流程运行。",
    tags: ["5000+ 张图片", "1 天缩短至 2 小时", "人效提升 80%+"],
    src: "/media/portfolio/rpa-workflow.mp4",
    poster: "/media/portfolio/rpa-workflow-cover.jpg",
    type: "video",
    size: "wide",
  },
  {
    id: "yanxue",
    index: "04",
    category: "PRODUCT CONCEPT",
    title: "研途直聘",
    description: "连接研学人才与机构需求的任务对接平台，目前处于产品开发阶段。",
    tags: ["研学行业", "人才匹配", "在研项目"],
    src: "/media/portfolio/yanxue-recruiting.webp",
    type: "image",
    size: "standard",
    status: "正在开发中",
  },
  {
    id: "travel",
    index: "05",
    category: "VISUAL CAMPAIGN",
    title: "北京冬令营宣传海报",
    description: "面向研学旅行场景的信息型宣传设计，组织课程卖点、路线信息与报名入口。",
    tags: ["视觉设计", "研学旅行", "信息编排"],
    src: "/media/portfolio/travel-poster.webp",
    type: "image",
    size: "standard",
  },
  {
    id: "drama",
    index: "06",
    category: "AI CONTENT",
    title: "玄幻短剧视觉创作",
    description: "围绕人物设定、世界观与戏剧冲突完成短剧主视觉概念创作。",
    tags: ["AI 视觉", "短剧创作", "概念设计"],
    src: "/media/portfolio/short-drama.webp",
    type: "image",
    size: "standard",
  },
  {
    id: "fishing",
    index: "07",
    category: "AI CONTENT",
    title: "钓鱼佬除了鱼，什么都能钓到",
    description: "以第一人称钓鱼视角切入怪兽灾难场景，通过强烈的尺度反差和黑色幽默构建短片电影主视觉。",
    tags: ["AI 视觉", "短片电影", "创意海报"],
    src: "/media/portfolio/fishing-everything.webp",
    type: "image",
    size: "standard",
  },
];

export default function ToolLab() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (!activeItem) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveItem(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  return (
    <>
      <div className="portfolio-showcase">
        {portfolioItems.map((item, index) => (
          <motion.article
            key={item.id}
            className={`portfolio-work portfolio-work-${item.size}`}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: Math.min(index * 0.06, 0.24) }}
          >
            <button
              type="button"
              className="portfolio-work-media"
              onClick={() => setActiveItem(item)}
              aria-label={`查看作品：${item.title}`}
            >
              {item.type === "video" ? (
                <>
                  <img src={item.poster} alt="" loading="lazy" />
                  <span className="portfolio-play"><Play size={19} fill="currentColor" /> 播放作品</span>
                </>
              ) : (
                <img src={item.src} alt={item.title} loading="lazy" />
              )}
              <span className="portfolio-expand"><Expand size={16} /></span>
            </button>
            <div className="portfolio-work-copy">
              <div className="portfolio-work-meta">
                <span>{item.index}</span>
                <span>{item.category}</span>
                {item.status && <strong>{item.status}</strong>}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="portfolio-work-footer">
                <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <button type="button" onClick={() => setActiveItem(item)} aria-label={`展开${item.title}`}>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="portfolio-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveItem(null);
            }}
          >
            <motion.div
              className="portfolio-lightbox-panel"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label={activeItem.title}
            >
              <button className="portfolio-lightbox-close" type="button" onClick={() => setActiveItem(null)} aria-label="关闭作品">
                <X size={20} />
              </button>
              <div className="portfolio-lightbox-media">
                {activeItem.type === "video" ? (
                  <video controls autoPlay playsInline poster={activeItem.poster}>
                    <source src={activeItem.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={activeItem.src} alt={activeItem.title} />
                )}
              </div>
              <div className="portfolio-lightbox-copy">
                <span>{activeItem.category}</span>
                <h3>{activeItem.title}</h3>
                <p>{activeItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
