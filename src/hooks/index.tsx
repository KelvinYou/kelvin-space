import { ReactNode } from "react";
import useKeyPress from "./useKeyPress";
import UseKeyPressDemo from "./useKeyPress/UseKeyPressDemo";
import { useLocalStorage } from "usehooks-ts";
import UseLocalStorageDemo from "./useLocalStorage/UseLocalStorageDemo";

interface CustomHook {
  id: string;
  hook: (targetKey: string) => boolean;
  demo: ReactNode; // Adjust the type to ReactNode
}

export const CUSTOM_HOOKS: any = {
  "useKeyPress": {
    id: "useKeyPress",
    hook: useKeyPress,
    demo: <UseKeyPressDemo />,
  },
  "useLocalStorage": {
    id: "useLocalStorage",
    hook: useLocalStorage,
    demo: <UseLocalStorageDemo />,
  }
}