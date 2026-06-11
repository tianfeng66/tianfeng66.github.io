export default function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <strong className="block text-2xl font-bold tracking-[-0.04em] text-primary md:text-3xl">{value}</strong>
      <span className="mt-2 block text-xs leading-relaxed text-gray-500">{label}</span>
    </div>
  );
}
