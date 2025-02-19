import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ui/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
   <div className="flex items-center">
     <Button
      variant="ghost"
      className="bg-zinc-100 dark:bg-zinc-900 p-5"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Moon className={`h-[1.2rem] w-[1.2rem] ${
        theme === "light" 
          ? "rotate-0 scale-100" 
          : "-rotate-90 scale-0"
      } transition-all absolute`} />
      <Sun className={`h-[1.2rem] w-[1.2rem]  ${
        theme === "light" 
          ? "rotate-90 scale-0" 
          : "rotate-0 scale-100"
      } transition-all absolute ${theme === "dark" ? "text-gray-500" : ""}`} />

    </Button>
   </div>
  )
}

export default ThemeToggle