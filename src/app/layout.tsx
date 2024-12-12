// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orpheo Digital",
  description:
    "Marketing Digital, Design e Desenvolvimento de Sites e Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <main className="min-h-screen relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-background z-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-secondary/10" />
          </div>
          {/* Content */}
          <div className="relative z-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
