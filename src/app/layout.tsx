import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-prompt",
  display: "swap",
});

const GA_TRACKING_ID = "AW-18320445736";

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
    url: "https://www.premium-van-service.com",
    siteName: "RIT VAN VIP",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/images/logo.png", 
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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className="bg-surface font-prompt text-navy antialiased">
          {children}
      </body>
    </html>
  );
}
