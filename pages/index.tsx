import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  FileText,
  TrendingUp,
  BarChart2,
  Calculator,
  Users,
  BookUser,
  CheckCircle2,
  ArrowUp,
  ThumbsUp,
  AlertCircle,
  Clock,
  FastForward,
  Wallet,
  RefreshCcw,
  UserCheck,
} from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const solutions = [
  {
    icon: FileText, // Document icon
    title: "Effortless Job Management",
    description:
      "From simple tasks to complex projects, manage it all in one place. Collaborate seamlessly, assign tasks effortlessly, and never miss a deadline again.",
  },
  {
    icon: TrendingUp, // Line graph icon
    title: "Supercharged Sales",
    description:
      "Turn inquiries into opportunities and opportunities into revenue. Our powerful quotation system and inquiry management tools keep your sales pipeline flowing.",
  },
  {
    icon: BarChart2, // Bar chart icon
    title: "Insightful Reporting",
    description:
      "Gain a bird's-eye view of your business with our comprehensive reporting tools. Make data-driven decisions and optimize your operations for maximum efficiency.",
  },
  {
    icon: Calculator, // Calculator icon
    title: "Simplified Accounting",
    description:
      "Say goodbye to financial headaches. Our integrated accounting tools keep your finances in check, from client billing to team member expenses.",
  },
  {
    icon: Users, // Handshake/collaboration icon
    title: "Enhanced Client Collaboration",
    description:
      "Build trust and loyalty with our client portal. Offer transparency, respond promptly to requests, and exceed expectations every time.",
  },
  {
    icon: BookUser, // Directory/contact card icon
    title: "Publicly Available Directory",
    description:
      "Showcase your services in our public directory. Let clients find you and request your expertise with just a few clicks. Leverage our network effects to grow your business.",
  },
]

const industries = [
  {
    title: "Business Service Providers",
    description: "Assisting businesses with compliance and documentation.",
  },
  {
    title: "Individual PROs",
    description: "Freelance agents managing public relations and client tasks.",
  },
  {
    title: "Typing Centers",
    description: "Specialists in document processing and submissions.",
  },
  {
    title: "Government Service Centers",
    description: "Offering public administrative and regulatory services.",
  },
  {
    title: "Business Center Venues",
    description: "Facilities providing workspaces and business licensing services.",
  },
  {
    title: "Local Company Sponsors",
    description: "Supporting foreign businesses with local partnerships.",
  },
  {
    title: "Legal Translation Centers",
    description: "Certified translation of legal and official documents.",
  },
  {
    title: "Apostille & Attestation Centers",
    description: "Verifying and certifying international documents.",
  },
  {
    title: "Accountants & Auditors",
    description: "Managing financial compliance and auditing for businesses.",
  },
  {
    title: "Tourism Visa Providers",
    description: "Facilitating travel and visa services for tourists.",
  },
  {
    title: "Golden Visa Providers",
    description: "Specialized services for residency by investment programs.",
  },
  {
    title: "Lawyers & Legal Consultants",
    description: "Advising clients on legal matters and compliance.",
  },
]

const transformationMetrics = [
  {
    icon: CheckCircle2,
    title: "Efficiency Boost",
  },
  {
    icon: ArrowUp,
    title: "Revenue Growth",
  },
  {
    icon: ThumbsUp,
    title: "Client Satisfaction",
  },
  {
    icon: AlertCircle,
    title: "Reduced Errors",
  },
  {
    icon: Clock,
    title: "Time Savings",
  },
  {
    icon: FastForward,
    title: "Faster Quotations",
  },
  {
    icon: Wallet,
    title: "Improved Cash Flow",
  },
  {
    icon: RefreshCcw,
    title: "Team Productivity",
  },
  {
    icon: UserCheck,
    title: "Client Retention",
  },
]

export default function HomePage() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0065FF] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proteamo%20svg%20v1%20colors%20inverted-s0O9OvrK2ChTKBWvIkHtQLuG1KpTi1.svg"
                alt="ProTeamo"
                width={200}
                height={200}
                className="mx-auto mb-6"
                priority
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Revolutionize Your Service Business</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Unleash the power of seamless collaboration, effective performance, and client delight with our
              comprehensive service management platform
            </p>
            <Button size="lg" className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white" asChild>
              <a href="https://tally.so/r/wbrkG0" target="_blank" rel="noopener noreferrer">
                Request Demo
              </a>
            </Button>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Solution</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              ProTeamo is your all-in-one solution for service excellence. Here's how we transform your work:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                    <Icon className="w-10 h-10 text-[#0065FF] mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Who We Serve</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We service a wide range of clients, from solo service providers to large teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transforming Service Businesses Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Transforming Service Businesses</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              At ProTeamo, it's not merely about the features – we focus on outcomes. Here is the impact ProTeamo will
              have on your Business
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {transformationMetrics.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-[#0065FF] flex-shrink-0" />
                    <span className="text-lg font-medium">{item.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#FF6B00] text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Experience these benefits for yourself. Join the growing community of service professionals who are
              revolutionizing their businesses with ProTeamo.
            </p>
            <Button size="lg" className="bg-[#0065FF] hover:bg-[#0065FF]/90 text-white" asChild>
              <a href="https://tally.so/r/wbrkG0" target="_blank" rel="noopener noreferrer">
                Request Demo
              </a>
            </Button>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

