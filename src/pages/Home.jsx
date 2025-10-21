import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChoose";
import ServicesPreview from "../components/Servicespreview";

export default function Home() {
  return (
    <>  
        <Hero />
        <Products />
        <WhyChooseUs />
        <ServicesPreview />
        <Footer />

    </>
  );
}
