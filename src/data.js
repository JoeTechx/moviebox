import { GoHome } from "react-icons/go"
import { BiCameraMovie } from "react-icons/bi"
import { PiMonitorPlay } from "react-icons/pi"
import { IoCalendarOutline } from "react-icons/io5"

export const links = [
    {
      name: "Home",
      path: "/",
      icon: <GoHome/>,
    },
    {
      name: "Movies",
      path: "/movies",
      className: "movie_path",
      icon: <BiCameraMovie/>,
    },
    {
      name: "TV Series",
      path: "/tv-series",
      icon: <PiMonitorPlay/>,
    },
    {
      name: "Upcoming",
      path: "/upcoming",
      icon: <IoCalendarOutline/>,
    },
  ];