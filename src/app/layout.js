// import { Geist, Geist_Mono } from "next/font/google";
import { Inria_Serif } from 'next/font/google';
import "./globals.css";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const inriaSerif = Inria_Serif({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: "--font-inria-serif",
  
})

export const metadata = {
  title: "A Square Designer Studio - Interior Designers",
  description: "A Square Designer Studio will Transform Spaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inriaSerif.variable}`}>
       
        {children}
       
      </body>
    </html>
  );
}
