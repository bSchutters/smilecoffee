import { Squircle } from "@squircle-js/react";
import { Typography } from "../../../design-sytem/text/typo";

interface BlocButtonCTAProps {
  title: string;
  description: string;
}

export const BlocButtonCTA = ({ title, description }: BlocButtonCTAProps) => {
  return (
    <Squircle
      cornerRadius={40}
      cornerSmoothing={1}
      className="w-full h-full bg-kakiPrimary hover:bg-kakiLighter transition-all"
    >
      <div className="text-start p-10 ">
        <Typography
          text={title}
          size="35"
          color="orange"
          font="cafeFrancoise"
        />
        <Typography
          text={description}
          size="28"
          color="beige"
          font="pally"
          className="w-2/3"
        />
      </div>
    </Squircle>
  );
};
