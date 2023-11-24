import { Squircle } from "@squircle-js/react";
import { Typography } from "../../design-sytem/text/typo";
import { BlocButtonCTA } from "./BlocButtonCTA/BlocButtonCTA";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <Squircle cornerRadius={40} cornerSmoothing={1} className="w-full h-full">
      <div className="flex flex-col gap-30 bg-beigePrimary text-center p-30">
        <div>
          <Typography
            text="The secret for a great day"
            size="50"
            color="kaki"
            font="cafeFrancoise"
          />
          <Typography
            text="We are waiting you in our cozy coffee shop !"
            size="22"
            color="orange"
            font="pally"
          />
        </div>
        <div className="flex gap-30 h-full">
          <Link to="/menu/coffee" className="w-full">
            <BlocButtonCTA
              title="Coffee made with love"
              description="Using only the best beans ensures a perfect cup every time."
            />
          </Link>
          <Link to="/menu/food" className="w-full">
            <BlocButtonCTA
              title="fresh baked goods"
              description="From croissants to cakes, our pasties are made with the finest ingredients."
            />
          </Link>
        </div>
      </div>
    </Squircle>
  );
}
