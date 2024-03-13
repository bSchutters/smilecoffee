import { Typography } from "../../../design-sytem/text/typo";

interface productProps {
  title: string;
  price: number;
  img: string;
}

export const Product = ({ title, price, img }: productProps) => {
  return (
    <div className="lg:max-w-1/4">
      <div className="flex flex-col items-center justify-center gap-5 p-6 bg-kakiDarker h-full rounded-3xl">
        <div>
          <img src={img} alt="" className="w-fit h-auto rounded-3xl" />
        </div>
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
    </div>
  );
};
