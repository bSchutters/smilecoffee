import { Squircle } from "@squircle-js/react";
import { LogoTextH } from "../../design-sytem/logo/logosSvg/LogoTextH";
import { Typography } from "../../design-sytem/text/typo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Squircle cornerRadius={30} cornerSmoothing={1} className="max-h-[100px]">
      <footer className="bg-kakiDarker flex justify-between p-5 h-[100px]">
        <Link to="/">
          <LogoTextH
            color="beige"
            className="hover:fill-orangePrimary transition-all w-full h-full"
          />
        </Link>
        <Typography
          text="© Copyright 2023  "
          size="18"
          color="beige"
          font="pally"
          weigth="medium"
          className="self-center"
        />
      </footer>
    </Squircle>
  );
}
