export default function Divider() {
  return (
    <div className="my-6 flex items-center gap-4">
      <hr className="flex-1 border-slate-200" />

      <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
        Or
      </span>

      <hr className="flex-1 border-slate-200" />
    </div>
  );
}
