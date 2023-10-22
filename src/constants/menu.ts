import { ICON_TYPE } from "@/assets/SvgIcon";
import { CUSTOM_HOOKS } from "@/hooks";

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



export const toolMenu: MainMenu[] = [
  {
    id: "watermark",
    title: "Watermark",
    link: "/tool/watermark",
  },
  {
    id: "qr-code",
    title: "QR Code",
    link: "/tool/qr-code",
  },
];

export const componentMenu: MainMenu[] = [
  {
    id: "chart",
    title: "Chart",
    link: "/component/chart",
    icon: ICON_TYPE.CHART_OUTLINE,
  },
  {
    id: "progress-bar",
    title: "Progress Bar",
    link: "/component/progress-bar",
    icon: ICON_TYPE.CIRCLE,
  },
];

export const utilMenu: MainMenu[] = [
  {
    id: "moment",
    title: "Moment",
    link: "/util/moment",
    // icon: ICON_TYPE.CHART_OUTLINE,
  },
];

export const hookMenu = Object.values(CUSTOM_HOOKS).map(({ id }: any) => ({ 
  id,
  title: id,
  link: `/hook?id=${id}`
}));

export const externalMenu = [
  {
    id: "payroll",
    title: "Payroll",
    link: "/external/payroll",
    externalLink: "https://payroll.my/",
    icon: ICON_TYPE.BANK_NOTE,
  },
  {
    id: "loan-calculator",
    title: "Loan Calculator",
    link: "/external/loan-calculator",
    externalLink: "https://www.calculator.net/loan-calculator.html",
    icon: ICON_TYPE.CIRCLE,
  },
  {
    id: "xe-rate",
    title: "Xe Rate",
    link: "/external/xe-rate",
    externalLink: "https://www.xe.com/currencycharts/?from=USD&to=MYR",
    icon: ICON_TYPE.ARROW_RIGHT_LEFT,
  },
  {
    id: "qr",
    title: "QR Generator",
    link: "/external/qr",
    externalLink: "https://qr.io/",
    icon: ICON_TYPE.QR_CODE,
  },
]

export const otherMenu: MainMenu[] = [
  {
    id: "resources",
    title: "Resources",
    link: "/resources",
    icon: ICON_TYPE.LOCATION_OUTLINE,
  },
];

export const navLinks = [
  {
    id: "main",
    name: "Main",
    menu: mainMenu,
  },
  {
    id: "hooks",
    name: "Hooks",
    isSearch: true,
    menu: hookMenu,
  },
  {
    id: "tool",
    name: "Tools",
    menu: toolMenu,
  },
  {
    id: "component",
    name: "Components",
    menu: componentMenu,
  },
  {
    id: "util",
    name: "Utils",
    menu: utilMenu,
  },  
  {
    id: "external",
    name: "Externals",
    menu: externalMenu,
  },
  {
    id: "other",
    name: "Other",
    menu: otherMenu,
  },
]

// local storage constants
export const SELECTED_MENU_NAME = "selectedMenu";

export const INITIAL_DEFAULT_MENU_LIST = {
  items: [
    "main",
    "external",
  ],
};