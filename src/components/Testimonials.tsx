"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/lib/data";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 24" className="h-6 w-8 text-gold" fill="currentColor" aria-hidden="true">
      <path d="M9.5 0C4.3 2.5 0 8.1 0 14.4 0 19.7 3.5 24 8.6 24c3.9 0 6.9-3 6.9-6.8 0-3.6-2.7-6.4-6.2-6.4-.7 0-1.3.1-1.7.3C8.3 7 10.8 3.3 14.6 1.1L9.5 0Zm17 0C21.3 2.5 17 8.1 17 14.4c0 5.3 3.5 9.6 8.6 9.6 3.9 0 6.9-3 6.9-6.8 0-3.6-2.7-6.4-6.2-6.4-.7 0-1.3.1-1.7.3C25.3 7 27.8 3.3 31.6 1.1L26.5 0Z" />
    </svg>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section data-aos="fade-up" className="bg-navy px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="section-eyebrow" />
          <h2 className="gold-text text-2xl font-bold sm:text-3xl">
            ลูกค้าของเรา
          </h2>
        </div>

        {/* Desktop: 3-column row */}
        <div className="mt-12 hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Mobile: single-card carousel */}
        <div className="mt-12 flex items-center justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={prev}
            aria-label="ก่อนหน้า"
            className="shrink-0 rounded-full border border-white/15 p-2 text-white/70 transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowIcon direction="left" />
          </button>

          <TestimonialCard testimonial={testimonials[index]} />

          <button
            type="button"
            onClick={next}
            aria-label="ถัดไป"
            className="shrink-0 rounded-full border border-white/15 p-2 text-white/70 transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white/5 p-7 text-center">
      <QuoteMark />
      <p className="mt-4 text-sm leading-relaxed text-white/80">
        {testimonial.quote}
      </p>
      <div className="relative mt-6 h-14 w-14 overflow-hidden rounded-full ring-2 ring-gold/60">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-3 text-sm font-semibold text-white">
        {testimonial.name}
      </p>
      <p className="text-xs text-white/50">{testimonial.subtitle}</p>
    </div>
  );
}
