"use client";

import Image from "next/image";
import { useState } from "react";
import { marqueeImages } from "@/lib/data";

function MarqueeCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-36 w-56 shrink-0 overflow-hidden rounded-xl border border-navy/5 bg-white shadow-md shadow-navy/10 sm:h-40 sm:w-64 md:h-44 md:w-72">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 224px, 288px"
      />
    </div>
  );
}

export default function MarqueeSlider() {
  const [paused, setPaused] = useState(false);
  const loop = [...marqueeImages, ...marqueeImages];

  return (
    <div
      className="relative mt-12 w-full"
      aria-label="แกลเลอรี่รูปภาพการเดินทาง"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent sm:w-20" />

      <div className="overflow-hidden">
        <div
          className={`flex w-max gap-4 sm:gap-5 md:gap-6 ${
            paused ? "[animation-play-state:paused]" : ""
          } animate-marquee motion-reduce:animate-none`}
        >
          {loop.map((image, index) => (
            <MarqueeCard
              key={`${image.id}-${index}`}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
