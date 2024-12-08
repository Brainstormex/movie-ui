import {
  faBell,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="mb-4 w-full flex gap-3">
      <form className="w-full flex items-center">
        <FontAwesomeIcon
          className=" text-slate-400/50 translate-x-7 z-10 absolute"
          icon={faMagnifyingGlass}
        />
        <input
          type="search"
          placeholder="Type to Search.."
          className="w-full p-2.5 rounded-full bg-slate-500/15 text-gray-100 backdrop-blur-md border border-slate-300/5 px-6 pl-12 focus:outline-1 focus:outline-none focus:border-slate-300/25"
        />
      </form>
      <div className="border border-slate-300/15 rounded-full flex justify-center items-center h-11 w-11 text-[#b4d429] content-center">
        <FontAwesomeIcon  icon={faLocationDot} />
      </div>
      <div className="border border-slate-300/15 rounded-full flex justify-center items-center h-11 w-11 text-[#b4d429] content-center">
        <FontAwesomeIcon icon={faBell} />
      </div>
    </div>
  );
}
