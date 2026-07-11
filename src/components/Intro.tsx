import MarqueeSlider from "@/components/MarqueeSlider";

const LINE_URL = "https://lin.ee/VrLydCg";
const FACEBOOK_URL = "https://www.facebook.com/share/1EnPx1xarV/";
const EMAIL = "chanlit.cc@gmail.com";
const WECHAT_URL = `https://u.wechat.com/kDKVFZAF2o4s8dLttvmA4wU?s=4`


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
    href: WECHAT_URL, 
    label: "WeChat",
    iconBg: "bg-[#07C160]",
    icon: WeChatIcon,    
    external: true,
    name: "WeChat"
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

function WeChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white" aria-hidden="true">
      <path d="M8.337 11.233c0-.402.327-.729.73-.729.402 0 .73.327.73.73 0 .401-.328.728-.73.728a.73.73 0 01-.73-.729m3.398 0c0-.402.328-.729.73-.729.403 0 .73.327.73.73 0 .401-.327.728-.73.728a.73.73 0 01-.73-.729M16.49 8.243c0-2.884-3.153-5.222-7.04-5.222C5.56 3.021 2.41 5.36 2.41 8.243c0 1.588.955 3.016 2.492 3.987l-.626 1.879 2.227-1.112c.767.221 1.58.344 2.428.344.256 0 .509-.012.759-.034A5.32 5.32 0 019.45 11.1c0-2.31 2.223-4.184 4.965-4.184.774 0 1.51.151 2.17.423a5.05 5.05 0 01-.095-.945v.85zm5.1 5.378c0-2.427-2.654-4.394-5.927-4.394-3.273 0-5.927 1.967-5.927 4.394 0 2.427 2.654 4.396 5.927 4.396.643 0 1.264-.075 1.849-.214l1.714.856-.481-1.444c1.238-.795 2.845-1.956 2.845-3.692zm-7.662-.73c0-.301.245-.547.548-.547.302 0 .548.246.548.547 0 .302-.246.548-.548.548a.548.548 0 01-.548-.548m2.74 0c0-.301.246-.547.548-.547.302 0 .548.246.548.547 0 .302-.246.548-.548.548a.548.548 0 01-.548-.548z" />
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
