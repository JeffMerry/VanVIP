"use client";

import { useEffect } from "react";
import {
  Car,
  DollarSign,
  Award,
  ShieldCheck,
  MessageSquare,
  Wallet,
  Send,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";              
import "aos/dist/aos.css";

const LINE_URL = "https://lin.ee/VrLydCg";
const FACEBOOK_URL = "https://www.facebook.com/share/1EnPx1xarV/";
const EMAIL = "chanlit.cc@gmail.com";

const secondaryContacts = [
  {
    href: "tel:0840112142",
    label: "084-011-2142",
    icon: MobileIcon,
  },
  {
    href: "tel:0632696414",
    label: "063-269-6414",
    icon: MobileIcon,
  },
  {
    href: FACEBOOK_URL,
    label: "เฟซบุ๊ก",
    icon: FacebookIcon,
    external: true,
  },
  {
    href: `mailto:${EMAIL}`,
    label: "อีเมล",
    icon: MailIcon,
  },
] as const;

const features = [
  {
    icon: Car,
    title: "รถให้เลือกหลายรุ่น",
    body: "คัดสรรรถตู้พร้อมคนขับ รองรับทริปตั้งแต่ครอบครัวเล็กไปจนถึงกรุ๊ปทัวร์",
  },
  {
    icon: Award,
    title: "คนขับมืออาชีพ",
    body: "ชำนาญเส้นทางทั่วไทย ขับขี่นุ่มนวล ใส่ใจทุกรายละเอียดของการเดินทาง",
  },
  {
    icon: ShieldCheck,
    title: "มาตรฐานความปลอดภัย",
    body: "ตรวจเช็กสภาพรถทุกคันก่อนออกเดินทาง เพื่อความอุ่นใจตลอดทริป",
  },
] as const;

const steps = [
  {
    icon: MessageSquare,
    title: "ติดต่อเรา",
    body: "แจ้งวันเดินทางและเส้นทาง ทีมงานเช็กคิวรถและเสนอราคาให้ทันที",
    animation: "fade-right",
  },
  {
    icon: Wallet,
    title: "ชำระมัดจำ",
    body: "โอนมัดจำเพื่อล็อกคิวรถตู้ VIP สำหรับทริปของคุณโดยเฉพาะ",
    animation: "fade-up",
  },
  {
    icon: Send,
    title: "ออกเดินทาง",
    body: "คนขับพร้อมสแตนด์บายตรงเวลานัดหมาย เดินทางอย่างสบายใจ",
    animation: "fade-left",
  },
] as const;

function LineLogoIcon() {
  return (
    <span className="text-[10px] font-extrabold leading-none tracking-tight text-white">
      LINE
    </span>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="18.5" r="1" fill="white" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5H13V7.2c0-.5.3-.8 1-.8h1V4.5h-1.5c-2.2 0-3.2 1.1-3.2 3v1.5H8v2.3h1.3V19h3.2v-8.2h2.2l.3-2.3Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Header />

      <section id="booking" className="bg-white px-5 pt-14 pb-20 sm:pt-20 sm:pb-28 text-slate-800">
        <div className="mx-auto max-w-5xl">

          {/* ================= 1. ติดต่อจอง — LINE เป็น CTA หลัก ================= */}
          <div data-aos="fade-up" className="flex flex-col items-center text-center mb-20 sm:mb-28">
            <span className="text-xl font-semibold tracking-[0.25em] text-amber-600 mb-3">
              จองรถตู้ VIP
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a253c] tracking-tight mb-3">
              พร้อมพาคุณเดินทาง<br className="sm:hidden" />ทั่วประเทศ
            </h1>
            <p className="text-sm text-slate-500 max-w-md mb-9">
              ทักไลน์เพื่อเช็คคิวรถและราคา ทีมงานตอบกลับพร้อมดูแลทุกรายละเอียดของทริปคุณ
            </p>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#1B4332] pl-3 pr-7 py-3 text-white shadow-[0_8px_24px_-8px_rgba(27,67,50,0.5)] transition-all hover:shadow-[0_10px_30px_-8px_rgba(27,67,50,0.65)] hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lineGreen">
                <LineLogoIcon />
              </span>
              <span className="text-sm font-semibold tracking-wide">
                แอดไลน์ เพื่อสอบถาม &amp; จองคิว
              </span>
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {secondaryContacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  {...("external" in contact && contact.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#1a253c]"
                >
                  <contact.icon />
                  {contact.label}
                </a>
              ))}
            </div>
          </div>

          {/* ================= 2. ทำไมต้องเลือกเรา ================= */}
          <div className="mb-20 sm:mb-28">
            <div data-aos="fade-up" className="text-center mb-12">
              <span className="text-xl font-semibold tracking-[0.25em] text-amber-600">
                จุดเด่นของเรา
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#1a253c] tracking-tight">
                ทำไมต้องเลือก RIT VAN VIP
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-px rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {/* ราคาเด่น — ตัวเลขใหญ่ */}
              <div data-aos="fade-up" className="flex flex-col justify-between bg-[#1a253c] p-7">
                <DollarSign className="h-6 w-6 text-amber-400 mb-6" />
                <div>
                  <div className="flex items-baseline gap-1 text-white">
                    <span className="text-3xl font-bold tracking-tight">1,800</span>
                    <span className="text-sm text-amber-400">บาท/วัน</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    เริ่มต้นเท่านี้ ราคาตรงไปตรงมา คุ้มค่าทุกเส้นทาง
                  </p>
                </div>
              </div>

              {features.map(({ icon: Icon, title, body }, index) => (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                  className="flex flex-col bg-white p-7 transition-colors hover:bg-amber-50/40"
                >
                  <Icon className="h-6 w-6 text-amber-600 mb-6" strokeWidth={1.75} />
                  <h3 className="text-base font-bold text-[#1a253c]">{title}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= 3. ขั้นตอนการจองรถ — เส้นทางประจุดหมาย ================= */}
          <div>
            <div data-aos="fade-up" className="text-center mb-16">
              <span className="text-xl font-semibold tracking-[0.25em] text-amber-600">
                ง่ายใน 3 ขั้นตอน
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#1a253c] tracking-tight">
                ขั้นตอนการจองรถ
              </h2>
            </div>

            <div className="relative">
              {/* เส้นทางประ — สัญลักษณ์การเดินทาง เชื่อม 3 จุดหมาย */}
              <div
                data-aos="fade-in"
                data-aos-delay="400"
                aria-hidden="true"
                className="hidden sm:block absolute left-[16.6%] right-[16.6%] top-8 border-t-2 border-dashed border-amber-300"
              />

             <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 relative">
                {steps.map(({ icon: Icon, title, body, animation }, i) => (
                  <div 
                    key={title} 
                    data-aos={animation} // 👈 เรียกเอฟเฟกต์แยกชิ้นจากโมเดลข้อมูล (ซ้าย, ล่าง, ขวา)
                    data-aos-delay={i * 100}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-[#1a253c] text-[#1a253c] mb-5 z-10">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                      <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#1a253c]">{title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-[220px]">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}