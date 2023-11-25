import ContactForm from "../assets/ui/components/contactForm/contactForm";
import Footer from "../assets/ui/components/footer/footer";
import { Navbar } from "../assets/ui/components/navbar/Navbar";
import { TitlePage } from "../assets/ui/components/titlePage/titlePage";
import { LogoBloc } from "../assets/ui/design-sytem/logo/logoBloc";

export default function Contact() {
  return (
    <div className="bg-kakiPrimary w-full h-screen p-30 flex flex-col gap-50">
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
          <TitlePage text="contact us" />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
