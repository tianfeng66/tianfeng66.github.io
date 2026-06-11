import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";
import "./PillNav.css";

export type PillNavItem = { label: string; href: string; ariaLabel?: string };

type PillNavProps = {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
};

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#f4f1e8",
  pillColor = "#090a0a",
  hoveredPillTextColor = "#090a0a",
  pillTextColor = "#f4f1e8",
  initialLoadAnimation = true,
}: PillNavProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const circles = useRef<Array<HTMLSpanElement | null>>([]);
  const timelines = useRef<Array<gsap.core.Timeline | null>>([]);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveHref(`#${visible.target.id}`);
    }, { rootMargin: "-28% 0px -55% 0px", threshold: [0, .15, .35] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const layout = () => circles.current.forEach((circle, index) => {
      if (!circle?.parentElement) return;
      const pill = circle.parentElement;
      const { width, height } = pill.getBoundingClientRect();
      const radius = ((width * width) / 4 + height * height) / (2 * height);
      const diameter = Math.ceil(radius * 2) + 2;
      const delta = Math.ceil(radius - Math.sqrt(Math.max(0, radius ** 2 - width ** 2 / 4))) + 1;
      Object.assign(circle.style, { width: `${diameter}px`, height: `${diameter}px`, bottom: `-${delta}px` });
      gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${diameter - delta}px` });
      const label = pill.querySelector<HTMLElement>(".pill-label");
      const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover");
      gsap.set(label, { y: 0 });
      gsap.set(hoverLabel, { y: height + 18, opacity: 0 });
      timelines.current[index]?.kill();
      timelines.current[index] = gsap.timeline({ paused: true })
        .to(circle, { scale: 1.2, duration: 1.1, ease }, 0)
        .to(label, { y: -(height + 8), duration: 1.1, ease }, 0)
        .to(hoverLabel, { y: 0, opacity: 1, duration: 1.1, ease }, 0);
    });

    layout();
    window.addEventListener("resize", layout);
    document.fonts?.ready.then(layout).catch(() => undefined);
    gsap.set(menuRef.current, { autoAlpha: 0, y: 12 });
    if (initialLoadAnimation) {
      gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: .55, ease });
      gsap.fromTo(itemsRef.current, { width: 0, opacity: 0 }, { width: "auto", opacity: 1, duration: .7, ease });
    }
    return () => {
      window.removeEventListener("resize", layout);
      timelines.current.forEach((timeline) => timeline?.kill());
    };
  }, [ease, initialLoadAnimation, items]);

  const animatePill = (index: number, entering: boolean) => {
    const timeline = timelines.current[index];
    if (!timeline) return;
    gsap.to(timeline, {
      progress: entering ? 1 : 0,
      duration: entering ? .34 : .22,
      ease,
      overwrite: true,
    });
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    const lines = menuButtonRef.current?.querySelectorAll(".hamburger-line");
    if (lines?.length === 2) {
      gsap.to(lines[0], { rotation: next ? 45 : 0, y: next ? 3 : 0, duration: .25, ease });
      gsap.to(lines[1], { rotation: next ? -45 : 0, y: next ? -3 : 0, duration: .25, ease });
    }
    if (next) {
      gsap.set(menuRef.current, { visibility: "visible" });
    }
    gsap.to(menuRef.current, {
      opacity: next ? 1 : 0,
      y: next ? 0 : 12,
      duration: .28,
      ease,
      onComplete: () => {
        if (!next) gsap.set(menuRef.current, { visibility: "hidden" });
      },
    });
  };

  const closeMenu = () => {
    if (!menuOpen) return;
    setMenuOpen(false);
    gsap.to(menuButtonRef.current?.querySelectorAll(".hamburger-line") ?? [], { rotation: 0, y: 0, duration: .2, ease });
    gsap.to(menuRef.current, {
      opacity: 0,
      y: 12,
      duration: .2,
      ease,
      onComplete: () => gsap.set(menuRef.current, { visibility: "hidden" }),
    });
  };

  const variables = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": pillTextColor,
  } as CSSProperties;

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`.trim()} aria-label="首页导航" style={variables}>
        <a
          ref={logoRef}
          className="pill-logo"
          href="#home"
          aria-label="返回首页"
          onMouseEnter={() => gsap.to(logoImgRef.current, { rotate: "+=360", duration: .45, ease })}
        >
          <img ref={logoImgRef} src={logo} alt={logoAlt} />
        </a>
        <div ref={itemsRef} className="pill-nav-items">
          <ul className="pill-list" role="menubar">
            {items.map((item, index) => (
              <li key={item.href} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  className={`pill${activeHref === item.href ? " is-active" : ""}`}
                  aria-label={item.ariaLabel ?? item.label}
                  onMouseEnter={() => animatePill(index, true)}
                  onMouseLeave={() => animatePill(index, false)}
                >
                  <span ref={(element) => { circles.current[index] = element; }} className="hover-circle" />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover" aria-hidden="true">{item.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button ref={menuButtonRef} type="button" className="mobile-menu-button" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="切换导航菜单">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>
      <div ref={menuRef} className="mobile-menu-popover" style={variables}>
        <ul className="mobile-menu-list">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={`mobile-menu-link${activeHref === item.href ? " is-active" : ""}`} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
