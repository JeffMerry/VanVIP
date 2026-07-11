import { MarqueeImage, NavLink, Testimonial, Vehicle } from "./types";

export const navLinks: NavLink[] = [
  { label: "หน้าแรก", href: "/" },
  { label: "การจองรถ", href: "/booking" },
  { label: "แกลเลอรี่", href: "/gallery" },
  { label: "เกี่ยวกับเรา", href: "#about" },
];

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Toyota Hiace",
    image: "/images/vans/toyota-hiace.png", // เปลี่ยนเป็น Path รูปของคุณ
    seats: 12,
    transmission: "Automatic",
    doors: 4,
    fuel: "Diesel",
  },
  {
    id: 2,
    name: "Toyota Commuter",
    image: "/images/vans/toyota-commuter.png",
    seats: 12,
    transmission: "Automatic",
    doors: 4,
    fuel: "Diesel",
  },
  {
    id: 3,
    name: "Toyota Alphard",
    image: "/images/vans/toyota-alphard.png",
    seats: 11,
    transmission: "Automatic",
    doors: 5,
    fuel: "Diesel",
  },
  {
    id: 4,
    name: "Hyundai H1",
    image: "/images/vans/hyundai-h1.png",
    seats: 11,
    transmission: "Automatic",
    doors: 5,
    fuel: "Diesel",
  },
  {
    id: 5,
    name: "Toyota-Camry",
    image: "/images/vans/toyota-camry.png",
    seats: 5,
    transmission: "Automatic",
    doors: 4,
    fuel: "Bensin",
  },
];
export const marqueeImages: MarqueeImage[] = [
  {
    id: "marquee-1",
    src: "/images/marqueeImages/marquee-1.jpg",
    alt: "รูปรถตู้และการเดินทาง 1",
  },
  {
    id: "marquee-2",
    src: "/images/marqueeImages/marquee-2.jpg",
    alt: "รูปรถตู้และการเดินทาง 2",
  },
  {
    id: "marquee-3",
    src: "/images/marqueeImages/marquee-3.jpg",
    alt: "รูปรถตู้และการเดินทาง 3",
  },
  {
    id: "marquee-4",
    src: "/images/marqueeImages/marquee-4.jpg",
    alt: "รูปรถตู้และการเดินทาง 4",
  },
  {
    id: "marquee-5",
    src: "/images/marqueeImages/marquee-5.jpg",
    alt: "รูปรถตู้และการเดินทาง 5",
  },
  {
    id: "marquee-6",
    src: "/images/marqueeImages/marquee-6.jpg",
    alt: "รูปรถตู้และการเดินทาง 6",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "K. มด",
    subtitle: "Customer",
    quote:
      "พนักงานขับรถสุภาพ ตรงเวลา และดูแลลูกค้าดีมากตลอดการเดินทาง ประทับใจสุด ๆ",
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    id: "t2",
    name: "K. โจ้",
    subtitle: "Customer",
    quote:
      "รถสะอาด ใหม่ นั่งสบายมาก ราคาก็คุ้มค่าเมื่อเทียบกับบริการที่ได้รับ แนะนำเลยครับ",
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    id: "t3",
    name: "K. โจ",
    subtitle: "Customer",
    quote:
      "จองง่าย ติดต่อสะดวกผ่าน LINE พนักงานตอบไวและดูแลทุกรายละเอียดเป็นอย่างดี",
    avatar: "/images/avatars/avatar-3.jpg",
  },
  
];
