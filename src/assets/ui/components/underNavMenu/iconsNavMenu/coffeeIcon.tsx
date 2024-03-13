interface CoffeeIconProps {
  color: "beige" | "kaki" | "orange";
  className?: string;
}

export const CoffeeIcon = ({ color, className }: CoffeeIconProps) => {
  let colorClass = "";

  switch (color) {
    case "beige":
      colorClass = "fill-beigePrimary";
      break;
    case "kaki":
      colorClass = "fill-kakiPrimary";
      break;
    case "orange":
      colorClass = "fill-orangePrimary";
      break;
  }

  return (
    <svg
      viewBox="0 0 74 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className + " " + colorClass}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.15473 0.902238C9.49673 0.340578 10.0925 0 10.7329 0H61.9707C62.6112 0 63.2069 0.340578 63.5489 0.90224L68.5993 9.19652H71.2103C72.2412 9.19652 73.0769 10.0633 73.0769 11.1326V20.0387C73.0769 21.108 72.2412 21.9748 71.2103 21.9748H69.2002L67.5617 34.4627H68.8771C69.4082 34.4627 69.9142 34.6974 70.2683 35.108C70.6224 35.5186 70.7911 36.0662 70.7321 36.6137L66.5323 75.6263C66.4268 76.6063 65.628 77.3475 64.6773 77.3475H62.9669L60.4633 98.302C60.3474 99.2718 59.553 100 58.6109 100H14.2794C13.3373 100 12.5429 99.2718 12.427 98.302L9.92334 77.3475H8.58634C7.64258 77.3475 6.84731 76.6169 6.7334 75.6451L2.16023 36.6325C2.09574 36.0824 2.26163 35.5299 2.61591 35.1151C2.97018 34.7002 3.47887 34.4627 4.01317 34.4627H5.30336L3.52236 21.9748H1.86658C0.835698 21.9748 0 21.108 0 20.0387V11.1326C0 10.0633 0.835698 9.19652 1.86658 9.19652H4.10433L9.15473 0.902238ZM8.51973 9.19652H64.1839L60.9419 3.87222H11.7617L8.51973 9.19652ZM7.29616 21.9748L9.07715 34.4627H63.7942L65.4327 21.9748H7.29616ZM66.7905 38.3349H6.12045L10.2397 73.4753H63.0075L66.7905 38.3349ZM13.6851 77.3475L15.929 96.1278H56.9613L59.2052 77.3475H13.6851ZM3.73317 13.0687V18.1026H69.3438V13.0687H3.73317ZM43.8681 46.5002C45.5672 48.8621 46.4648 51.9527 46.4779 54.9768C46.491 58.0258 45.599 61.1035 43.8957 63.4668C42.1706 65.8604 39.5712 67.5564 36.3126 67.5702C32.7978 67.585 30.0885 65.5442 28.4224 62.8456C26.7735 60.1748 26.0476 56.7376 26.4256 53.4946C27.0395 48.2281 30.2034 42.6764 36.252 42.4984C39.5361 42.4017 42.1452 44.1051 43.8681 46.5002ZM33.951 47.0289C33.6726 49.2657 33.75 51.0444 34.0851 52.6293C34.4468 54.3396 35.1214 55.7911 35.7405 57.1231C35.8978 57.4614 36.0514 57.792 36.1955 58.1171C36.5611 58.9425 36.5451 60.0908 36.1771 61.4178C35.9527 62.2269 35.6277 62.9894 35.3104 63.6045C33.7908 63.3034 32.5117 62.2888 31.5662 60.7574C30.4053 58.8771 29.8532 56.3493 30.1318 53.9594C30.5113 50.704 31.9028 48.1708 33.951 47.0289ZM39.797 62.3699C40.2536 60.6632 40.4708 58.4942 39.5877 56.5005C39.3816 56.0352 39.1885 55.6175 39.0093 55.2298C38.4272 53.9706 37.9913 53.0278 37.7316 51.7996C37.4681 50.5538 37.3937 48.9625 37.7981 46.5354C39.0095 46.8643 40.0457 47.6616 40.8761 48.8159C42.0427 50.4376 42.7348 52.6984 42.7447 54.9941C42.7546 57.2944 42.0721 59.53 40.9057 61.1483C40.5713 61.6122 40.201 62.022 39.797 62.3699Z"
      />
    </svg>
  );
};
