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

// export const metadata = {
//   title: "A Square Design Studio | Interior Designers",
//   description: "A Square Design Studio will Transform Spaces",
// };


export const metadata = {
  title: "A Square Design Studio | Interior Designers",
  description: "A Square Design Studio will Transform Spaces",
  keywords: ["interior design", "home decor", "modular kitchen", "A-square",  "interior", "design studio"],
  openGraph: {
    title: "A Square Design Studio",
    description: "Ineterior Design",
    url: "https://asquaredesignstudio.co.in/",
    siteName: "A-Square Design Studio",
    // images: [
    //   {
    //     url: "/images/og-image.jpg", // hosted in public folder
    //     width: 1200,
    //     height: 630,
    //     alt: "Your OG Image Alt Text",
    //   },
    // ],
    type: "website",
  }
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
