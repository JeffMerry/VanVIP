"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-visible bg-navy pt-14 sm:pt-20"
    >
      {/* City skyline background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-skyline.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_35%] opacity-70 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-0 text-center">
        <h1 data-aos="fade-up" className="gold-text text-5xl font-extrabold tracking-wide sm:text-6xl md:text-7xl">
          RIT VAN VIP
        </h1>
        <p  data-aos="fade-up"
          data-aos-delay="150" className="mt-5 max-w-2xl text-balance text-base text-white/90 sm:text-lg">
          บริการเช่ารถตู้ VIP พร้อมคนขับมืออาชีพ ทั่วไทย ในราคาสุดพิเศษ
        </p>

        <a
          href="/booking"
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-8 rounded-full border-2 border-gold px-8 py-3 text-sm font-semibold text-gold-light transition-colors hover:bg-gold hover:text-navy sm:text-base"
        >
          ขั้นตอนการจอง
        </a>

        {/* Vans overlapping into the section below */}
        <div 
         data-aos="zoom-in-up"
          data-aos-delay="450" className="relative mt-14 w-full max-w-5xl translate-y-1/4 sm:translate-y-1/3">
          <Image
            src="/images/hero-vans.png"
            alt="รถตู้ VIP สองคันจอดเรียงกัน พร้อมให้บริการ"
            width={1200}
            height={600}
            className="w-full drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Spacer so the overlapping vans have room before the next section starts */}
      <div className="h-24 sm:h-32 md:h-40" />
    </section>
  );
}
