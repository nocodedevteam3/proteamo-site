"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X, ArrowLeft, Building2, Users } from "lucide-react"

const appLinks = [
  {
    title: "FOR SERVICE PROVIDERS",
    links: [
      { name: "Core App", href: "https://core.proteamo.com/" },
      { name: "Sales App", href: "https://sales.proteamo.com/" },
      { name: "Reports App", href: "https://reports.proteamo.com/" },
      { name: "Accounts App", href: "https://accounts.proteamo.com/" },
    ],
  },
  {
    title: "FOR CLIENTS",
    links: [{ name: "Client App", href: "https://client.proteamo.com/" }],
  },
]

// Updated feature links to match the exact file names
const featureLinks = [
  { name: "Service Providers", href: "/features-service-providers", icon: Building2 },
  { name: "Clients", href: "/features-clients", icon: Users },
]

export default function Header() {
  const [isFeatureOpen, setIsFeatureOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState<"closed" | "main" | "features" | "access">("closed")

  const handleMobileMenuToggle = () => {
    setMobileMenu(mobileMenu === "closed" ? "main" : "closed")
  }

  const handleFeatureBack = () => {
    setMobileMenu("main")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f6f8fc] border-b">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proteamo%20svg%20logo%20v1-3v3aziHw6duBBzYqYRLNY8EXXmRU44.svg"
            alt="ProTeamo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#333333] hover:text-[#0065FF]">
            Home
          </Link>
          <DropdownMenu open={isFeatureOpen} onOpenChange={setIsFeatureOpen}>
            <DropdownMenuTrigger className="flex items-center text-[#333333] hover:text-[#0065FF]">
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 p-2">
              {featureLinks.map((link) => {
                const Icon = link.icon
                return (
                  <DropdownMenuItem key={link.name} asChild className="py-3">
                    <Link href={link.href} className="flex items-center">
                      <Icon className="mr-2 h-4 w-4" />
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/pricing" className="text-[#333333] hover:text-[#0065FF]">
            Pricing
          </Link>
          <Link href="/about-us" className="text-[#333333] hover:text-[#0065FF]">
            About Us
          </Link>
        </nav>

        {/* Access Button & Dropdown */}
        <div className="hidden md:block">
          {/* COMMENTED OUT: Dropdown behavior - can be restored in the future */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-6" size="lg">
                Access
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2">
              {appLinks.map((section, index) => (
                <div key={section.title} className={`px-2 ${index > 0 ? "mt-4" : "mt-1"}`}>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{section.title}</p>
                  <div className="space-y-3">
                    {section.links.map((link) => (
                      <DropdownMenuItem key={link.name} asChild className="py-2">
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="w-full">
                          {link.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}

          {/* Direct link to Tally demo request */}
          <a href="https://tally.so/r/wbrkG0" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-6" size="lg">
              Access
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={handleMobileMenuToggle}>
            {mobileMenu === "closed" ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
            <span className="sr-only">{mobileMenu === "closed" ? "Open menu" : "Close menu"}</span>
          </Button>
        </div>
      </div>

      {/* Custom Mobile Menu */}
      {mobileMenu !== "closed" && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proteamo%20svg%20logo%20v1-3v3aziHw6duBBzYqYRLNY8EXXmRU44.svg"
                  alt="ProTeamo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={mobileMenu === "main" ? handleMobileMenuToggle : handleFeatureBack}
              >
                {mobileMenu === "main" ? <X className="h-6 w-6" /> : <ArrowLeft className="h-6 w-6" />}
                <span className="sr-only">{mobileMenu === "main" ? "Close menu" : "Back to main menu"}</span>
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {mobileMenu === "main" && (
                <div className="flex flex-col p-4 space-y-4">
                  <Link
                    href="/"
                    className="text-lg font-medium text-[#333333] hover:text-[#0065FF]"
                    onClick={handleMobileMenuToggle}
                  >
                    Home
                  </Link>
                  <div
                    className="flex items-center text-lg font-medium text-[#333333] hover:text-[#0065FF] cursor-pointer"
                    onClick={() => setMobileMenu("features")}
                  >
                    Features <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                  <Link
                    href="/pricing"
                    className="text-lg font-medium text-[#333333] hover:text-[#0065FF]"
                    onClick={handleMobileMenuToggle}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-lg font-medium text-[#333333] hover:text-[#0065FF]"
                    onClick={handleMobileMenuToggle}
                  >
                    About Us
                  </Link>
                  <div className="pt-4">
                    {/* COMMENTED OUT: Dropdown behavior - can be restored in the future */}
                    {/* <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white" size="lg">
                          Access
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 p-2">
                        {appLinks.map((section, index) => (
                          <div key={section.title} className={`px-2 ${index > 0 ? "mt-4" : "mt-1"}`}>
                            <p className="text-sm font-medium text-muted-foreground mb-3">{section.title}</p>
                            <div className="space-y-3">
                              {section.links.map((link) => (
                                <DropdownMenuItem key={link.name} asChild className="py-2">
                                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="w-full">
                                    {link.name}
                                  </a>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          </div>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu> */}

                    {/* Direct link to Tally demo request */}
                    <a href="https://tally.so/r/wbrkG0" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white" size="lg">
                        Access
                      </Button>
                    </a>
                  </div>
                </div>
              )}
              {mobileMenu === "features" && (
                <div className="p-4 space-y-4">
                  <p className="text-lg font-medium mb-2">Features</p>
                  <div className="space-y-4">
                    {featureLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center text-[#333333] hover:text-[#0065FF] py-2"
                          onClick={handleMobileMenuToggle}
                        >
                          <Icon className="mr-2 h-5 w-5" />
                          {link.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

