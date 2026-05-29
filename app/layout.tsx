import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SETAYESH SALON | Where Beauty Becomes Art",
  description:
    "Vancouver's premier luxury nail salon. Expert gel manicures, acrylic sets, custom nail art, and spa treatments by certified nail artists.",
  keywords: "nail salon, luxury nails, gel manicure, acrylic nails, nail art, Vancouver",
  openGraph: {
    title: "SETAYESH SALON | Where Beauty Becomes Art",
    description: "Vancouver's premier luxury nail salon — expert nail art, gel manicures, and spa treatments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full antialiased" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
