function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.1c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.4-3.9 4V10.4H8v3h2.4V21h3.1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" fill="none" stroke="currentColor" strokeWidth={1.6} />
      <path d="M10.5 9.8v4.4l4-2.2-4-2.2Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path d="M5 4.5h3.2l1.4 4L7.8 10a11 11 0 0 0 5.9 5.9l1.5-1.8 4 1.4V19a1.6 1.6 0 0 1-1.7 1.6C10.4 20 4 13.6 3.4 6.2A1.6 1.6 0 0 1 5 4.5Z" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.3-3.6-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  );
}

function LineBubbleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 5.79 2 10.44c0 4.17 3.58 7.66 8.42 8.31.33.07.77.22.88.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .88.55 1.08-.46 5.82-3.43 7.94-5.87C21.4 13.9 22 12.24 22 10.44 22 5.79 17.52 2 12 2Z" />
    </svg>
  );
}

const quickLinks = ["หน้าแรก", "การจองรถ", "แกลเลอรี่", "เกี่ยวกับเรา"];

export default function Footer() {
  return (
    <footer id="about" className="relative bg-footerNavy px-5 pb-8 pt-16 text-white/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon /> 084-011-2142
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon /> 063-269-6414
            </li>
            <li className="flex items-center gap-2">
              <MailIcon /> chanlit.cc@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <GlobeIcon /> www.ritvanvip.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Social Media
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FacebookIcon /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <YoutubeIcon /> RIT VAN VIP
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#home" className="transition-colors hover:text-gold-light">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Contact Us
          </h3>
          <p className="text-sm leading-relaxed">
            บริการเช่ารถตู้พร้อมคนขับ
            <br />
            พร้อมดูแลทุกการเดินทาง
            <br />
            บริการทั่วประเทศไทยตลอด 24 ชั่วโมง
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-white/40">
        RIT VAN VIP | สงวนลิขสิทธิ์ Page Redesign
      </div>

      <a
        href="https://lin.ee/VrLydCg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ติดต่อผ่าน LINE"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-lineGreen text-white shadow-lg shadow-lineGreen/30 transition-transform hover:scale-110"
      >
        <LineBubbleIcon />
      </a>
    </footer>
  );
}
