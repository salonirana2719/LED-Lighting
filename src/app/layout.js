import { Poppins, Syne } from 'next/font/google';
import "./globals.css";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add weights as needed
  variable: '--font-poppins', // Optional: Define a CSS variable for the font
});
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify weights for Syne
  variable: '--font-syne', // Optional: Define a CSS variable for Syne
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${syne.variable}`}>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
