export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary/60">
      <span className="h-px w-8 bg-primary/30" />
      {children}
    </div>
  );
}
