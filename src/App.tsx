import "./App.css";
import Maincontent from "./components/Maincontent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex w-full py-4 px-8 bg-corner-gradient">
      <Sidebar />
      <Maincontent />
    </div>
  );
}

export default App;
