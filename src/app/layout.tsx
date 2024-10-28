import type { Metadata } from "next";
import localFont from "next/font/local";
import {DM_Sans} from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const font = DM_Sans({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Automata",
  description: "Automate your work with automata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
