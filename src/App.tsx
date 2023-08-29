import React from "react";
import Navbar from "@/pages/navbar";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>(SelectedPage.Home);
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
