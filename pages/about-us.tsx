import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
      <section className="bg-[#0065FF] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Transforming Service Businesses</h1>
          </div>
        </section>

        <div className="flex flex-col items-center">
          {/* Content Sections */}
          <div className="w-full max-w-3xl mx-auto px-4 space-y-12 mb-16">
            {/* Mission Section */}
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-[#0065FF]">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                At ProTeamo, we're on a mission to revolutionize how service businesses operate in the GCC region. Born
                from a deep understanding of the unique challenges faced by service providers in our complex regulatory
                environment, ProTeamo is more than just a software platform - it's a catalyst for change.
              </p>
            </section>

            {/* Story Section */}
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-[#0065FF]">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">
                We are a proud product Made in UAE by a 25-year-old company. Our journey began with a simple, yet
                powerful question: How can we make life easier for the hardworking service professionals who keep our
                economy moving? The answer is ProTeamo - a comprehensive, user-friendly platform that brings together
                all the tools you need to manage your business, from scheduling to invoicing.
              </p>
            </section>

            {/* Solution Section */}
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-[#0065FF]">Our Solution</h2>
              <p className="text-gray-700 leading-relaxed">
                ProTeamo is the ultimate platform for service agents, teams, and independent professionals executing
                jobs on behalf of clients. We empower your team, delight your clients, and help grow your business with
                our all-in-one project management solution.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Lead by a team of industry veterans and tech innovators, we're committed to continually evolving our
                platform to meet the changing needs of our users. We understand the unique challenges of the GCC market
                and are dedicated to providing innovative solutions that help businesses thrive in this dynamic
                environment.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="w-full bg-[#FF6B00] text-white py-12 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6">
                Experience these benefits for yourself. Join the growing community of service professionals who are
                revolutionizing their businesses with ProTeamo.
              </p>
              <Button className="bg-[#0065FF] text-white hover:bg-[#0065FF]/90" size="lg" asChild>
                <a href="https://tally.so/r/wbrkG0" target="_blank" rel="noopener noreferrer">
                  Request Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

