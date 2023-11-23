import { Button } from "../assets/ui/design-sytem/button/button";
import { LogoBloc } from "../assets/ui/design-sytem/logo/logoBloc";
import { LogoIcon } from "../assets/ui/design-sytem/logo/logosSvg/LogoIcon";
import { LogoTextH } from "../assets/ui/design-sytem/logo/logosSvg/LogoTextH";
import { LogoTextV } from "../assets/ui/design-sytem/logo/logosSvg/LogoTextV";
import { Typography } from "../assets/ui/design-sytem/text/typo";

export default function designSystem() {
  return (
    <div className="bg-kakiPrimary w-full h-full p-30 flex flex-col gap-10">
      {/* TYPOS */}
      <Typography
        size="70"
        color="orange"
        font="tanker"
        text="Typography"
        className="ml-10"
      />
      <div className="bg-kakiLighter p-5 rounded-3xl">
        <Typography
          size="70"
          color="beige"
          text="POLICE TANKER"
          font="tanker"
        />
        <Typography
          size="70"
          color="beige"
          text="Texte de 70px"
          font="cafeFrancoise"
        />
        <Typography
          size="50"
          color="orange"
          text="Texte DE 50px Orange"
          font="cafeFrancoise"
        />
        <Typography
          size="35"
          color="beige"
          text="Texte de 35px"
          font="cafeFrancoise"
        />
        <Typography
          size="28"
          color="beige"
          text="Texte de 28px"
          font="cafeFrancoise"
        />
        <Typography
          size="22"
          color="beige"
          text="Texte de 22px avec la police Pally"
          font="pally"
        />
        <Typography
          size="20"
          color="beige"
          text="Texte de 20px avec la police Pally"
          font="pally"
        />
        <Typography
          size="18"
          color="beige"
          text="Texte de 18px avec la police Pally"
          font="pally"
        />
      </div>

      {/* LOGOS */}
      <Typography
        size="70"
        color="orange"
        font="tanker"
        text="Logos"
        className="ml-10"
      />
      <div className="bg-kakiLighter p-5 rounded-3xl flex gap-10 max-h-[400px] ">
        <div className="flex gap-10 w-3/12">
          <LogoIcon color="beige" />
          <LogoIcon color="kaki" />
        </div>
        <div className="flex gap-10 w-3/12">
          <LogoTextV color="beige" />
          <LogoTextV color="kaki" />
        </div>
        <div className="flex flex-col gap-10 w-6/12">
          <LogoTextH color="beige" />
          <LogoTextH color="kaki" />
        </div>
      </div>

      {/* LOGOS BLOC*/}
      <Typography
        size="70"
        color="orange"
        font="tanker"
        text="Logos blocs"
        className="ml-10"
      />
      <div className="bg-kakiLighter p-5 rounded-3xl flex gap-10">
        <div className="w-4/12 flex gap-5">
          <LogoBloc
            type="vertical"
            color="kaki"
            bgColor="orange"
            height="[300px]"
            width="full"
            className="h-2/3"
          />
          <LogoBloc
            type="vertical"
            color="beige"
            bgColor="orange"
            height="[300px]"
            width="full"
            className="h-2/3"
          />
        </div>
        <div className="w-6/12 flex flex-col gap-5">
          <LogoBloc
            type="horizontal"
            color="kaki"
            bgColor="orange"
            className="w-2/3 h-2/3"
          />
          <LogoBloc
            type="horizontal"
            color="beige"
            bgColor="kakiClair"
            className="w-2/3 h-2/3"
          />
        </div>
      </div>

      {/* LOGOS BLOC*/}
      <Typography
        size="70"
        color="orange"
        font="tanker"
        text="Buttons"
        className="ml-10"
      />
      <div className="bg-kakiLighter p-5 rounded-3xl flex gap-10">
        <div className="flex gap-5 w-3/12">
          <Button
            bgColor="orange"
            className="w-full"
            text="BUTTON"
            textSize="35"
            textColor="beige"
          ></Button>
          <Button
            bgColor="beige"
            textColor="orange"
            text="BUTTON"
            textSize="35"
            className="w-full hover:text-kakiPrimary"
          ></Button>
        </div>
      </div>
    </div>
  );
}
