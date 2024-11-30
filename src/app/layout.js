import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar className="fixed top-0 left-0 w-full z-10" />
        <main className="flex-1 pt-[60px] pb-[50px]">{children}</main>
        <Footer className="fixed bottom-0 left-0 w-full z-10" />
      </body>
    </html>
  );
}
