import Discover from "../assets/ui/components/discover/Discover";
import { Navbar } from "../assets/ui/components/navbar/Navbar";
import { LogoBloc } from "../assets/ui/design-sytem/logo/logoBloc";
import { Hero } from "../assets/ui/components/hero/Hero";
import CTA from "../assets/ui/components/cta/CTA";
import Footer from "../assets/ui/components/footer/footer";

export default function Home() {
  return (
    <div className="bg-kakiPrimary w-full h-full p-30 flex flex-col gap-50">
      <div className=" flex gap-30">
        <div className="flex flex-col w-2/12 gap-30">
          <LogoBloc
            type="vertical"
            color="kaki"
            bgColor="orange"
            width="w-full"
            height="h-300"
            className="h-2/3"
          />
          <Discover />
        </div>
        <div className="w-10/12 flex flex-col gap-50">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div>
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
