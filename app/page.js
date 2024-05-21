import LandingPage from "@/components/Home/hero/LandingPage";
import ClientLogo from "@/components/Home/clientsLogo/ClientLogo";
import OurServices from "@/components/Home/services/OurServices";
import CaseStudies from "@/components/Home/caseStudyes/CaseStudies";
import ReactCarousel from "@/components/Home/caseStudyes/ReactCarousel";
import Testimonials from "@/components/Home/testimonials/Testimonials";
import ContactUs from "@/components/Home/ContactUs";
import Domains from "@/components/Home/Domains";
import TranslationForm from "@/components/services/translation/TranslationForm";
import TranslationFaqs from "@/components/services/translation/TranslationFaqs";
import HomeFaq from "@/components/Home/HomeFaq";


export default function Home() {
  return (
    <>
      <div className="">
        <LandingPage />
        <div className="pt-52 sm:pt-60">
          <ClientLogo />
        </div>
        <OurServices />
        <CaseStudies />
        <Domains />
        <ReactCarousel />
        <Testimonials />
        <HomeFaq />
        <ContactUs />
      </div>
    </>
  );
}
