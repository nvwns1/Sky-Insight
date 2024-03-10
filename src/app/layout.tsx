import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientAreaLayout from "@/components/ClientLayout/ClientAreaLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sky Insight",
  description: "Get instant weather updates with Sky Insight. Your essential weather companion for accurate forecasts and real-time insights. Plan your day confidently with detailed forecasts, interactive maps, and personalized alerts. Sky Insight - simplifying your weather experience, wherever you are."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientAreaLayout>
          {children}
        </ClientAreaLayout>
      </body>
    </html>
  );
}
