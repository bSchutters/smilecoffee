interface BeansIconProps {
  color: "beige" | "kaki" | "orange";
  className?: string;
}

export const BeansIcon = ({ color, className }: BeansIconProps) => {
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
      viewBox="0 0 70 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className + " " + colorClass}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.08431 1.16086C8.38563 0.455403 9.06314 0 9.81132 0H60.0943C61.1364 0 61.9811 0.870195 61.9811 1.94363V15.6719L69.7132 28.4159C69.9006 28.7248 70 29.0818 70 29.4461V98.0564C70 99.1298 69.1553 100 68.1132 100H1.88679C0.844746 100 0 99.1298 0 98.0564V29.4461C0 29.0853 0.0974749 28.7316 0.281513 28.4247L7.92453 15.6775V11.1759H6.69811C6.06066 11.1759 5.46631 10.8443 5.11797 10.2944C4.76962 9.74447 4.71438 9.05053 4.9711 8.44949L8.08431 1.16086ZM11.6981 11.1759V14.2857H58.2075V9.2414L57.6746 10.199C57.3383 10.8032 56.7139 11.1759 56.0377 11.1759H11.6981ZM56.8377 3.88727H11.0425L9.58966 7.28863H54.9446L56.8377 3.88727ZM56.5832 18.173H10.8636L5.26984 27.5024H50.5899L56.5832 18.173ZM49.717 31.3897H3.77358V96.1127H49.717V31.3897ZM53.4906 96.1127H66.2264V30.0035L60.049 19.8219L53.4906 30.0309V96.1127ZM28.4051 48.8632C24.6807 49.7651 21.1035 52.2223 18.9205 54.2958C18.8767 54.3374 18.8309 54.3769 18.7835 54.4141C17.3463 55.5397 14.7486 58.7477 13.4149 62.5677C12.448 65.3372 12.2106 68.1899 13.3666 70.7663C14.5749 69.731 16.3934 69.1726 18.8108 69.0971C21.0658 69.0267 22.585 67.7267 23.6849 65.7668C24.8142 63.7547 25.3593 61.2522 25.5806 59.4285C25.927 56.5742 27.9446 54.7312 30.0262 53.6012C32.1292 52.4596 34.6554 51.8325 36.8171 51.5246C37.1677 51.4747 37.4549 51.4167 37.6881 51.3571C36.4209 50.0256 35.0749 49.255 33.7226 48.8588C32.0481 48.3682 30.2441 48.4179 28.4051 48.8632ZM39.9466 54.65C39.2123 55.0058 38.3258 55.234 37.3339 55.3753C35.4017 55.6505 33.3524 56.1896 31.7855 57.0402C30.1972 57.9024 29.4504 58.8777 29.3251 59.9107C29.0746 61.9743 28.4406 65.0597 26.9519 67.7123C25.4339 70.4172 22.8965 72.8586 18.9251 72.9826C16.6609 73.0533 15.891 73.6217 15.6896 73.8415C15.6765 73.8558 15.665 73.8693 15.6548 73.8822C16.0556 74.2534 16.5062 74.6194 17.0117 74.9772C19.1396 76.483 21.9772 76.7817 25.1471 75.966C28.3122 75.1516 31.614 73.2635 34.3836 70.7287C37.1571 68.1904 39.2775 65.1139 40.2265 62.0258C41.0047 59.4936 40.9957 56.9824 39.9466 54.65ZM34.755 45.1199C37.2135 45.8402 39.5116 47.3716 41.4712 49.9069C41.7621 50.2834 42.0449 50.681 42.3193 51.1002C44.8413 54.9544 45.0425 59.2345 43.8242 63.199C42.6211 67.114 40.0363 70.7552 36.89 73.6347C33.7398 76.5178 29.9071 78.7479 26.0616 79.7374C22.221 80.7256 18.1717 80.5141 14.875 78.1813C13.9535 77.5291 13.1444 76.8314 12.4421 76.0926C8.06146 71.4839 8.27131 65.8141 9.86399 61.2522C11.4122 56.8176 14.3794 53.0156 16.4258 51.378C18.9178 49.0285 23.0251 46.1728 27.5416 45.0791C29.8422 44.522 32.3187 44.4061 34.755 45.1199Z"
      />
    </svg>
  );
};
