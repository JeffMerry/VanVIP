"use client";

import Image from "next/image";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

// 2. ข้อมูลบริการ 3 รูปแบบตรงตามภาพตัวอย่าง
const services: ServiceItem[] = [
  {
    id: 1,
    title: "เช่ารถตู้สำหรับท่องเที่ยว",
    description: "บริการรถตู้เหมานำเที่ยวทั่วประเทศ อยากเช็คอินจุดไหนในกรุงเทพฯ หรือต่างจังหวัด เราพร้อมจัดทริปให้คุณ",
    image: "/images/service-tour.jpg", // 👈 เปลี่ยนเป็นพาธรูปภาพของคุณ
  },
  {
    id: 2,
    title: "เช่ารถเพื่อรับส่งสนามบิน",
    description: "บริการรับ-ส่งสนามบินที่เน้นความตรงต่อเวลา สะดวกสบาย มุ่งเน้นการบริการด้วยความสุภาพและความใส่ใจ",
    image: "/images/service-airport.jpg", // 👈 เปลี่ยนเป็นพาธรูปภาพของคุณ
  },
  {
    id: 3,
    title: "เช่ารถตู้สำหรับกิจกรรมต่าง ๆ",
    description: "บริการเช่ารถตู้ไปงานต่าง ๆ เช่น งานแต่งงาน งานทำบุญขึ้นบ้านใหม่ ฯลฯ",
    image: "/images/service-events.jpg", // 👈 เปลี่ยนเป็นพาธรูปภาพของคุณ
  },
];


export default function WhyChooseUs() {
  return (
    <section  className="bg-surface px-5 pt-6 pb-20 sm:pt-10 sm:pb-24">
      <div className="mx-auto max-w-6xl">
          <div data-aos="fade-up" className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 mb-20">
          
          {/* ฝั่งซ้าย: รูปภาพรถตู้ */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/supervan-banner.jpg" 
              alt="เช่ารถตู้พร้อมคนขับ"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* ฝั่งขวา: รายละเอียดเนื้อหาและปุ่มกด */}
          <div className="flex flex-col items-start justify-center pl-0 md:pl-6">
            <h2 className="text-2xl font-bold tracking-tight gold-text sm:text-3xl">
              เช่ารถตู้พร้อมคนขับ เดินทางสะดวก ปลอดภัย
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              บริการเช่ารถตู้พร้อมคนขับจากเหมาะสำหรับทั้งการท่องเที่ยว 
              การเดินทางเดินทางอย่างเหนือระดับ สะดวกสบาย และปลอดภัยไปกับบริการเช่ารถตู้พร้อมคนขับมืออาชีพ เหมาะสำหรับทุกทริปท่องเที่ยว งานสัมมนาธุรกิจ หรือบริการรับ-ส่งสนามบินแบบหมู่คณะ รถทุกคันของเราเป็นรถคุณภาพสูง สะอาด และได้รับการดูแลมาตรฐานสากล พร้อมคนขับที่ชำนาญเส้นทางทั่วประเทศ ช่วยให้คุณถึงจุดหมายอย่างตรงต่อเวลา โดยไม่ต้องเหนื่อยขับรถเอง
            </p>
            <button
              type="button"
              className="mt-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-amber-500/20 transition-all hover:from-amber-600 hover:to-amber-700 active:scale-95"
            >
              ข้อมูลเพิ่มเติม
            </button>
          </div>
        </div>

        {/* เส้นคั่นแบ่งสัดส่วนบาง ๆ ให้ดูพรีเมียมขึ้น */}
        <hr className="border-slate-700/50 my-16" />

        <div data-aos="fade-up" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center text-center">
              
              {/* กรอบรูปภาพ สัดส่วนประมาณ 16:10 หรือ 4:3 ตามรูปตัวอย่าง */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg shadow-md bg-slate-800">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* ข้อความหัวข้อย่อยสีฟ้าสว่าง */}
              <h3 className="mt-5 text-xl font-bold tracking-wide gold-text">
                {service.title}
              </h3>

              {/* คำอธิบายบริการสีขาวนวล/เทาจาง ๆ */}
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy/70">
                {service.description}
              </p>

            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}
