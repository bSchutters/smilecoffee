import { Squircle } from "@squircle-js/react";

interface buttonProps {
  text: string;
  textSize: "70" | "50" | "35" | "28" | "22" | "20" | "18";
  bgColor: "orange" | "kaki" | "beige";
  textColor: "beige" | "kaki" | "orange";
  className?: string;
}

export const Button = ({
  text,
  textSize,
  bgColor,
  textColor,
  className,
}: buttonProps) => {
  let bgColorClass = "";
  let textColorClass = "";
  let textSizeClass = "";

  switch (bgColor) {
    case "beige":
      bgColorClass = "bg-beigePrimary";
      break;
    case "kaki":
      bgColorClass = "bg-kakiPrimary";
      break;
    case "orange":
      bgColorClass = "bg-orangePrimary";
      break;
  }

  switch (textColor) {
    case "beige":
      textColorClass = "text-beigePrimary";
      break;
    case "kaki":
      textColorClass = "text-kakiPrimary";
      break;
    case "orange":
      textColorClass = "text-orangePrimary";
      break;
  }

  switch (textSize) {
    case "70":
      textSizeClass = "text-70";
      break;
    case "50":
      textSizeClass = "text-50";
      break;
    case "35":
      textSizeClass = "text-35";
      break;
    case "28":
      textSizeClass = "text-28";
      break;
    case "22":
      textSizeClass = "text-22";
      break;
    case "20":
      textSizeClass = "text-20";
      break;
    case "18":
      textSizeClass = "text-18";
      break;
  }

  return (
    <button
      className={`${className} ${textColorClass} ${textSizeClass} font-cafeFrancoise hover:text-kakiPrimary transition-all`}
    >
      <Squircle
        cornerRadius={10}
        cornerSmoothing={1}
        className={`${bgColorClass} w-full`}
      >
        {text}
      </Squircle>
    </button>
  );
};
