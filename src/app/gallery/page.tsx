"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import AOS from "aos";             
import "aos/dist/aos.css";

// 1. คลังข้อมูลรูปภาพเน้น ๆ (สามารถ copy วางเพิ่มจำนวนรูปภาพได้เรื่อย ๆ เลยครับ)
const galleryData = [
  { id: 1, category: "exterior", image: "/images/gallery/exterior/car-1.jpg" },
  { id: 2, category: "exterior", image: "/images/gallery/exterior/car-2.jpg" },
  { id: 3, category: "exterior", image: "/images/gallery/exterior/car-3.jpg" },
  { id: 4, category: "exterior", image: "/images/gallery/exterior/car-4.jpg" },
  { id: 5, category: "exterior", image: "/images/gallery/exterior/car-5.jpg" },
  { id: 6, category: "exterior", image: "/images/gallery/exterior/car-6.jpg" },


  { id: 7, category: "interior", image: "/images/gallery/interior/car-1.jpg" },
  { id: 8, category: "interior", image: "/images/gallery/interior/car-2.jpg" },
  { id: 9, category: "interior", image: "/images/gallery/interior/car-3.jpg" },
  { id: 10, category: "interior", image: "/images/gallery/interior/car-4.jpg" },

  { id: 11, category: "customers", image: "/images/gallery/customers/car-1.jpg" },
  { id: 12, category: "customers", image: "/images/gallery/customers/car-2.jpg" },

  { id: 13, category: "exterior", image: "/images/gallery/exterior/car-7.jpg" },
  { id: 14, category: "exterior", image: "/images/gallery/exterior/car-8.jpg" },
  { id: 15, category: "exterior", image: "/images/gallery/exterior/car-9.jpg" },
  { id: 16, category: "exterior", image: "/images/gallery/exterior/car-10.jpg" },

  { id: 17, category: "interior", image: "/images/gallery/interior/car-5.jpg" },
  { id: 18, category: "interior", image: "/images/gallery/interior/car-6.jpg" },
  { id: 19, category: "interior", image: "/images/gallery/interior/car-7.jpg" },
  { id: 20, category: "interior", image: "/images/gallery/interior/car-8.jpg" },


  { id: 21, category: "customers", image: "/images/gallery/customers/car-3.jpg" },
  { id: 22, category: "customers", image: "/images/gallery/customers/car-4.jpg" },
  { id: 23, category: "customers", image: "/images/gallery/customers/car-5.jpg" },
  { id: 24, category: "customers", image: "/images/gallery/customers/car-6.jpg" },

  { id: 25, category: "exterior", image: "/images/gallery/exterior/car-11.jpg" },
  { id: 26, category: "exterior", image: "/images/gallery/exterior/car-12.jpg" },
  { id: 27, category: "exterior", image: "/images/gallery/exterior/car-13.jpg" },

  { id: 28, category: "interior", image: "/images/gallery/interior/car-9.jpg" },
  { id: 29, category: "interior", image: "/images/gallery/interior/car-10.jpg" },
  { id: 30, category: "interior", image: "/images/gallery/interior/car-11.jpg" },
] as const;

// 2. หมวดหมู่ฟิลเตอร์ตามรูปเรฟเฟอเรนซ์
const categories = [
  { id: "all", label: "ทั้งหมด" },
  { id: "exterior", label: "รถของเรา (ภายนอก)" },
  { id: "interior", label: "รถของเรา (ภายใน)" },
  { id: "customers", label: "ลูกค้าของเรา" },
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

 useEffect(() => {

  AOS.init({
      duration: 600,            
      once: true,                
      easing: "ease-out-cubic",
    });

    const handleHashScroll = () => {
      const hash = window.location.hash; 
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {

          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 150);
        }
      }
    };


    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  const filteredImages = galleryData.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <>
      <Header />

      {/* bg-white คลีน ๆ เว้นระยะด้านบน pt-24 เผื่อพื้นที่ให้ไม่ชนกับแถบ Header เมนูครับ */}
      <section className="bg-white px-4 pt-24 pb-16 min-h-screen">
        <div className="mx-auto max-w-[1400px]">

            <div data-aos="fade-up" className="flex flex-col items-center text-center mb-10 ">
            <span className="text-xl font-bold tracking-[0.25em] text-amber-600 mb-3 uppercase">
              คลังภาพความทรงจำ
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#1a253c] tracking-tight mb-4">
              แกลเลอรี่ภาพถ่าย Premium Van
            </h1>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">
              สัมผัสความหรูหราของสภาพรถตู้จริง และรอยยิ้มความประทับใจจากลูกค้าที่เลือกใช้บริการของเราทั่วไทย
            </p>
          </div>
          
          {/* ================= ปุ่มคัดกรองสไตล์มินิมอลตามรูป ================= */}
          <div data-aos="fade-up" 
            data-aos-delay="100" className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mb-10 border-b border-slate-100 pb-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`px-5 py-2 text-sm font-bold tracking-wide transition-all ${
                    isActive
                      // บรรทัดนี้ตั้งเป็นสีเขียวเข้มเพื่อเลียนแบบปุ่ม "ทั้งหมด" ในรูปตัวอย่าง
                      // หากต้องการให้เป็นธีมของร้าน สามารถเปลี่ยน bg-[#1B4332] เป็นสีกรมท่า bg-[#1a253c] ได้ตามใจชอบครับ
                      ? "bg-[#1B4332] text-white rounded-none" 
                      : "text-slate-800 hover:text-slate-500 bg-transparent"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* ================= ตารางรูปภาพ Grid 6 คอลัมน์แบบหนาแน่นสูง ================= */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {filteredImages.map((item, i) => {
                // 👈 5. คอนเซ็ปต์คลื่น: นำเลขดัชนี (i % 6) มาคูณความหน่วงรูปภาพในแถวจะไม่เด้งขึ้นพร้อมกันทั้งหมด
                const delay = (i % 6) * 50; 
                
                return (
                  <div
                    key={item.id}
                    data-aos="fade-up"          // ใช้เด้งขึ้นด้านบน
                    data-aos-delay={delay}      // ใส่ความหน่วงแบบกระจายตัว
                    className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden group shadow-2xs"
                  >
                    <Image
                      src={item.image}
                      alt="Premium Van Gallery"
                      fill
                      sizes="(max-w-640px) 50vw, (max-w-1024px) 25vw, 16vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-102"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400 text-sm">
              ยังไม่มีรูปภาพในหมวดหมู่นี้
            </div>
          )}

        </div>
      </section>
      <Footer/>
    </>
  );
}