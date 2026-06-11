import { Mail, MapPin, BriefcaseBusiness } from "lucide-react";

const icons = { mail: Mail, location: MapPin, work: BriefcaseBusiness };

export default function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: keyof typeof icons;
  label: string;
  value: string;
  href?: string;
}) {
  const Icon = icons[icon];
  const content = (
    <div className="rounded-2xl border border-white/5 bg-white/[0.025] p-5 transition-colors hover:border-primary/25">
      <Icon className="h-5 w-5 text-primary/60" strokeWidth={1.5} />
      <span className="mt-5 block text-[10px] uppercase tracking-[0.16em] text-gray-600">{label}</span>
      <strong className="mt-2 block text-sm font-medium leading-6 text-primary/85">{value}</strong>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
