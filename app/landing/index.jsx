import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EventPlanningSection from "./EventPlanningSection";
import EventPromotionSection from "./EventPromotionSection";
import VendorSearchSection from "./VendorSearchSection";
import CallToActionSection from "./CallToActionSection";

export default function CXTLandingPage() {
  const [isEventPro, setIsEventPro] = useState(true);

  return (
    <Layout title="ConnecXit - Welcome">
      <Helmet>
        <title>Event Planning Made Easy - ConnecXit</title>
        <meta
          name="description"
          content="Discover top event planners, venues, and vendors at ConnecXit. Simplify your event planning with our comprehensive resources. Join today and make your next event a success."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Container>
          <div className="py-8 md:py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Connect with Event Planners & Vendors
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                  Your one-stop platform for seamless event planning and collaboration
                </p>
                <div className="pt-2">
                  <Button
                    variant="secondary"
                    className="!bg-white !text-blue-600 !border-white hover:!bg-blue-50"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg lg:max-w-none">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/hero-image.jpg"
                    alt="Event Planning"
                    className="object-cover w-full h-full"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose ConnecXit?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to plan and execute successful events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Content Sections */}
      <main className="space-y-16 md:space-y-24 py-12 md:py-20">
        <Container>
          {/* Event Planning Section */}
          <section className="space-y-12">
            <EventPlanningSection 
              isEventPro={isEventPro} 
              setIsEventPro={setIsEventPro} 
            />
          </section>

          {/* Event Promotion Section */}
          <section className="space-y-12">
            <EventPromotionSection />
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span>Explore more </span>
                <span className="text-orange-500">event services</span>
                <span>.</span>
              </h2>
            </div>
          </section>

          {/* Vendor Search Section */}
          <section className="space-y-12">
            <VendorSearchSection />
          </section>
        </Container>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 md:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Planning Your Event?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of event planners and vendors on ConnecXit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Sign Up Now
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection />
    </Layout>
  );
}

// Feature data
const features = [
  {
    title: "Find Vendors",
    description: "Connect with trusted vendors for your events",
    icon: <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  },
  {
    title: "Plan Events",
    description: "Streamline your event planning process",
    icon: <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  },
  {
    title: "Collaborate",
    description: "Work together with team members and clients",
    icon: <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  }
];
