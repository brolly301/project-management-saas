import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export default function Button({
  children,
  className,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      {...buttonProps}
      className={`
    w-full
    rounded-xl
    bg-violet-600
    px-4
    py-3
    text-sm
    font-semibold
    text-white
    transition
    hover:bg-violet-700
    focus:outline-none
    focus:ring-4
    focus:ring-violet-200
    disabled:cursor-not-allowed
    disabled:opacity-50
  ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
