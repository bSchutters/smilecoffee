import { Squircle } from "@squircle-js/react";
import { Typography } from "../../design-sytem/text/typo";

export function Hero() {
  return (
    <Squircle
      cornerRadius={40}
      cornerSmoothing={1}
      className="relative bg-hero bg-orangePrimary w-full h-full bg-cover bg-center"
    >
      <div
        id="overlay"
        className="absolute bottom-0 w-full h-2/3 bg-gradient-to-b from-orangeOpacity0 to-orangePrimary opacity-50"
      ></div>
      <div
        id="overlay"
        className="absolute w-full h-full bg-black opacity-60"
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-2/5 text-center">
        <Typography
          text="The art of coffee tasting in a place where each cup tells a story."
          size="35"
          color="beige"
          font="cafeFrancoise"
        />
      </div>
    </Squircle>
  );
}

export default Hero;
