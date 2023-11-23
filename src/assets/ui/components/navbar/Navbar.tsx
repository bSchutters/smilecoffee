import { Link } from "react-router-dom";
import { Typography } from "../../design-sytem/text/typo";
import { Squircle } from "@squircle-js/react";

export const Navbar = () => {
  return (
    <Squircle
      cornerRadius={20}
      cornerSmoothing={1}
      className="w-10/12 h-[100px]"
    >
      <div className="bg-kakiDarker flex items-center justify-around w-full h-full ">
        <Link to="/menu">
          <Typography
            text="Menu"
            size="35"
            color="beige"
            font="cafeFrancoise"
          />
        </Link>
        <Link to="/galerie">
          <Typography
            text="galerie"
            size="35"
            color="beige"
            font="cafeFrancoise"
          />
        </Link>
        <Link to="/about">
          <Typography
            text="about"
            size="35"
            color="beige"
            font="cafeFrancoise"
          />
        </Link>
        <Link to="/contact">
          <Typography
            text="contact"
            size="35"
            color="beige"
            font="cafeFrancoise"
          />
        </Link>
      </div>
    </Squircle>
  );
};
