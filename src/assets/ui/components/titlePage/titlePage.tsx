import { Squircle } from "@squircle-js/react";
import { Typography } from "../../design-sytem/text/typo";

interface titlePageProps {
  text: string;
  className?: string;
}

export const TitlePage = ({ text, className }: titlePageProps) => {
  return (
    <Squircle cornerRadius={40} cornerSmoothing={1} className="h-full">
      <div className=" bg-kakiDarker h-full flex items-center justify-center ">
        <Typography
          size="70"
          color="beige"
          font="cafeFrancoise"
          text={text}
          className={className}
        />
      </div>
    </Squircle>
  );
};
