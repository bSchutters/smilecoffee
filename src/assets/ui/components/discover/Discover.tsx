import { Squircle } from "@squircle-js/react";
import { Typography } from "../../design-sytem/text/typo";
import { Button } from "../../design-sytem/button/button";
import { NavLink } from "react-router-dom";

function Discover() {
  return (
    <Squircle
      cornerRadius={40}
      cornerSmoothing={1}
      className="bg-beigePrimary w-full h-[400px] p-30 flex flex-col justify-between"
    >
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
          textSize="35"
          text="our menu"
          className="w-full"
        />
      </NavLink>
    </Squircle>
  );
}

export default Discover;
