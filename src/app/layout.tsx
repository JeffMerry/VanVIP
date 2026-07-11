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
  title: "RIT VAN VIP | บริการเช่ารถตู้ VIP พร้อมคนขับมืออาชีพ ทั่วไทย",
  description:
    "RIT VAN VIP บริการเช่ารถตู้ VIP พร้อมคนขับมืออาชีพ ทั่วไทย ในราคาสุดพิเศษ รถใหม่ สะอาด ปลอดภัย บริการ 24 ชั่วโมง",
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
