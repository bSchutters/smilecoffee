import { Squircle } from "@squircle-js/react";
import { Typography } from "../../design-sytem/text/typo";
import { Button } from "../../design-sytem/button/button";
import { NavLink } from "react-router-dom";
import CookieImg from "../../../img/cookie.png";

function Discover() {
  return (
    <Squircle
      cornerRadius={40}
      cornerSmoothing={1}
      className="bg-beigePrimary w-full h-[400px] p-30 relative"
    >
      <div>
        <img
          src={CookieImg}
          alt=""
          className="absolute -bottom-12 -z-10 -right-16 opacity-50"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <Typography
          size="35"
          color="kaki"
          font="cafeFrancoise"
          text="discover our variety of food and drinks"
        />

        <NavLink to="/menu/coffee" className="w-3/4 self-center">
          <Button
            bgColor="orange"
            textColor="beige"
            textSize="28"
            text="our menu"
            className="w-full"
          />
        </NavLink>
      </div>
    </Squircle>
  );
}

export default Discover;
