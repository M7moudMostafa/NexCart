import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { WixClientProvider } from "@/context/WixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexCart | Modern eCommerce Web App",
  description:
    "NexCart is a modern eCommerce platform designed for seamless online shopping. It offers dynamic product listings, secure checkout, real-time updates, and an intuitive dashboard for effortless store management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientProvider>
          <Navbar />
          {children}
          <Footer />
        </WixClientProvider>
      </body>
    </html>
  );
}
