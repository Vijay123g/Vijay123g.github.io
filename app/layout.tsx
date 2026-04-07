import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Vijay Guntuku | Software Engineer & Full Stack Developer",
  description:
    "Software Engineer specializing in Full Stack Development and LLM Applications. Building scalable web applications and AI-powered tools using React, Next.js, Node.js, and Docker.",
  keywords: [
    "Vijay Guntuku",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "AI",
    "LLM Applications",
    "Cybersecurity",
    "Old Dominion University",
  ],
  authors: [{ name: "Vijay Guntuku" }],
  openGraph: {
    title: "Vijay Guntuku | Software Engineer",
    description: "Full Stack Developer & AI Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
