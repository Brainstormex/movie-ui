import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarLinks } from "./SidebarLinks";
import {
  faPlus,
  faRightFromBracket,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between gap-4 w-[290px]">
      <div className="flex flex-col gap-4 justify-center">
        <div className="py-4 flex justify-center">
          <strong className="text-xl font-bold text-[#b4d429]">
            CINEMACITY
          </strong>
        </div>
        <div className="bg-slate-500/15 text-gray-100 backdrop-blur-md border border-slate-300/5 p-5 rounded-2xl">
          <div className="h-1/2 flex justify-center items-center gap-3 font-semibold">
            <span>{"</>"}</span>
            <div className="flex flex-col">
              <span className="text-l">My Team</span>
              <span className="text-sm opacity-70 text-slate-300">
                +123456789
              </span>
            </div>
          </div>
          <div className="h-1/2 flex w-full justify-between items-center">
            <div className="">
              <span className="text-sm text-slate-300/70">Balance</span>
              <div className="flex gap-2 items-center text-[#b4d429]">
                <FontAwesomeIcon className="" icon={faWallet} />
                <span>$56,00</span>
              </div>
            </div>
            <div className="h-5 w-4 rounded-2xl flex items-center justify-center bg-[#b4d429] text-black py-5 px-3.5">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>

        <div>
          <ul className="flex flex-col gap-2.5">
            {SidebarLinks.map((index, key) => {
              return (
                <li
                  className="flex gap-3 px-4 py-2 group group-hover:text-black hover:bg-[#b4d429] text-gray-50 rounded-xl cursor-pointer"
                  key={key}
                >
                  <span className="text-[#61711a] group-hover:text-black transition-colors">
                    {index.icon}
                  </span>
                  <span className="group-hover:text-black">{index.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex justify-center group">
        <button className="flex gap-3 px-4 py-2 text-[#61711a] group-hover:bg-[#b4d429]  rounded-xl items-center">
          <span className="text-[#61711a] group-hover:text-black">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </span>
          <span className="text-gray-100 group-hover:text-black font-semibold">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
