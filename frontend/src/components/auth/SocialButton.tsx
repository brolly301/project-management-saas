import type { ReactNode } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

type SocialButtonProps = {
  children: ReactNode;
  provider: "google" | "github";
};

export default function SocialButton({
  provider,
  children,
}: SocialButtonProps) {
  const icon =
    provider === "google" ? (
      <FaGoogle className="h-5 w-5" />
    ) : (
      <FaGithub className="h-5 w-5" />
    );

  return (
    <button
      type="button"
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        py-3
        font-medium
        text-slate-700
        transition
        hover:bg-slate-50
      "
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
