import React, { useEffect } from "react";
import Navbar from "@/pages/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "./pages/home";

function App() {
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>(SelectedPage.Home);

  const[isTopOfPage, setIsTopOfPage] = React.useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.screenY !== 0){
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
