import { useLocation } from "react-router-dom";
import Footer from "../assets/ui/components/footer/footer";
import { Navbar } from "../assets/ui/components/navbar/Navbar";
import UnderNavMenu from "../assets/ui/components/underNavMenu/underNavMenu";
import { LogoBloc } from "../assets/ui/design-sytem/logo/logoBloc";
import MenuContentCoffee from "../assets/ui/components/menuContent/menuContentCoffee";
import MenuContentFood from "../assets/ui/components/menuContent/menuContentFood";
import MenuContentBeans from "../assets/ui/components/menuContent/menuContentBeans";

export default function Menu() {
  function contentMenu() {
    const location = useLocation().pathname;

    if (location === "/menu/coffee") {
      return <MenuContentCoffee />;
    } else if (location === "/menu/beans") {
      return <MenuContentBeans />;
    } else if (location === "/menu/food") {
      return <MenuContentFood />;
    }
  }

  return (
    <div className="bg-kakiPrimary w-full h-full p-30 flex flex-col gap-50">
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
      <div className="w-full">{contentMenu()}</div>

      <Footer />
    </div>
  );
}
