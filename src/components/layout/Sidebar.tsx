"use client";
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { useOnClickOutside } from "usehooks-ts";
import { usePathname } from 'next/navigation'

import { CiViewList } from "react-icons/ci";
import { MdChairAlt } from "react-icons/md";
import { AiOutlineFolderAdd, AiOutlineSetting } from "react-icons/ai";
import { componentMenu, hookMenu, mainMenu, otherMenu, toolMenu } from '@/constants/menu';
import SvgIcon from '@/assets/SvgIcon';
import { common } from '@/constants';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import MenuSelector from './MenuSelector';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen(open: boolean): void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname()
  
  const ref = useRef<HTMLDivElement>(null);
  
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const navLinks = [
    {
      id: "main",
      // name: "Main",
      menu: mainMenu,
    },
    {
      id: "hook",
      name: "Hook",
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
      id: "other",
      name: "Other",
      menu: otherMenu,
    },
  ]

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useOnClickOutside(ref, (e) => {
    setSidebarOpen(false);
  });

  return (
    <aside
      id="logo-sidebar" 
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform  bg-white dark:bg-black
        ${sidebarOpen ? "" : `-translate-x-full`} bg-sidebar sm:translate-x-0 
        `} aria-label="Sidebar" 
        ref={ref}>

      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 py-4">
        <Link href="/" className="text-black dark:text-white font-bold text-lg hidden sm:block">
          {common.appName}
        </Link>

        <span></span>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={true}
          className="block sm:hidden text-white"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4">
          <div className="mb-5">
            <MenuSelector />
          </div>
          {navLinks.map((navLink, index) => {
            return (
              <div key={navLink.id + index}>
                {navLink.name && 
                  <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-400 dark:text-gray-400">
                    {navLink.name.toUpperCase()}
                  </h3>
                }

                <ul className="mb-6 flex flex-col gap-1.5">

                  {navLink.menu.map((menu, index) => {
                    return (
                      <li key={menu.title + index}>
                        <Link href={menu.link || ""} onClick={() => setSidebarOpen(false)} 
                          className={`group relative flex items-center gap-2.5 rounded-sm 
                          py-2 px-4 font-medium text-sidebarlinktext duration-300 ease-in-out 
                          hover:bg-gray-200 dark:hover:bg-gray-800 ${pathname === menu.link && "bg-gray-200 dark:bg-gray-800"} dark:hover:bg-meta-4`}>

                            {menu.icon && <SvgIcon type={menu.icon} size={24} className=" fill-black dark:fill-white" />}

                            <span className="ml-3">{menu.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
      
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar