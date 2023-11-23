import { Squircle } from "@squircle-js/react";
import { LogoTextH } from "./logosSvg/LogoTextH";
import { LogoTextV } from "./logosSvg/LogoTextV";
import { Link } from "react-router-dom";

interface logoBlocProps {
  type?: "vertical" | "horizontal";
  color: "beige" | "kaki";
  bgColor: "orange" | "kakiClair";
  height?: string;
  width?: string;
  className?: string;
}

export const LogoBloc = ({
  height,
  width,
  className,
  type = "horizontal",
  color = "beige",
  bgColor = "orange",
}: logoBlocProps) => {
  let logoColor = "";
  let bgBoxColor = "";

  switch (color) {
    case "beige":
      logoColor = "beige";
      break;
    case "kaki":
      logoColor = "kaki";
      break;
  }

  switch (bgColor) {
    case "orange":
      bgBoxColor = "bg-orangePrimary";
      break;
    case "kakiClair":
      bgBoxColor = "bg-kakiLighter";
      break;
  }

  if (type === "horizontal") {
    return (
      <Squircle
        cornerRadius={20}
        cornerSmoothing={1}
        className={`flex items-center justify-center ${bgBoxColor} ${width} ${height}`}
      >
        <LogoTextH color={logoColor} className={className} />
      </Squircle>
    );
  }
  if (type === "vertical") {
    return (
      <Link to="/">
        <Squircle
          cornerRadius={40}
          cornerSmoothing={1}
          className={`flex items-center justify-center ${bgBoxColor} ${width} ${height}`}
        >
          <LogoTextV
            color={logoColor}
            className={`${className} transition-all`}
          />
        </Squircle>
      </Link>
    );
  }
};
