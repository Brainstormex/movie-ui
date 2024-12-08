import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookmark,
  faStar,
  faUtensils,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarLinks = [
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
