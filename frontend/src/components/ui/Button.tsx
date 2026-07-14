type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export default function Button({ children, type }: ButtonProps) {
  return (
    <button className="bg-purple-700 w-full" type={type ?? "button"}>
      {children}
    </button>
  );
}
