import { Clock, FileCheck, BookOpen, FileText, MessageSquare, Bell, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const clientAppFeatures = [
  {
    icon: Clock,
    title: "Real-time Job Tracking",
    description:
      "Give your clients peace of mind with real-time updates on their jobs. From simple tasks to complex jobs, clients can track progress at any time.",
  },
  {
    icon: FileCheck,
    title: "Quotation Approval",
    description: "Review and approve or request changes to quotations directly through the app.",
  },
  {
    icon: BookOpen,
    title: "Service Directory Access",
    description:
      "Our searchable service directory lets clients explore new offerings from their service providers. Browse through the app. Search and view services offered by providers, including costs and duration.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Access and manage all job-related documents and tasks from a centralized location.",
  },
  {
    icon: MessageSquare,
    title: "Communication Tools",
    description:
      "Never collaborate and prevent miscommunications. Clients can view shared documents, track task progress, and send requests.",
  },
  {
    icon: Bell,
    title: "Personalized Reminders",
    description: "Detailed reminders for past jobs and upcoming deadlines, ensuring timely actions.",
  },
]

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-16 md:mt-20">
        {/* Hero Section */}
        <section className="bg-[#0065FF] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Transforming Service Businesses</h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">for Clients</h2>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-left">
              <p className="text-gray-600 mb-4">
                The Client App empowers clients with real-time access to their job statuses, document sharing, and
                direct communication with service providers. It enhances transparency, boosts client satisfaction, and
                fosters stronger business relationships by providing clients complete control and visibility into their
                engagement.
              </p>
              <p className="text-gray-600">
                Designed to enhance the client experience, the Client App offers a user-friendly interface for clients
                to track their projects, manage documents, and communicate directly with service providers. Clients can
                review and approve quotations, discover new services offered by their collaborative service team, all
                within a single, intuitive platform.
              </p>
            </div>
          </div>
        </section>

        {/* Client App Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <LayoutDashboard className="text-[#0065FF] mr-2 w-6 h-6" />
              <a
                href="https://client.proteamo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0065FF] transition-colors"
              >
                Client App
              </a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {clientAppFeatures.map((feature, index) => {
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

