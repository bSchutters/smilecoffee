import { Squircle } from "@squircle-js/react";
import { Typography } from "../../design-sytem/text/typo";

export default function About() {
  return (
    <Squircle
      cornerRadius={40}
      cornerSmoothing={1}
      className="w-full bg-kakiDarker flex max-h-[600px]"
    >
      <div className="w-1/2 ">
        <Squircle
          cornerRadius={40}
          cornerSmoothing={1}
          className="h-full w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="h-full w-full object-cover"
          />
        </Squircle>
      </div>
      <div className="w-1/2 p-50 flex flex-col gap-30">
        <Typography
          size="35"
          color="beige"
          font="cafeFrancoise"
          text="The cozy coffee"
        />
        <Typography
          size="28"
          color="beige"
          font="pally"
          text={
            <>
              Smile Coffee is a chain of coffee shops founded in 2020 by two
              friends with a passion for coffee and travel:
              <span className="text-orangePrimary"> Léa</span> and
              <span className="text-orangePrimary"> Maxime</span>. Their concept
              is simple: to offer their customers drinks and pastries inspired
              by the different cultures of the world, in a cosy, warm setting.
              <br />
              <br />
              Each month, Smile Coffee spotlights a particular country or
              region, with original authentic recipes. For exemple, in March
              2023, the theme was Japan, and customers could enjoy a matcha
              latte, iced mochi or dorayaki. In Apil 2023, the theme was Mexico,
              and customers could enjoy a café de olla, a churro or pastes de
              tres leche.
            </>
          }
        />
      </div>
    </Squircle>
  );
}
