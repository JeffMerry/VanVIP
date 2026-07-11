"use client";

import { useRef, useState, useEffect} from "react";
import Image from "next/image";
import { vehicles } from "@/lib/data";
import { Vehicle } from "@/lib/types";
import { Users, Settings, DoorOpen, Fuel, ChevronLeft, ChevronRight} from "lucide-react";

export default function Fleet() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight,setCanScrollRight] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft,scrollWidth, clientWidth} = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  const handleScroll = (direction: "left"| "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      }
    };
  },[]);
  return (
    <section data-aos="fade-up" id="fleet" className="bg-white px-5 pt-2.5 pb-10 sm:pt-12 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-eyebrow" />
          <h2 className="gold-text text-2xl font-bold sm:text-3xl">
            ประเภทรถตู้ที่ให้บริการของเรา
          </h2>
        </div>

        <div className="group relative w-full">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className={`absolute -left-12 lg:-left-14 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3.5 shadow-xl shadow-slate-200/80 transition-all duration-300 hover:bg-slate-100 hover:text-blue-600 active:scale-95 ${
              canScrollLeft ? "opacity-0 group-hover:opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll Left"
          >
            <ChevronLeft className="h-6 w-6 text-slate-800" />
          </button>

          {/* ปุ่มเลื่อนขวา */}
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className={`absolute -right-16 lg:-right-18 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3.5 shadow-xl shadow-slate-200/80 transition-all duration-300 hover:bg-slate-100 hover:text-blue-600 active:scale-95 ${
              canScrollRight ? "opacity-0 group-hover:opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll Right"
          >
            <ChevronRight className="h-6 w-6 text-slate-800" />
          </button>
            <div
            ref={scrollRef}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {vehicles.map((vehicle: Vehicle) => (
              <article
                key={vehicle.id}
                className="w-[calc(100%-24px)] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* รูปภาพรถอัตราส่วน 4:3 */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* รายละเอียดเนื้อหา */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold tracking-tight text-slate-800 transition-colors group-hover:text-blue-600">
                    {vehicle.name}
                  </h3>
                  
                  <hr className="my-5 border-slate-100" />

                  <div className="grid grid-cols-2 gap-x-5 gap-y-4 text-sm font-medium text-slate-600">
                    <div className="flex items-center gap-2.5">
                      <Users className="h-5 w-5 shrink-0 text-amber-500/90" />
                      <span>{vehicle.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Settings className="h-5 w-5 shrink-0 text-amber-500/90" />
                      <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <DoorOpen className="h-5 w-5 shrink-0 text-amber-500/90" />
                      <span>{vehicle.doors} Doors</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Fuel className="h-5 w-5 shrink-0 text-amber-500/90" />
                      <span>{vehicle.fuel}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
