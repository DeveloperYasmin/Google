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
     <div>
      <SearchHeader/>
         {children}
         </div>
  );
}
