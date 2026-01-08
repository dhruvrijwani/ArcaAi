import Image from "next/image";
import Hero from "./Home/Hero";
import KeyProducts from "./Home/KeyProducts";
import Partners from "./Home/Partners";
import PartnersTestimonials from "./Home/PartnersTestimonials";
import Cards from "./Home/Cards";
import Leadership from "./Home/Leadership";
import Numbers from "./Home/Numbers";

export default function Home() {
  return (
    <>
    <Hero />
    <KeyProducts />
    <Numbers />
    <Partners />
    <PartnersTestimonials />
    <Cards />
    <Leadership />
    </>
  );
}
