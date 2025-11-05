import type { Metadata } from "next";
import { loaders } from "@/data/loaders";
import { validateApiResponse } from "@/lib/error-handler";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await loaders.getMetaData();

  return {
    title: metadata?.data?.title ?? "AI-Summarizer",
    description: metadata?.data?.description ?? "Get youtube videos summarized",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let globalData = null;
  
  try {
    const globalDataResponse = await loaders.getGlobalData();
    globalData = validateApiResponse(globalDataResponse, "global page");
    console.dir(globalData, { depth: null });
  } catch (error) {
    console.error("Failed to load global data:", error);
    // Continue rendering with null data - Header component should handle this gracefully
  }

  return (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Header data={globalData?.header} />
      {children}
      <Footer data={globalData?.footer} />
    </body>
  </html>
);
}
