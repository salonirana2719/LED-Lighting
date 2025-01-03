import About from "@/components/homePage/About";
import Banner from "@/components/homePage/Banner";
import BestSeller from "@/components/homePage/BestSeller";
import BrightenUp from "@/components/homePage/BrightenUp";
import ClientTestimonials from "@/components/homePage/ClientTestimonials";
// import ProductCard from "@/components/homePage/ProductCard";
import ProductGrid from "@/components/homePage/ProductGrid";
import WhatNew from "@/components/homePage/WhatNews";


export default function Home() {
  return (
   <>
   <Banner/>
   <About/>
   <ProductGrid/>
   <BrightenUp/>
   <BestSeller/>
<WhatNew/>
   <ClientTestimonials/>
  
   </>
  );
}
