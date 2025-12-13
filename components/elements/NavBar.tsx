'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import Link from "next/link";
import { usePathname } from "next/navigation";  

const NavBar =() => {

    const pathname = usePathname();

    return (
        <div className="p-2 md:p-2 mx-2 md:m-2 border-2 rounded-xl bg-zinc-800 flex items-center justify-center border-none overflow-x-auto md:overflow-visible">
        <NavigationMenu>
            <NavigationMenuList className="flex justify-center space-x-2 md:space-x-8 flex-wrap md:flex-nowrap">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link 
                            href="/about" 
                            className={`bg-transparent transition-colors hover:bg-transparent focus:bg-transparent font-bold text-xs md:text-sm hover:text-[15px] whitespace-nowrap ${
                                pathname === '/about' ? 'text-blue-400 focus:text-blue-400' : 'text-gray-300 focus:text-blue-400  hover:text-blue-400'
                            }` }
                        >
                            About
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link 
                        href="/skills" 
                        className={`bg-transparent transition-colors hover:bg-transparent focus:bg-transparent font-bold text-xs md:text-sm hover:text-[15px] whitespace-nowrap ${
                                pathname === '/skills' ? 'text-blue-400 focus:text-blue-400' : 'text-gray-300 focus:text-blue-400  hover:text-blue-400'
                        }` }>
                            Skills
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover-black">
                    <NavigationMenuLink asChild>
                        <Link href="/projects" 
                        className={`bg-transparent transition-colors hover:bg-transparent focus:bg-transparent font-bold text-xs md:text-sm hover:text-[15px] whitespace-nowrap ${
                                pathname === '/projects' ? 'text-blue-400 focus:text-blue-400' : 'text-gray-300 focus:text-blue-400  hover:text-blue-400'
                        }` }>
                            Projects
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/certifications" 
                        className={`bg-transparent transition-colors hover:bg-transparent focus:bg-transparent font-bold text-xs md:text-sm hover:text-[15px] whitespace-nowrap ${
                                pathname === '/certifications' ? 'text-blue-400 focus:text-blue-400' : 'text-gray-300 focus:text-blue-400  hover:text-blue-400'
                        }` }>
                            Certifications
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/achievements" 
                        className={`bg-transparent transition-colors hover:bg-transparent focus:bg-transparent font-bold text-xs md:text-sm hover:text-[15px] whitespace-nowrap ${
                                pathname === '/achievements' ? 'text-blue-400 focus:text-blue-400' : 'text-gray-300 focus:text-blue-400  hover:text-blue-400'
                        }` }>
                            Achievements
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/education" 
                        className={`bg-transparent transition-colors hover:bg-transparent focus:bg-transparent font-bold text-xs md:text-sm hover:text-[15px] whitespace-nowrap ${
                                pathname === '/education' ? 'text-blue-400 focus:text-blue-400' : 'text-gray-300 focus:text-blue-400  hover:text-blue-400'
                        }` }>
                            Education
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/resume" 
                        className={`bg-transparent transition-colors hover:bg-transparent focus:bg-transparent font-bold text-xs md:text-sm hover:text-[15px] whitespace-nowrap ${
                                pathname === '/resume' ? 'text-blue-400 focus:text-blue-400' : 'text-gray-300 focus:text-blue-400  hover:text-blue-400'
                        }` }>
                            Resume
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
    );
}

export default NavBar;