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
      duration: 1000,           // ความเร็วตอนแอนิเมชันเด้งขึ้นมา (1000 มิลลิวินาที = 1 วินาที)
      once: true,              // ให้แสดงแอนิเมชันเพียงรอบเดียวตอนเลื่อนผ่านครั้งแรก
      easing: "ease-out-quad", // รูปแบบความนุ่มนวลในการเคลื่อนที่
    });
  }, []);

  return (
    <main >
      <Header />
      <Hero />
      <Intro />
      <Fleet />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
