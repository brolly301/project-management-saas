import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & { error?: string };

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...inputProps }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          className={`
      w-full
      rounded-xl
      border
      border-slate-300
      bg-white
      px-4
      py-3
      text-slate-900
      placeholder:text-slate-400
      transition
      outline-none
      focus:border-slate-900
      focus:ring-4
      focus:ring-slate-200
      disabled:cursor-not-allowed
      disabled:opacity-50

       ${
         error
           ? "border-red-500 focus:border-red-500 focus:ring-red-100"
           : "border-slate-300 focus:border-slate-900 focus:ring-slate-200"
       }
    `}
          {...inputProps}
        />

        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
