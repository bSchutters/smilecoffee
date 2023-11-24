import { Squircle } from "@squircle-js/react";
import { Typography } from "../../../design-sytem/text/typo";

interface productProps {
  title: string;
  price: number;
  img: string;
}

export const Product = ({ title, price, img }: productProps) => {
  return (
    <Squircle cornerRadius={30} cornerSmoothing={1} className="lg:max-w-1/4">
      <div className="flex flex-col items-center justify-center gap-5 p-6 bg-kakiDarker h-full">
        <Squircle cornerRadius={30} cornerSmoothing={1}>
          <img src={img} alt="" className="w-fit h-auto" />
        </Squircle>
        <div className="flex justify-between w-full h-full">
          <Typography
            text={title}
            size="35"
            color="beige"
            font="cafeFrancoise"
          />
          <Typography
            text={`${price}.`}
            size="35"
            color="beige"
            font="cafeFrancoise"
          />
        </div>
      </div>
    </Squircle>
  );
};
