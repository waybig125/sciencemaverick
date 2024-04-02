"use client";

import * as React from "react";
import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export function ThemeToggler() {
  // if (onClickEvent == undefined || onClickEvent == null) {
  //   onClickEvent = function () {
  //     console.log("No input received, maybe using desktop mode...");
  //   };
  // }
  const { setTheme, theme } = useTheme();

  const setThemeFunction = (theme) => {
    setTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={`rounded-full`}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeFunction("light")}>
          Light
          <Sun />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeFunction("dark")}>
          Dark
          <Moon />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeFunction("system")}>
          System
          <Settings />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
