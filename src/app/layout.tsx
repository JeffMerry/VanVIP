import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Van Service | บริการเช่ารถตู้ VIP พร้อมคนขับมืออาชีพ ทั่วไทย",
  description:
    "Premium Van Service บริการเช่ารถตู้ VIP พร้อมคนขับมืออาชีพ ทั่วไทย ในราคาสุดพิเศษ รถใหม่ สะอาด ปลอดภัย บริการ 24 ชั่วโมง",
  keywords: [
    "เช่ารถตู้ VIP", 
    "รถตู้ VIP พร้อมคนขับ", 
    "เช่ารถตู้รายวัน", 
    "รถตู้ VIP ราคาถูก", 
    "เช่ารถตู้ vip กรุงเทพ",
    "premium van service",
    "เช่ารถตู้พร้อมคนขับ"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Premium Van Service | บริการเช่ารถตู้ VIP พร้อมคนขับมืออาชีพ",
    description: "บริการเช่ารถตู้ VIP สภาพใหม่ นั่งนุ่มสบาย ทั่วไทย เริ่มต้น 1,800 บาท/วัน",
    url: "https://premium-van-service.com",
    siteName: "RIT VAN VIP",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/images/logo.png", // 👈 ลิงก์รูปภาพหลัก (ขนาดแนะนำ 1200x630px) เวลาแชร์ในไลน์รูปนี้จะโชว์ทันที
        width: 1200,
        height: 630,
        alt: "Premium Van Service รถตู้พรีเมียมพร้อมให้บริการ",
      },
    ],
  },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={prompt.variable}>
      <body className="bg-surface font-prompt text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
