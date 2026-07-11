"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINE_URL = "https://lin.ee/VrLydCg";

const trackLineConversion = () => {
  if (typeof window !== "undefined") {
    // 1. ส่งข้อมูลบอก Google Ads (เปลี่ยนรหัสและป้ายกำกับตามบัญชีจริงของลูกค้า)
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/สติ๊กเกอร์Conversionของคุณ',
        'value': 1.0,
        'currency': 'THB'
      });
    }

    // 2. ส่งข้อมูลบอก Facebook Ads / Meta Pixel
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  }
};

function LineIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 5.79 2 10.44c0 4.17 3.58 7.66 8.42 8.31.33.07.77.22.88.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .88.55 1.08-.46 5.82-3.43 7.94-5.87C21.4 13.9 22 12.24 22 10.44 22 5.79 17.52 2 12 2Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); 

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {

    if ((href === "/" || href === "#home") && pathname === "/") {
      e.preventDefault(); 

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
       <Link 
          href="/" 
          onClick={(e) => handleLinkClick(e, "/")}
          className="flex shrink-0 items-center gap-3"
        > 
          <Image
            src="/images/logo.png" 
            alt="RIT VAN VIP โลโก้บริการเช่ารถตู้ VIP" 
           width={200}  
          height={65} 
          priority     
          className="h-11 w-auto object-contain"
          />
          <span className="gold-text text-xl font-extrabold tracking-wide sm:text-2xl">
            Premium Van
          </span>
        </Link>

        {/* =================  (Desktop Nav) ================= */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)} 
              className="text-sm font-medium text-white/85 transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackLineConversion}
          className="hidden items-center gap-2 rounded-full bg-lineGreen px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-lineGreen/20 transition-transform hover:scale-105 lg:inline-flex"
        >
          <LineIcon />
          ติดต่อ LINE
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-1.5 lg:hidden"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* ================= (Mobile Dropdown) ================= */}
      {open && (
        <div className="border-t border-white/10 bg-navy px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setOpen(false); 
                  handleLinkClick(e, link.href); 
                }}
                className="text-sm font-medium text-white/85 hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setOpen(false);
              trackLineConversion();
            }}
            className="inline-flex items-center gap-2 rounded-full bg-lineGreen px-5 py-2.5 text-sm font-semibold text-white"
          >
            <LineIcon />
            ติดต่อ LINE
          </a>
        </div>
      )}
    </header>
  );
}