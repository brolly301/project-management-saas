import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} {...props} />;
});

Input.displayName = "Input";

export default Input;
