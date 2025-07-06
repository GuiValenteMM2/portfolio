import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GM Portfolio",
  description: "My portfolio for showing purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
