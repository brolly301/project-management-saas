type AuthHeaderProps = {
  title: string;
  subtitle: string;
};

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>

      <p className="mt-2 text-base text-slate-500">{subtitle}</p>
    </div>
  );
}
