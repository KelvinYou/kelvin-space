import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { ThemeMode } from '@/components/theme-provider';

export const ICON_TYPE = {
  LOCATION_OUTLINE: "location_outline",
  OPEN_LINK_OUTLINE: "open_link_outline",
  CLOCK: "clock",
  CLOCK_OUTLINE: "clock_outline",
  HOME_OUTLINE: "home_outline",
  CHART_OUTLINE: "chart_outline",
}
type SvgIconType = {
  type?: string;
  size?: number;
  className?: string;
  color?: string;
  darkColor?: string;
}

const SvgIcon = (props: SvgIconType) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { 
    type = ICON_TYPE.LOCATION_OUTLINE,
    size = 24,
    className = '',
    color = "#000",
    darkColor = "#FFF",
  } = props;

  const svgIcons = [
    {
      name: ICON_TYPE.LOCATION_OUTLINE,
      path: <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={size / 16} 
        width={size} 
        height={size} 
        style={{ stroke: theme === ThemeMode.Light ? color : darkColor }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      ,
    },
    {
      name: ICON_TYPE.CLOCK_OUTLINE,
      path: <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
      />,
    },
    {
      name: ICON_TYPE.HOME_OUTLINE,
      path: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={size / 16} 
        width={size} 
        height={size} 
        style={{ stroke: theme === ThemeMode.Light ? color : darkColor }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      ,
    },
    {
      name: ICON_TYPE.CHART_OUTLINE,
        path: <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={size / 16} 
        width={size} 
        height={size} 
        style={{ stroke: theme === ThemeMode.Light ? color : darkColor }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>,
    },
  ]

  const icon = svgIcons.find((svgIcon) => svgIcon.name === type);

  if (!mounted) return null;
  
  return (
    <>
      {icon?.path}
    </>
  )

}

export default SvgIcon