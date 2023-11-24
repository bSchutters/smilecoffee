import { NavLink } from "react-router-dom";
import { Typography } from "../../design-sytem/text/typo";
import { Squircle } from "@squircle-js/react";

export const Navbar = () => {
  return (
    <Squircle
      cornerRadius={20}
      cornerSmoothing={1}
      className="w-full h-[100px]"
    >
      <div className="bg-kakiDarker flex items-center justify-around w-full h-[100px]">
        <NavLink to="/menu/coffee">
          {({ isActive }) => (
            <Typography
              text="Menu"
              size="35"
              color={isActive ? "orange" : "beige"}
              font="cafeFrancoise"
              hoverColor="orange"
            />
          )}
        </NavLink>
        <NavLink to="/galerie">
          {({ isActive }) => (
            <Typography
              text="Galerie"
              size="35"
              color={isActive ? "orange" : "beige"}
              font="cafeFrancoise"
              hoverColor="orange"
            />
          )}
        </NavLink>
        <NavLink to="/about">
          {({ isActive }) => (
            <Typography
              text="About"
              size="35"
              color={isActive ? "orange" : "beige"}
              font="cafeFrancoise"
              hoverColor="orange"
            />
          )}
        </NavLink>
        <NavLink to="/contact">
          {({ isActive }) => (
            <Typography
              text="Contact"
              size="35"
              color={isActive ? "orange" : "beige"}
              font="cafeFrancoise"
              hoverColor="orange"
            />
          )}
        </NavLink>
      </div>
    </Squircle>
  );
};
