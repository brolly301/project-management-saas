type InputProps = {
  placeholder: string;
  field: string;
  value: string;
  onChange: (value: string, field: string) => void;
};

export default function Input({
  placeholder,
  onChange,
  field,
  value,
}: InputProps) {
  return (
    <div className=" border-black border ">
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value, field)}
      />
    </div>
  );
}
