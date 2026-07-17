import authVisual from "../../assets/images/auth-visual-1.png";

export default function VisualPanel() {
  return (
    <section className="hidden lg:flex flex-col items-center justify-center bg-slate-900 px-16 py-24 text-white">
      <img
        src={authVisual}
        alt="Project management illustration"
        className="w-4/5"
      />

      <div className="mt-8 max-w-lg space-y-4 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Stay organised. <br /> Ship faster.
        </h2>

        <p className="mx-auto max-w-md text-slate-300">
          Solia brings all your projects, tasks and team communication together
          in one beautiful workspace.
        </p>

        {/* Carousel indicators */}
      </div>
    </section>
  );
}
