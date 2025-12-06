"use client"

import { useState } from "react"
import { Search, ShoppingCart, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              SLIGHT
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>SUPPLY
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition">
              Shop All
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition">
              Apparel
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition">
              Accessories
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition">
              Contact
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-primary transition">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-primary transition">
              <ShoppingCart size={20} />
            </button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#" className="text-sm font-medium hover:text-primary transition">
              Shop All
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition">
              Apparel
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition">
              Accessories
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
