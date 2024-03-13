import { useLocation } from "react-router-dom";
import Footer from "../assets/ui/components/footer/footer";
import { Navbar } from "../assets/ui/components/navbar/Navbar";
import UnderNavMenu from "../assets/ui/components/underNavMenu/underNavMenu";
import { LogoBloc } from "../assets/ui/design-sytem/logo/logoBloc";
import MenuContentCoffee from "../assets/ui/components/menuContent/menuContentCoffee";
import MenuContentFood from "../assets/ui/components/menuContent/menuContentFood";
import MenuContentBeans from "../assets/ui/components/menuContent/menuContentBeans";

export default function Menu() {
  const location = useLocation();

  let content;
  switch (location.pathname) {
    case "/menu/coffee":
      content = <MenuContentCoffee />;
      break;
    case "/menu/food":
      content = <MenuContentFood />;
      break;
    case "/menu/beans":
      content = <MenuContentBeans />;
      break;
    default:
      content = <MenuContentCoffee />;
  }

  return (
    <div className="bg-kakiPrimary w-full min-h-screen max-w-full p-30 flex flex-col gap-50 justify-between">
      <div className="flex gap-30 h-300">
        <div className="w-2/12">
          <LogoBloc
            type="vertical"
            color="beige"
            bgColor="orange"
            width="w-full"
            height="h-300"
            className="h-2/3 hover:fill-kakiPrimary"
          />
        </div>
        <div className="w-10/12 flex flex-col gap-30">
          <Navbar />
          <UnderNavMenu />
        </div>
      </div>
      <div className="w-full">{content}</div>

      <Footer />
    </div>
  );
}
