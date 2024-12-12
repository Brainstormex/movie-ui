import { useState } from "react";
import "./App.css";
import Maincontent from "./components/Maincontent";
import Sidebar from "./components/Sidebar";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full h-screen py-4 px-8 bg-corner-gradient">
      <Sidebar open={open} />
      <Maincontent toggleSidebar={()=>setOpen((prev) => !prev)} />
    </div>
  );
}

export default App;
