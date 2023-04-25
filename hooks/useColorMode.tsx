import React, { createContext, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const ColorModeContext = createContext<{
  colorMode: string;
  setColorMode: (value: string) => void;
}>({
  colorMode: "light",
  setColorMode: () => {},
});

interface ColorModeProviderProps{
  children: React.ReactNode;
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ children }) => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeContext;

