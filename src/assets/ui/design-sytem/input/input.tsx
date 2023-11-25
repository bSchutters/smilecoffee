import { Squircle } from "@squircle-js/react";

interface inputProps {
  type: "text" | "password" | "email" | "number";
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export const Input = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  id,
  name,
  required,
  disabled,
  readOnly,
  autoComplete,
  pattern,
  minLength,
  maxLength,
  min,
  max,
}: inputProps) => {
  return (
    <Squircle cornerRadius={20} cornerSmoothing={1} className="w-1/3">
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-kakiDarker text-beigePrimary placeholder:text-kakiLighter outline-none p-5 ${className} w-full`}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
      />
    </Squircle>
  );
};
