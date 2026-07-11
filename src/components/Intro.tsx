import MarqueeSlider from "@/components/MarqueeSlider";

const LINE_URL = "https://lin.ee/VrLydCg";
const FACEBOOK_URL = "https://www.facebook.com/share/1EnPx1xarV/";
const EMAIL = "chanlit.cc@gmail.com";
const WHATSAPP_URL = "https://wa.me/66840112142";


const trackContactConversion = (channel: string) => {
  if (typeof window !== "undefined") {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Contact', { content_name: channel });
    }
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/สติ๊กเกอร์ของคุณ',
        'value': 1.0,
        'currency': 'THB'
      });
    }
  }
};

const contacts = [
  {
    href: LINE_URL,
    label: "กดเพิ่มเพื่อน",
    iconBg: "bg-lineGreen",
    icon: LineLogoIcon,
    external: true,
    name: "LINE"
  },
  {
    href: WHATSAPP_URL, 
    label: "WhatsApp",
    iconBg: "bg-[#25D366]", 
    icon: WhatsAppIcon,
    external: true,
    name: "WhatsApp"
  },
  {
    href: "tel:0840112142",
    label: "084-011-2142",
    iconBg: "bg-orange-500",
    icon: MobileIcon,
    external: false,
    name: "Phone 1"
  },
  {
    href: "tel:0632696414",
    label: "063-269-6414",
    iconBg: "bg-red-500",
    icon: MobileIcon,
    external: false,
    name: "Phone 2"
  },
  {
    href: FACEBOOK_URL,
    label: "ติดตามเรา",
    iconBg: "bg-[#1877F2]",
    icon: FacebookIcon,
    external: true,
    name: "Facebook"
  },
  {
    href: `mailto:${EMAIL}`,
    label: "ส่งอีเมล",
    iconBg: "bg-purple-600",
    icon: MailIcon,
    external: false,
    name: "Email"
  },
] as const;

function LineLogoIcon() {
  return (
    <span className="text-[10px] font-extrabold leading-none tracking-tight text-white">
      LINE
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
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
  name,
}: (typeof contacts)[number]) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => trackContactConversion(name)}
      className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#1B4332] bg-white px-3 py-1.5 text-sm font-medium text-[#1B4332] shadow-sm transition-shadow hover:shadow-md sm:px-4 sm:py-2 whitespace-nowrap shrink-0 md:w-auto"
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
      <div className="mx-auto max-w-7xl text-center">
        <span className="section-eyebrow" />
        <h2 className="gold-text text-2xl font-bold sm:text-3xl">
          บริการเช่ารถตู้พร้อมคนขับ
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy/70 sm:text-base">
          บริการเช่ารถตู้พร้อมคนขับเส้นทางระดับมืออาชีพ รู้เส้นทางดี
          พนักงานขับรถมืออาชีพและมีน้ำใจงดงามในการเดินทางแต่ละครั้ง
          รถใหม่ สะอาด ปลอดภัย พร้อมดูแลทุกการเดินทางอย่างใกล้ชิดตลอด 24 ชั่วโมง
        </p>

      <div className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-3 sm:gap-4 md:flex md:max-w-none md:flex-row md:flex-wrap md:items-center md:justify-center md:w-auto">
          {contacts.map((contact) => (
            <ContactButton key={contact.label} {...contact} />
          ))}
        </div>
      </div>

      <MarqueeSlider />
    </section>
  );
}
