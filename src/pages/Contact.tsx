import Footer from "../assets/ui/components/footer/footer";
import { Navbar } from "../assets/ui/components/navbar/Navbar";
import { LogoBloc } from "../assets/ui/design-sytem/logo/logoBloc";

export default function Menu() {
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
        <div className="w-10/12">
          <Navbar />
          TitlePage
        </div>
      </div>
      Form
      <Footer />
    </div>
  );
}
