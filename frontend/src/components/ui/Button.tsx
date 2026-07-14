type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled: boolean;
};

export default function Button({ children, type, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className="bg-purple-700 w-full"
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}
