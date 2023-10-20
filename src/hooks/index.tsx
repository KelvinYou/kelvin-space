import { ReactNode } from "react";
import useKeyPress from "./useKeyPress";
import UseKeyPressDemo from "./useKeyPress/UseKeyPressDemo";
import { useLocalStorage } from "usehooks-ts";
import UseLocalStorageDemo from "./useLocalStorage/UseLocalStorageDemo";

interface CustomHook {
  id: string;
  description: string;
  hook: (targetKey: string) => boolean;
  demo: ReactNode; // Adjust the type to ReactNode
}

const HOOK_TYPE = {
  CUSTOM_HOOK: {
    name: "customHook",
    label: "Custom Hook",
  },
  USEHOOKS_TS: {
    name: "usehooksTs",
    label: "useHooks TS",
    referenceUrl: "https://usehooks-ts.com",
  },
}

export const CUSTOM_HOOKS: any = {
  "useKeyPress": {
    id: "useKeyPress",
    type: HOOK_TYPE.CUSTOM_HOOK,
    hook: useKeyPress,
    demo: <UseKeyPressDemo />,
  },
  "useLocalStorage": {
    id: "useLocalStorage",
    type: HOOK_TYPE.USEHOOKS_TS,
    hook: useLocalStorage,
    demo: <UseLocalStorageDemo />,
  }
}