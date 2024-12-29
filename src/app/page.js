import About from "@/components/homePage/About";
import Banner from "@/components/homePage/Banner";
import BestSeller from "@/components/homePage/BestSeller";
import BrightenUp from "@/components/homePage/BrightenUp";
import ClientTestimonials from "@/components/homePage/ClientTestimonials";


export default function Home() {
  return (
   <>
   <Banner/>
   <About/>
   <BrightenUp/>
   <ClientTestimonials/>
   <BestSeller/>
   </>
  );
}
