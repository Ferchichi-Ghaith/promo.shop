"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Herosection from "./HeroSection";
import ThemeToggleButton from "../ui/theme-toggle-button";
import { User } from "lucide-react";

export function Header() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            
          <NavbarButton
                
                variant="primary"
                className="w-full flex items-center justify-center gap-1"
              >
               <User size={18}/>
              </NavbarButton>            <ThemeToggleButton  variant="circle" start="bottom-right" />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex items-center justify-between w-full gap-4">
              <NavbarButton
                
                variant="primary"
                className="w-full flex items-center justify-center gap-1"
              >
                 <User size={18}/>
              </NavbarButton>
              <ThemeToggleButton  variant="circle" start="bottom-right" />

            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    

     
    </>
  );
}


