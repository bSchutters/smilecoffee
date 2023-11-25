interface typoProps {
  size: "70" | "50" | "35" | "28" | "22" | "20" | "18";
  color: "beige" | "orange" | "kaki" | "kakiClair";
  font: "cafeFrancoise" | "tanker" | "pally";
  hoverColor?: "beige" | "orange" | "kaki" | "kakiClair";
  text: string | JSX.Element;
  className?: string;
  weigth?: "normal" | "bold" | "medium";
}

export const Typography = ({
  size,
  color,
  text,
  className,
  font,
  hoverColor,
  weigth = "normal",
}: typoProps) => {
  let sizeClass = "";
  let colorClass = "";
  let fontClass = "";
  let hoverColorClass = "";
  let weigthClass = "";

  switch (size) {
    case "70":
      sizeClass = "text-70";
      break;
    case "50":
      sizeClass = "text-50";
      break;
    case "35":
      sizeClass = "text-35";
      break;
    case "28":
      sizeClass = "text-28";
      break;
    case "22":
      sizeClass = "text-22";
      break;
    case "20":
      sizeClass = "text-20";
      break;
    case "18":
      sizeClass = "text-18";
      break;
  }

  switch (color) {
    case "beige":
      colorClass = "text-beigePrimary";
      break;
    case "orange":
      colorClass = "text-orangePrimary";
      break;
    case "kaki":
      colorClass = "text-kakiPrimary";
      break;
    case "kakiClair":
      colorClass = "text-kakiLighter";
      break;
  }

  switch (font) {
    case "cafeFrancoise":
      fontClass = "font-cafeFrancoise";
      break;
    case "tanker":
      fontClass = "font-tanker";
      break;
    case "pally":
      fontClass = "font-pally";
      break;
  }

  switch (hoverColor) {
    case "beige":
      hoverColorClass = "hover:text-beigePrimary";
      break;
    case "orange":
      hoverColorClass = "hover:text-orangePrimary";
      break;
    case "kaki":
      hoverColorClass = "hover:text-kakiPrimary";
      break;
    case "kakiClair":
      hoverColorClass = "hover:text-kakiLighter";
      break;
  }

  switch (weigth) {
    case "bold":
      weigthClass = "font-bold";
      break;
    case "normal":
      weigthClass = "font-normal";
      break;
    case "medium":
      weigthClass = "font-medium";
      break;
  }

  return (
    <p
      className={`${sizeClass} ${colorClass} ${fontClass} ${className} ${hoverColorClass} ${weigthClass} transition-all`}
    >
      {text}
    </p>
  );
};
