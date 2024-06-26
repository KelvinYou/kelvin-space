"use client"
import { ICON_TYPE } from "@/assets/SvgIcon/_config";
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


export const HOME_PATH = "/";

export const mainMenu: MainMenu[] = [
  {
    id: "home",
    title: "Home",
    link: HOME_PATH,
    icon: ICON_TYPE.HOME_OUTLINE,
  },
];



export const toolMenu: MainMenu[] = [
  {
    id: "watermark",
    title: "Watermark",
    link: "/tool/watermark",
    icon: ICON_TYPE.FILE_LOCK,
  },
  {
    id: "qr-code",
    title: "QR Code",
    link: "/tool/qr-code",
    icon: ICON_TYPE.QR_CODE,
  },
  {
    id: "chat",
    title: "Chat",
    link: "/tool/chat",
  },
  {
    id: "log-checker",
    title: "Log Checker",
    link: "/tool/log-checker",
  },
];

export const COMPONENT_PATH = "/component";
export const COMPONENT_CHART_PATH = COMPONENT_PATH + "/chart";
export const COMPONENT_MAP_PATH = COMPONENT_PATH + "/map";
export const COMPONENT_PROGRESS_BAR_PATH = COMPONENT_PATH + "/progress-bar";
export const COMPONENT_TABLE_PATH = COMPONENT_PATH + "/table";
export const COMPONENT_DATE_PICKER_PATH = COMPONENT_PATH + "/date-picker";
export const COMPONENT_PDF_PATH = COMPONENT_PATH + "/pdf";

export const componentMenu: MainMenu[] = [
  {
    id: "chart",
    title: "Chart",
    link: COMPONENT_CHART_PATH,
    icon: ICON_TYPE.CHART_OUTLINE,
  },
  {
    id: "map",
    title: "Map",
    link: COMPONENT_MAP_PATH,
    icon: ICON_TYPE.MAP_PINNED,
  },
  {
    id: "progress-bar",
    title: "Progress Bar",
    link: COMPONENT_PROGRESS_BAR_PATH,
    icon: ICON_TYPE.CIRCLE,
  },
  {
    id: "table",
    title: "Table",
    link: COMPONENT_TABLE_PATH,
    icon: ICON_TYPE.TABLE,
  },
  {
    id: "date-picker",
    title: "Date Picker",
    link: COMPONENT_DATE_PICKER_PATH,
    // icon: ICON_TYPE.TEXT,
  },
  {
    id: "pdf",
    title: "Pdf Renderer",
    link: COMPONENT_PDF_PATH,
    // icon: ICON_TYPE.TEXT,
  },
  {
    id: "resizable",
    title: "Resizable",
    link: COMPONENT_PATH + "/resizable",
  }
];

export const UTIL_PATH = "/util";

export const UTIL_DATE_PATH = UTIL_PATH + "/date";
export const UTIL_TEXT_PATH = UTIL_PATH + "/text";
export const UTIL_CRYPTO_PATH = UTIL_PATH + "/crypto";
export const UTIL_STORAGE_PATH = UTIL_PATH + "/storage";
export const UTIL_JSON_PATH = UTIL_PATH + "/json-converter";

export const utilMenu: MainMenu[] = [
  {
    id: "date",
    title: "Date",
    link: UTIL_DATE_PATH,
    icon: ICON_TYPE.CLOCK_OUTLINE,
  },
  {
    id: "text",
    title: "Text",
    link: UTIL_TEXT_PATH,
    icon: ICON_TYPE.TEXT,
  },
  {
    id: "crypto",
    title: "Crypto",
    link: UTIL_CRYPTO_PATH,
    icon: ICON_TYPE.FILE_LOCK,
  },
  {
    id: "storage",
    title: "Storage",
    link: UTIL_STORAGE_PATH,
    // icon: ICON_TYPE.FILE_LOCK,
  },
  {
    id: "json-converter",
    title: "JSON Converter",
    link: UTIL_JSON_PATH,
  },
];

export const HOOK_PATH = "/hook";
export const HOOK_ITEM_PATH = HOOK_PATH + "/";

export const hookMenu = Object.values(CUSTOM_HOOKS).map(({ id }: any) => ({ 
  id,
  title: id,
  link: `${HOOK_ITEM_PATH}${id}`
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
  {
    id: "hyper-ui",
    title: "Hyper UI",
    link: "/external/hyper-ui",
    externalLink: "https://www.hyperui.dev/",
    // icon: ICON_TYPE.QR_CODE,
  },
  {
    id: "hyper-color",
    title: "Hyper Color",
    link: "/external/hyper-color",
    externalLink: "https://hypercolor.dev/",
    // icon: ICON_TYPE.QR_CODE,
  },
  {
    id: "nextjs-docs",
    title: "NextJS Docs",
    link: "/external/nextjs-docs",
    externalLink: "https://nextjs.org/docs",
  },
  {
    id: "reactjs-hook",
    title: "ReactJS Hook",
    link: "/external/reactjs-hook",
    externalLink: "https://legacy.reactjs.org/docs/hooks-reference.html",
  },
  {
    id: "lucide-icons",
    title: "Lucide Icons",
    link: "/external/lucide-icons",
    externalLink: "https://lucide.dev/icons/",
  },
  {
    id: "test-nextjs",
    title: "Test NextJS",
    link: "/external/test-nextjs",
    externalLink: "https://nextjs.org/docs/pages/building-your-application/optimizing/testing#setting-up-jest-with-the-rust-compiler",
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

export const SAMPLE_DESIGN_PATH = "/sample-design";
export const SAMPLE_DESIGN_GAME_ANALYSIS_PATH = SAMPLE_DESIGN_PATH + "/game-analysis";


export const sampleDesignMenu: MainMenu[] = [
  {
    id: "game-analysis",
    title: "Game Analysis",
    link: SAMPLE_DESIGN_GAME_ANALYSIS_PATH,
  }
]

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
    id: "sample-design",
    name: "Sample Design",
    menu: sampleDesignMenu,
  },  
  {
    id: "external",
    name: "Externals",
    isSearch: true,
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
    "tool",
    "component",
    "util",
    "sample-design",
    "hooks",
    "external",
    "other",
  ],
};