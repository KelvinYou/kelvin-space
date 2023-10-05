// import { 
//   experienceIcon, 
//   homeIcon 
// } from "@/assets";

import { ICON_TYPE } from "@/assets/SvgIcon";

// import { HOME_PATH, PROJECTS_PATH, RESUME_LINK, EXPERIENCES_PATH } from "./routes";

export type MainMenu = {
  id: string;
  title: string;
  subMenu?: SubMenu[];
  link?: string;
  newTab?: boolean;
  icon?: any;
}

type SubMenu = {
  title: string;
  subMenu?: SubMenu[];
  link?: string;
}

export const mainMenu: MainMenu[] = [
  {
    id: "home",
    title: "Home",
    link: "/",
    icon: ICON_TYPE.HOME_OUTLINE,
  },
];

export const componentMenu: MainMenu[] = [
  {
    id: "chart",
    title: "Chart",
    link: "/component/chart",
    icon: ICON_TYPE.CHART_OUTLINE,
  },
];

export const otherMenu: MainMenu[] = [
  {
    id: "resources",
    title: "Resources",
    link: "/resources",
    icon: ICON_TYPE.LOCATION_OUTLINE,
  },
];