import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider"
import SmoothFollower from "@/app/components/SmoothFollower"; 



export const metadata: Metadata = {
  title: "Adam Kourchi",
  description: "Adam Kourchi's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
               <SmoothFollower />
      </body>
    </html>
  );
}
