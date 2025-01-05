import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";

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
  title: "Build-EZ",
  description:
    "Our Product App is designed to bring a seamless and enjoyable shopping experience to your fingertips.",
  openGraph: {
    images: [
      {
        url: "./banner.png",
        width: 1200,
        height: 630,
        alt: "Build-EZ Product App",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="en">
        <head></head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <Navbar className="fixed top-0 left-0 w-full z-10" />
          <Toaster position="top-center" />
          <main className="flex-1 pt-[135px] bg-white">{children}</main>
          <Footer className="fixed bottom-0 left-0 w-full z-10" />
        </body>
      </html>
    </UserProvider>
  );
}
