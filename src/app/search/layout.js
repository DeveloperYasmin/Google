import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";


export const metadata = {
  title: "Google Clone",
  icons:{
    icon:["/logo.png"],
  }
};

export default function SearchLayout({ children }) {
  return (
    <div className="bg-white font-serif w-screen h-screen bg-no-repeat bg-center  bg-fixed bg-cover">

      <SearchHeader/>
         {children}
         </div>
  );
}
