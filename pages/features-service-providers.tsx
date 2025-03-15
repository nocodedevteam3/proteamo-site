import {
  Users,
  Briefcase,
  BarChart2,
  UserPlus,
  ArrowRightLeft,
  Network,
  BookUser,
  FileText,
  Clock,
  Copy,
  MessageSquare,
  TrendingUp,
  Receipt,
  DollarSign,
  BarChart,
  ArrowLeftRight,
  LayoutDashboard,
  Landmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const coreAppFeatures = [
  {
    icon: Briefcase,
    title: "Seamless Job Management",
    description:
      "From simple tasks to intricate projects, manage it all in one place. Collaborate seamlessly, assign tasks effortlessly, and never miss a deadline again.",
  },
  {
    icon: Users,
    title: "Client Management",
    description:
      "Add and maintain client information, manage ongoing communications, and handle multiple client companies.",
  },
  {
    icon: UserPlus,
    title: "Task Allocation",
    description: "Efficiently assign tasks to team members, track progress, and manage job-specific details.",
  },
  {
    icon: ArrowRightLeft,
    title: "Quotation to Job Conversion",
    description:
      "Seamlessly convert quotations into full jobs, integrating client requests and feedback into the workflow.",
  },
  {
    icon: Network,
    title: "Network Co-ordination",
    description: "Build a network of trusted external teams for seamless collaboration on complex projects.",
  },
  {
    icon: BookUser,
    title: "Public Directory",
    description:
      "Showcase your services in our public directory. Let clients find you and request your expertise with just a few clicks.",
  },
]

const salesAppFeatures = [
  {
    icon: FileText,
    title: "Smart Quotation System",
    description: "Create professional, detailed quotations in minutes reusing your template.",
  },
  {
    icon: ArrowRightLeft,
    title: "Job Conversion",
    description: "Convert approved quotations into full jobs with all associated details.",
  },
  {
    icon: Copy,
    title: "Reusable Templates",
    description:
      "Create task groups and document lists that you can reuse across multiple jobs and quotations to save time and ensure consistency.",
  },
  {
    icon: MessageSquare,
    title: "Inquiry Management",
    description:
      "Never miss an opportunity. Receive and respond to client inquiries directly in the app. Convert promising leads into quotes or jobs instantly.",
  },
  {
    icon: Clock,
    title: "Proactive Reminder System",
    description:
      "Stay ahead of renewals and recurring jobs. Set up smart reminders to reach out to clients at just the right time, ensuring a steady stream of repeat business.",
  },
]

const reportAppFeatures = [
  {
    icon: BarChart2,
    title: "Job and Task Reporting",
    description: "Track and analyze data from both simple and full jobs, including all related tasks.",
  },
  {
    icon: TrendingUp,
    title: "Quotation and Sales Reports",
    description: "Review the effectiveness of sales efforts with detailed reports on quotations and conversions.",
  },
  {
    icon: BarChart2,
    title: "Team Performance Analysis",
    description: "Assess team and individual performance metrics to optimize productivity and job allocation.",
  },
]

const accountAppFeatures = [
  {
    icon: Receipt,
    title: "Transaction Management",
    description: "Keep a clear record of every financial interaction. Track income, expenses, bills, and receipts.",
  },
  {
    icon: FileText,
    title: "Bill and Receipt Processing",
    description: "Manage billing documents and receipts efficiently, maintaining accurate financial records.",
  },
  {
    icon: DollarSign,
    title: "Expense Reporting",
    description: "Monitor and analyze expenses at both team and individual levels to control costs.",
  },
  {
    icon: BarChart,
    title: "Multi-level Financial Overview",
    description:
      "Get the big picture or dive into the details. View financial data at the job level, team level, or across your entire business.",
  },
  {
    icon: ArrowLeftRight,
    title: "Inter-team Financial Coordination",
    description: "Handle transactions between different service provider teams engaged in joint projects.",
  },
]

export default function ServiceProvidersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-16 md:mt-20">
        {/* Hero Section */}
        <section className="bg-[#0065FF] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Transforming Service Business</h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">For Service Providers</h2>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-left">
              <p className="text-gray-600 mb-4">
                ProTeamo offers a comprehensive suite of applications tailored for service providers, enhancing
                operational efficiency, client relations, and financial management.
              </p>
              <p className="text-gray-600 mb-4">
                The suite includes the Core App for overall management, Sales App for client engagement, Reports App for
                data-driven insights, and Accounts App for financial tracking, all integrated to streamline operations
                and boost productivity.
              </p>
              <p className="text-gray-600">
                By integrating job management, sales, reporting, and accounting functionalities, ProTeamo enables
                service professionals to focus on what they do best - providing outstanding service to their clients.
              </p>
            </div>
          </div>
        </section>

        {/* Core App Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <LayoutDashboard className="text-[#0065FF] mr-2 w-6 h-6" />
              <a
                href="https://core.proteamo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0065FF] transition-colors"
              >
                Core App
              </a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {coreAppFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="p-6 bg-white rounded-lg shadow-sm border">
                    <Icon className="w-6 h-6 text-[#0065FF] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Sales App Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <TrendingUp className="text-[#0065FF] mr-2 w-6 h-6" />
              <a
                href="https://sales.proteamo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0065FF] transition-colors"
              >
                Sales App
              </a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {salesAppFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="p-6 bg-white rounded-lg shadow-sm border">
                    <Icon className="w-6 h-6 text-[#0065FF] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Report App Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <BarChart2 className="text-[#0065FF] mr-2 w-6 h-6" />
              <a
                href="https://reports.proteamo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0065FF] transition-colors"
              >
                Reports App
              </a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {reportAppFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="p-6 bg-white rounded-lg shadow-sm border">
                    <Icon className="w-6 h-6 text-[#0065FF] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Account App Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Landmark className="text-[#0065FF] mr-2 w-6 h-6" />
              <a
                href="https://accounts.proteamo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0065FF] transition-colors"
              >
                Accounts App
              </a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {accountAppFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="p-6 bg-white rounded-lg shadow-sm border">
                    <Icon className="w-6 h-6 text-[#0065FF] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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
      <Footer />
    </div>
  )
}

