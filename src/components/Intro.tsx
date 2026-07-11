import MarqueeSlider from "@/components/MarqueeSlider";

const LINE_URL = "https://lin.ee/VrLydCg";
const FACEBOOK_URL = "https://www.facebook.com/share/1EnPx1xarV/";
const EMAIL = "chanlit.cc@gmail.com";

const contacts = [
  {
    href: LINE_URL,
    label: "กดเพิ่มเพื่อน",
    iconBg: "bg-lineGreen",
    icon: LineLogoIcon,
    external: true,
  },
  {
    href: "tel:0840112142",
    label: "084-011-2142",
    iconBg: "bg-orange-500",
    icon: MobileIcon,
    external: false,
  },
  {
    href: "tel:0632696414",
    label: "063-269-6414",
    iconBg: "bg-red-500",
    icon: MobileIcon,
    external: false,
  },
  {
    href: FACEBOOK_URL,
    label: "ติดตามเรา",
    iconBg: "bg-[#1877F2]",
    icon: FacebookIcon,
    external: true,
  },
  {
    href: `mailto:${EMAIL}`,
    label: "ส่งอีเมล",
    iconBg: "bg-purple-600",
    icon: MailIcon,
    external: false,
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="18.5" r="1" fill="currentColor" className="text-white/80" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white" aria-hidden="true">
      <path d="M14.5 8.5H13V7.2c0-.5.3-.8 1-.8h1V4.5h-1.5c-2.2 0-3.2 1.1-3.2 3v1.5H8v2.3h1.3V19h3.2v-8.2h2.2l.3-2.3Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactButton({
  href,
  label,
  iconBg,
  icon: Icon,
  external,
}: (typeof contacts)[number]) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-2.5 rounded-full border border-[#1B4332] bg-white px-3 py-1.5 text-sm font-medium text-[#1B4332] shadow-sm transition-shadow hover:shadow-md sm:px-4 sm:py-2"
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBg}`}
      >
        <Icon />
      </span>
      {label}
    </a>
  );
}

export default function Intro() {
  return (
    <section data-aos="fade-up" className="bg-surface px-5 pb-20 pt-10 sm:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="section-eyebrow" />
        <h2 className="gold-text text-2xl font-bold sm:text-3xl">
          บริการเช่ารถตู้พร้อมคนขับ
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy/70 sm:text-base">
          บริการเช่ารถตู้พร้อมคนขับเส้นทางระดับมืออาชีพ รู้เส้นทางดี
          พนักงานขับรถมืออาชีพและมีน้ำใจงดงามในการเดินทางแต่ละครั้ง
          รถใหม่ สะอาด ปลอดภัย พร้อมดูแลทุกการเดินทางอย่างใกล้ชิดตลอด 24 ชั่วโมง
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {contacts.map((contact) => (
            <ContactButton key={contact.label} {...contact} />
          ))}
        </div>
      </div>

      <MarqueeSlider />
    </section>
  );
}
