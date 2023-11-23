interface typoProps {
  size: "70" | "50" | "35" | "28" | "22" | "20" | "18";
  color?: "beige" | "orange" | "kaki" | "kakiClair" | any;
  font: "cafeFrancoise" | "tanker" | "pally";
  text: string;
  className?: string;
}

export const Typography = ({
  size,
  color,
  text,
  className,
  font,
}: typoProps) => {
  let sizeClass = "";
  let colorClass = "";
  let fontClass = "";

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

  return (
    <p className={`${sizeClass} ${colorClass} ${fontClass} ${className}`}>
      {text}
    </p>
  );
};
