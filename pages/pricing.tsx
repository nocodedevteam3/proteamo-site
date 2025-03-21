"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

// Define pricing plans for service providers
const serviceProviderPlans = [
  {
    name: "Flex Plan",
    description: "Pay As You Go",
    features: [
      { name: "50 Starter Credits", included: true },
      { name: "Core App", included: true },
      { name: "Sales App", included: true },
      { name: "Client App", included: true },
      { name: "Reports App (30 Day Free Trial)", included: false },
      { name: "Accounts App (30 Day Free Trial)", included: false },
      { name: "Public Directory Listing (30 Day Free Trial)", included: false },
    ],
    cta: "Get Started",
    ctaLink: "https://tally.so/r/31vQyM",
  },
  {
    name: "Fix Plan",
    description: "High Volume Users",
    features: [
      { name: "100 Starter Credits", included: true },
      { name: "Core App", included: true },
      { name: "Sales App", included: true },
      { name: "Client App", included: true },
      { name: "Reports App", included: true },
      { name: "Accounts App", included: true },
      { name: "Public Directory Listing", included: true },
    ],
    cta: "Get Started",
    ctaLink: "https://tally.so/r/mOYx9K",
  },
  {
    name: "Enterprise Plan",
    description: "White Label",
    features: [
      { name: "Custom domain hosting", included: true },
      { name: "Tailored feature selection", included: true },
      { name: "Priority client portal", included: true },
      { name: "No Directory connection", included: true },
      { name: "Pricing based on modules", included: true },
    ],
    cta: "Get Started",
    ctaLink: "https://tally.so/r/n9vA04",
  },
]

// Define pricing plans for clients
const clientPlans = [
  {
    name: "Personal Pro",
    description: "Individual Plan",
    features: [
      { name: "Single profile management", included: true },
      { name: "Client App (all features)", included: true },
      { name: "Quotations", included: true },
      { name: "Jobs tracking", included: true },
      { name: "Calendar integration", included: true },
      { name: "Accounts overview", included: true },
      { name: "Document management", included: true },
      { name: "Marketplace access", included: true },
      { name: "No monthly fixed charges", included: true },
    ],
    cta: "Get Started",
    ctaLink: "https://tally.so/r/wbrkG0",
  },
  {
    name: "Business & Family",
    description: "Multi-Profile Plan",
    features: [
      { name: 'Everything in "Personal Pro" Plan', included: true },
      { name: "Manage multiple profiles", included: true },
      { name: "Pricing based on modules", included: true },
    ],
    cta: "Get Started",
    ctaLink: "https://tally.so/r/mOYxxk",
  },
]

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"service-providers" | "clients">("service-providers")
  const plans = activeTab === "service-providers" ? serviceProviderPlans : clientPlans

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0065FF] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Flexible Pricing for All Businesses</h1>
          </div>
        </section>

        <section className="pt-8">
          <div className="container mx-auto px-4">
            <p className="text-gray-600 mb-4">At ProTeamo, we believe in pricing that scales with your success.</p>
            <p className="text-gray-600 mb-10">
              Our usage-based model ensures you only pay for what you use, while our tiered structure rewards
              high-volume users with even better value.
            </p>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setActiveTab("service-providers")}
                  className={`px-6 py-2 rounded-full text-sm font-medium ${
                    activeTab === "service-providers" ? "bg-[#333333] text-white" : "text-gray-700 hover:text-[#0065FF]"
                  }`}
                >
                  Service Providers
                </button>
                <button
                  onClick={() => setActiveTab("clients")}
                  className={`px-6 py-2 rounded-full text-sm font-medium ${
                    activeTab === "clients" ? "bg-[#333333] text-white" : "text-gray-700 hover:text-[#0065FF]"
                  }`}
                >
                  Clients
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-24 -mt-2">
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-${activeTab === "clients" ? "2" : "3"} gap-8`}>
              {plans.map((plan, index) => (
                <Card key={index} className="border-0 shadow-sm bg-gray-100">
                  <CardHeader className="pb-4">
                    <p className="text-sm text-gray-500 mb-1">{plan.description}</p>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span
                            className={`mr-2 mt-1 flex-shrink-0 rounded-full p-1 ${
                              feature.included ? "bg-[#0065FF] text-white" : "bg-gray-200 text-gray-400"
                            }`}
                          >
                            <Check className="h-3 w-3" />
                          </span>
                          <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-[#0065FF] hover:bg-[#0065FF]/90 text-white">
                      <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                        {plan.cta}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
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

