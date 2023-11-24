import { NavLink, useLocation } from "react-router-dom";
import { Typography } from "../../../design-sytem/text/typo";
import { BeansIcon } from "../iconsNavMenu/beansIcon";
import { CoffeeIcon } from "../iconsNavMenu/coffeeIcon";
import { FoodIcon } from "../iconsNavMenu/foodIcon";
import { Squircle } from "@squircle-js/react";

interface itemNavMenuProps {
  title: string;
  link: string;
  icon: "beans" | "coffee" | "food";
}

export const ItemNavMenu = ({ title, link, icon }: itemNavMenuProps) => {
  let iconItem = null;

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

  const location = useLocation().pathname;
  const isActive = location === link;
  const bgColorClass = isActive ? "bg-kakiLighter" : "bg-kakiPrimary";

  return (
    <Squircle cornerRadius={40} cornerSmoothing={1} className="w-1/3">
      <NavLink to={link}>
        <div
          className={`${bgColorClass} flex items-center justify-around h-full w-full gap-5 p-5 hover:bg-kakiLighter transition-all `}
        >
          <Typography
            text={title}
            size="50"
            color="beige"
            font="cafeFrancoise"
          />
          {iconItem}
        </div>
      </NavLink>
    </Squircle>
  );
};
