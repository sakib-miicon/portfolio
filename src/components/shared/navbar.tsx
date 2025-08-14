"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 relative">
      <div className="text-xl text-amber-50 font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:text-cyan-400">
        janedoe
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex gap-8">
          <a
            href="#"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="#"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`h-6 w-6 absolute transition-all duration-300 ${
                isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`h-6 w-6 absolute transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-8 right-8 bg-card/95 backdrop-blur-md rounded-lg shadow-xl border transform transition-all duration-300 ${
            isMenuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-4 opacity-0 scale-95"
          }`}
        >
          <nav className="flex flex-col p-6 gap-2">
            <a
              href="#"
              className="text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-border/50 hover:border-cyan-400/30"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-border/50 hover:border-cyan-400/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
