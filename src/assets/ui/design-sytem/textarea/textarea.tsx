import { Squircle } from "@squircle-js/react";

interface TextareaProps {
  placeholder: string;
  value?: string;
  className?: string;
}

export const Textarea = ({ placeholder, value, className }: TextareaProps) => {
  return (
    <Squircle cornerRadius={20} cornerSmoothing={1} className="h-full">
      <textarea
        className={`bg-kakiDarker text-beigePrimary placeholder:text-kakiLighter outline-none p-5 ${className} w-full h-full resize-none`}
        placeholder={placeholder}
        value={value}
      />
    </Squircle>
  );
};
