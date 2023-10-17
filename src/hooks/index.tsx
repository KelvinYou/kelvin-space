import { ReactNode } from "react";
import useKeyPress from "./useKeyPress";
import UseKeyPressDemo from "./useKeyPress/Demo";

interface CustomHook {
  id: string;
  hook: (targetKey: string) => boolean;
  demo: ReactNode; // Adjust the type to ReactNode
}

export const customHooks = {
  "useKeyPress": {
    id: "useKeyPress",
    hook: useKeyPress,
    demo: <UseKeyPressDemo />,
  }
}