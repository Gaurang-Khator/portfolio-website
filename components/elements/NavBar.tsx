'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

interface NavBarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NavBar = ({ activeSection, onNavigate }: NavBarProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <div className="p-2 md:p-2 mx-2 md:m-2 border-2 rounded-xl bg-zinc-800 flex items-center justify-center border-none overflow-x-auto md:overflow-visible">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center space-x-2 md:space-x-8 flex-wrap md:flex-nowrap">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink asChild>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`bg-transparent transition-colors hover:bg-transparent focus:bg-transparent font-bold text-xs md:text-sm hover:text-[15px] whitespace-nowrap cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-blue-400 focus:text-blue-400' 
                      : 'text-gray-300 focus:text-blue-400 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBar;