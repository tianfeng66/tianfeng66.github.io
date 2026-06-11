import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
  Check,
  Copy,
  Home,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";
import { useMemo, useState } from "react";

type ToolId = "yanxue" | "snake" | "house" | "text";

const tools = [
  {
    id: "yanxue" as const,
    index: "01",
    eyebrow: "WECHAT MINI PROGRAM",
    title: "研途直聘",
    summary: "研学教官与任务智能匹配平台",
    tech: "多维评分 · 任务撮合",
    icon: Users,
  },
  {
    id: "snake" as const,
    index: "02",
    eyebrow: "ANDROID / WEB",
    title: "户外蛇类预警助手",
    summary: "位置风险提醒与现场上报工具",
    tech: "地图预警 · 本地记录",
    icon: ShieldCheck,
  },
  {
    id: "house" as const,
    index: "03",
    eyebrow: "FASTAPI / RAG",
    title: "房产 AI 顾问",
    summary: "房源检索、对比与依据问答",
    tech: "检索增强 · 数据对比",
    icon: Home,
  },
  {
    id: "text" as const,
    index: "04",
    eyebrow: "WECHAT MINI PROGRAM",
    title: "文本格式处理器",
    summary: "一键清理中英混排异常空格",
    tech: "正则清洗 · 即时复制",
    icon: Wand2,
  },
];

const matchTasks = {
  "亚运会研学营": { distance: 18, time: 15, identity: 15, major: 12, experience: 14, rating: 9, salary: 9 },
  "自然科普夏令营": { distance: 16, time: 13, identity: 11, major: 15, experience: 12, rating: 9, salary: 8 },
  "红色教育基地讲解": { distance: 14, time: 15, identity: 13, major: 14, experience: 13, rating: 9, salary: 10 },
};

function YanxueDemo() {
  const [task, setTask] = useState<keyof typeof matchTasks>("亚运会研学营");
  const [score, setScore] = useState(92);
  const [matched, setMatched] = useState(true);
  const details = matchTasks[task];

  const runMatch = () => {
    setMatched(false);
    window.setTimeout(() => {
      setScore(Object.values(details).reduce((total, value) => total + value, 0));
      setMatched(true);
    }, 420);
  };

  return (
    <div className="tool-demo yanxue-demo">
      <div className="tool-demo-toolbar">
        <span><i className="status-dot" /> 匹配引擎在线</span>
        <select value={task} onChange={(event) => setTask(event.target.value as keyof typeof matchTasks)}>
          {Object.keys(matchTasks).map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <div className="match-layout">
        <div className="instructor-profile">
          <div className="profile-avatar">TF</div>
          <span>候选教官 #0238</span>
          <h4>退役大学生 · 研学教官</h4>
          <p>杭州 · 3 年带队经验 · 历史评分 4.9</p>
          <div className="profile-tags"><b>军事研学</b><b>安全管理</b><b>队列训练</b></div>
        </div>
        <div className="match-result">
          <div className="score-ring"><strong>{matched ? score : "..."}</strong><span>MATCH</span></div>
          <div className="score-bars">
            {Object.entries(details).slice(0, 5).map(([key, value]) => (
              <div key={key}>
                <span>{({ distance: "距离", time: "时间", identity: "身份", major: "专业", experience: "经验" } as Record<string, string>)[key]}</span>
                <i><em style={{ width: `${(value / (key === "distance" ? 20 : 15)) * 100}%` }} /></i>
                <b>{value}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="tool-primary-action" onClick={runMatch}><Sparkles size={15} /> 重新计算匹配度</button>
    </div>
  );
}

const risks = [
  { level: "低风险", distance: 420, x: 22, y: 62, color: "low", note: "历史记录点，经过草丛和石堆时注意观察。" },
  { level: "中风险", distance: 350, x: 38, y: 30, color: "medium", note: "附近近期有蛇类出没上报，建议结伴通行。" },
  { level: "高风险", distance: 230, x: 68, y: 35, color: "high", note: "请绕开水边与阴暗区域，不要靠近或驱赶。" },
  { level: "紧急风险", distance: 96, x: 78, y: 66, color: "urgent", note: "请立即远离现场，并联系专业人员处理。" },
];

function SnakeDemo() {
  const [selected, setSelected] = useState(risks[3]);
  const [reported, setReported] = useState(false);

  return (
    <div className="tool-demo snake-demo">
      <div className="risk-map">
        <div className="map-grid-lines" />
        <span className="map-road road-a" />
        <span className="map-road road-b" />
        <div className="current-location"><i /><span>当前位置</span></div>
        {risks.map((risk) => (
          <button
            key={risk.level}
            className={`risk-point ${risk.color} ${selected.level === risk.level ? "active" : ""}`}
            style={{ left: `${risk.x}%`, top: `${risk.y}%` }}
            onClick={() => setSelected(risk)}
            aria-label={risk.level}
          />
        ))}
        <div className="map-location-label"><MapPin size={14} /> 白云山风景区</div>
      </div>
      <div className="risk-console">
        <p>500 米实时安全半径</p>
        <h4>{selected.level}</h4>
        <strong>距离约 {selected.distance} 米</strong>
        <span>{selected.note}</span>
        <div className="risk-actions">
          <button onClick={() => setReported(true)}>{reported ? <Check size={15} /> : <AlertTriangle size={15} />}{reported ? "上报成功" : "一键上报"}</button>
          <button onClick={() => setSelected(risks[0])}>规划避让</button>
        </div>
      </div>
    </div>
  );
}

const properties = [
  { id: 1, title: "东城华府三居", district: "河东新区", layout: "三居", area: 86.5, price: 72.8, tags: ["近学校", "成熟社区"] },
  { id: 2, title: "阳光水岸两居", district: "河东新区", layout: "两居", area: 78, price: 58, tags: ["近公园", "低总价"] },
  { id: 3, title: "滨江花园四居", district: "老城板块", layout: "四居", area: 118, price: 105, tags: ["大户型", "成熟配套"] },
  { id: 4, title: "锦绣苑两居", district: "老城板块", layout: "两居", area: 66, price: 45, tags: ["近菜市", "低总价"] },
  { id: 5, title: "龙湖雅苑三居", district: "空港板块", layout: "三居", area: 95, price: 88, tags: ["次新房", "精装"] },
  { id: 6, title: "河畔名居三居", district: "河东新区", layout: "三居", area: 92, price: 69, tags: ["近商圈", "可看江"] },
];

function HouseDemo() {
  const [keyword, setKeyword] = useState("");
  const [maxPrice, setMaxPrice] = useState(90);
  const [selected, setSelected] = useState<number[]>([1, 6]);
  const [answer, setAnswer] = useState("预算 80 万，优先看总价、通勤与房龄之间的平衡。可以先筛选河东新区的两居或三居，再重点核验产权、物业和采光。");
  const filtered = useMemo(() => properties.filter((item) => (
    item.price <= maxPrice && (!keyword || `${item.title}${item.district}${item.layout}`.includes(keyword))
  )), [keyword, maxPrice]);

  const toggle = (id: number) => {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current.slice(-1), id]);
  };

  return (
    <div className="tool-demo house-demo">
      <div className="property-filter">
        <label><Search size={15} /><input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="搜索区域、户型或小区" /></label>
        <label className="price-filter">总价 ≤ <strong>{maxPrice} 万</strong><input type="range" min="45" max="110" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} /></label>
      </div>
      <div className="property-workspace">
        <div className="property-results">
          {filtered.map((item) => (
            <button key={item.id} className={selected.includes(item.id) ? "selected" : ""} onClick={() => toggle(item.id)}>
              <span>{item.district} · {item.layout} · {item.area}㎡</span>
              <h4>{item.title}</h4>
              <strong>{item.price} 万</strong>
              <small>{item.tags.join(" / ")}</small>
            </button>
          ))}
          {!filtered.length && <p className="empty-tool-state">没有匹配房源，请调整筛选条件。</p>}
        </div>
        <aside className="ai-answer">
          <p><Sparkles size={14} /> AI 中肯建议</p>
          <span>{answer}</span>
          <button onClick={() => setAnswer("两套已选房源中，东城华府面积与房龄更均衡；河畔名居总价更克制。建议下一步实地核验采光、噪声、物业费与产权状态。")}>对比已选 {selected.length} 套</button>
        </aside>
      </div>
    </div>
  );
}

function cleanText(text: string, removeEmptyLines: boolean) {
  let result = text
    .replace(/([a-zA-Z0-9])\s+([^\x00-\x7F\s])/g, "$1$2")
    .replace(/([^\x00-\x7F\s])\s+([a-zA-Z0-9])/g, "$1$2")
    .replace(/\s+([，。！？；：、“”‘’（）《》【】])/g, "$1")
    .replace(/([，。！？；：、“”‘’（）《》【】])\s+/g, "$1");
  if (removeEmptyLines) result = result.replace(/^\s*[\r\n]/gm, "");
  return result;
}

function TextDemo() {
  const [input, setInput] = useState("AI 训练师 需要把 JSON 数据， 转换成可执行的规则。\n\n同时 保留 English words 之间的正常空格。");
  const [output, setOutput] = useState("");
  const [removeLines, setRemoveLines] = useState(true);
  const [copied, setCopied] = useState(false);

  const process = () => setOutput(cleanText(input, removeLines));
  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="tool-demo text-demo">
      <div className="text-processor-grid">
        <label><span>输入文本 <b>{input.length} 字符</b></span><textarea value={input} onChange={(event) => setInput(event.target.value)} /></label>
        <div className="processor-arrow"><ArrowUpRight /></div>
        <label><span>处理结果 <b>{output ? `移除 ${input.length - output.length} 个字符` : "等待处理"}</b></span><textarea value={output} readOnly placeholder="处理结果将在这里显示" /></label>
      </div>
      <div className="processor-actions">
        <label><input type="checkbox" checked={removeLines} onChange={(event) => setRemoveLines(event.target.checked)} /> 删除空行</label>
        <button className="tool-primary-action" onClick={process}><Wand2 size={15} /> 删除异常空格</button>
        <button disabled={!output} onClick={copy}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? "已复制" : "复制结果"}</button>
      </div>
    </div>
  );
}

const demos: Record<ToolId, () => JSX.Element> = {
  yanxue: YanxueDemo,
  snake: SnakeDemo,
  house: HouseDemo,
  text: TextDemo,
};

export default function ToolLab() {
  const [activeId, setActiveId] = useState<ToolId>("yanxue");
  const activeTool = tools.find((tool) => tool.id === activeId) ?? tools[0];
  const ActiveDemo = demos[activeId];

  return (
    <div className="tool-lab">
      <nav className="tool-switcher" aria-label="工具体验切换">
        {tools.map(({ id, index, title, summary, icon: Icon }) => (
          <button key={id} className={activeId === id ? "active" : ""} onClick={() => setActiveId(id)}>
            <span>{index}</span>
            <Icon size={19} strokeWidth={1.5} />
            <div><strong>{title}</strong><small>{summary}</small></div>
            <ArrowUpRight size={15} />
          </button>
        ))}
      </nav>

      <section className="tool-stage">
        <header>
          <div>
            <p>{activeTool.eyebrow}</p>
            <h3>{activeTool.title}</h3>
          </div>
          <span>LIVE DEMO <i /></span>
        </header>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className="tool-stage-body"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
          >
            <ActiveDemo />
          </motion.div>
        </AnimatePresence>
        <footer>
          <span>{activeTool.tech}</span>
          <strong>基于原项目核心逻辑重构为站内体验版</strong>
        </footer>
      </section>
    </div>
  );
}
