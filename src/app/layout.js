import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

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
      <div className="bg-[url('https://t4.ftcdn.net/jpg/06/22/22/91/240_F_622229170_NdlGFwxbByICYqBwPJkaYaTK6NqzdPcJ.jpg')] font-serif w-screen h-screen bg-no-repeat bg-center  bg-fixed bg-cover">
         {children}
          <Footer/>
    </div>
      </body>
    </html>
  );
}
