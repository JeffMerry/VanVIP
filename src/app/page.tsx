"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,          
      once: true,             
      easing: "ease-out-quad", 
    });
  }, []);

  return (
    <>
      <Header />
      <main className="relative w-full overflow-x-hidden">
        <Hero />
        <Intro />
        <Fleet />
        <WhyChooseUs />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
