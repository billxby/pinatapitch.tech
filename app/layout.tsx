import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piñata Pitch | Premier Tech Pitch Competition",
  description:
    "Igniting passion for entrepreneurship in young minds to empower Montreal's startup tech scene.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full antialiased">{children}</body>
    </html>
  );
}
