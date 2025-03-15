import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#f6f8fc] py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proteamo%20svg%20logo%20v1-3v3aziHw6duBBzYqYRLNY8EXXmRU44.svg"
                alt="ProTeamo"
                width={92}
                height={92}
                className="w-[92px] h-[92px]"
              />
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            {/* Company Links */}
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-[#6B7280] uppercase tracking-wider mb-4">Company</h2>
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-[#333333] hover:text-[#0065FF] transition-colors">
                  Home
                </Link>
                <Link href="/about-us" className="text-[#333333] hover:text-[#0065FF] transition-colors">
                  About Us
                </Link>
                <Link href="/pricing" className="text-[#333333] hover:text-[#0065FF] transition-colors">
                  Pricing
                </Link>
              </nav>
            </div>

            {/* Features Links */}
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-[#6B7280] uppercase tracking-wider mb-4">Features</h2>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/features-service-providers"
                  className="text-[#333333] hover:text-[#0065FF] transition-colors"
                >
                  Service Providers
                </Link>
                <Link href="/features-clients" className="text-[#333333] hover:text-[#0065FF] transition-colors">
                  Clients
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

