import Discover from "../assets/ui/components/discover/Discover";
import { Navbar } from "../assets/ui/components/navbar/Navbar";
import { LogoBloc } from "../assets/ui/design-sytem/logo/logoBloc";

export default function Home() {
  return (
    <main className="bg-kakiPrimary w-full h-full p-30 flex gap-30">
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
      <Navbar />
    </main>
  );
}
