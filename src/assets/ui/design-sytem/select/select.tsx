import { Squircle } from "@squircle-js/react";

interface SelectProps {
  value?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Select = ({ value, className, children }: SelectProps) => {
  return (
    <Squircle cornerRadius={20} cornerSmoothing={1} className="w-1/3">
      <select
        className={`bg-kakiDarker text-beigePrimary placeholder:text-kakiLighter outline-none p-5 ${className} w-full resize-none`}
        value={value}
      >
        {children}
      </select>
    </Squircle>
  );
};
