import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookmark,
  faStar,
  faUtensils,
  faClock,
  faRightFromBracket,
  faPlus,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export const Links = [
  {
    title: "Home",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: "Favorite",
    icon: <FontAwesomeIcon icon={faBookmark} />,
  },
  {
    title: "Bonus",
    icon: <FontAwesomeIcon icon={faStar} />,
  },
  {
    title: "Food and Drinks",
    icon: <FontAwesomeIcon icon={faUtensils} />,
  },
  {
    title: "Reminder",
    icon: <FontAwesomeIcon icon={faClock} />,
  },
];
export type SidebarProps = {
  open : boolean
}

export default function SidebarLinks(props: SidebarProps) {
  return (
    <div className="hidden lg:flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4">
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
            {Links.map((index, key) => {
              return (
                <li
                  className="flex gap-3 px-4 py-2 group group-hover:text-black hover:bg-[#b4d429] text-gray-50 rounded-xl cursor-pointer"
                  key={key}
                >
                  <span className="text-[#61711a] group-hover:text-black transition-colors">
                    {index.icon}
                  </span>
                  {props.open && <span className="group-hover:text-black">{index.title}</span>}
                  
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="flex group text-[#61711a] items-center">
          <div className="flex group-hover:bg-[#b4d429] px-4 py-2 gap-2 rounded-xl w-full">
            <span className="text-[#61711a] group-hover:text-black">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            <span className="text-gray-100 group-hover:text-black font-semibold">
              Logout
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
