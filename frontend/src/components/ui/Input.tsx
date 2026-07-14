import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & { error?: string };

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...inputProps }, ref) => {
    return (
      <div>
        <input className="border border-black" ref={ref} {...inputProps} />
        {error ? <div className="text-red-700">{error}</div> : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
