import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  icons:{
    icon:["/logo.png"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>    
      <div className="overflow-y-scroll overflow-x-hidden bg-[url('https://img.freepik.com/premium-photo/white-butterfly-white-background_916191-5592.jpg')] font-serif w-screen h-screen bg-no-repeat bg-center  bg-fixed bg-cover">
         {children}
    </div>
      </body>
    </html>
  );
}
