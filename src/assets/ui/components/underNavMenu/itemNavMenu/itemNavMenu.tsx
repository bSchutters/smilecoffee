import { Link } from "react-router-dom";
import { Typography } from "../../../design-sytem/text/typo";
import { BeansIcon } from "../iconsNavMenu/beansIcon";
import { CoffeeIcon } from "../iconsNavMenu/coffeeIcon";
import { FoodIcon } from "../iconsNavMenu/foodIcon";
import { Squircle } from "@squircle-js/react";

interface itemNavMenuProps {
  title: string;
  link: string;
  icon: "beans" | "coffee" | "food";
  variantStyle?: "normal" | "actif";
}

export const ItemNavMenu = ({ title, link, icon }: itemNavMenuProps) => {
  let iconItem = null;
  let variantStyleClass = "";

  switch (icon) {
    case "beans":
      iconItem = <BeansIcon color="beige" className="h-[80px]" />;
      break;
    case "coffee":
      iconItem = <CoffeeIcon color="beige" className="h-[80px]" />;
      break;
    case "food":
      iconItem = <FoodIcon color="beige" className="h-[80px]" />;
      break;
  }

  switch (variantStyleClass) {
    case "normal":
      variantStyleClass = "bg-kakiDarker hover:bg-kakiLighter transition-all";
      break;
    case "actif":
      variantStyleClass = "bg-kakiLighter";
      break;
  }

  return (
    <Squircle cornerRadius={40} cornerSmoothing={1} className="w-1/3">
      <Link to={link}>
        <div className="flex items-center justify-around h-full w-full gap-5 p-5 bg-kakiDarker hover:bg-kakiLighter transition-all">
          <Typography
            text={title}
            size="50"
            color="beige"
            font="cafeFrancoise"
          />
          {iconItem}
        </div>
      </Link>
    </Squircle>
  );
};
