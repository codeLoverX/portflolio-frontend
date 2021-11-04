import React from "react";
import {AiFillHome} from "react-icons/ai";
import {IoIosPaper, IoMdLogOut, IoMdCodeWorking} from "react-icons/io";
import {ImStack } from "react-icons/im";
import { GoProject} from "react-icons/go";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Educations",
    path: "/education",
    icon: <IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Experiences",
    path: "/experience",
    icon: <ImStack />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    path: "/skill",
    icon: <IoMdCodeWorking />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/project",
    icon: <GoProject />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/support",
    icon: <IoMdLogOut />,
    cName: "nav-text",
  },
];
