import { Code, TrendingUp, Shield, Cloud, Database, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Services Section */}
      <section className="pt-32 pb-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Services & Products
            </h1>
            <p className="text-xl text-neutral max-w-3xl mx-auto">
              We provide comprehensive business solutions designed to optimize operations, enhance productivity, and accelerate growth across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Code className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Technology Solutions</h3>
                <p className="text-neutral mb-6">
                  Custom software development, cloud infrastructure, and digital transformation services tailored to your business needs.
                </p>
                <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <TrendingUp className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Business Consulting</h3>
                <p className="text-neutral mb-6">
                  Strategic planning, process optimization, and performance improvement consulting to drive sustainable growth.
                </p>
                <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Shield className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-neutral mb-6">
                  Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.
                </p>
                <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Technology Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Modern Technology Stack</h2>
              <p className="text-neutral text-lg mb-8">
                We leverage cutting-edge technologies and industry best practices to deliver robust, scalable solutions that meet the evolving needs of modern businesses.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Cloud className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cloud Services</h4>
                    <p className="text-sm text-neutral">AWS, Azure, GCP</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Database className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Data Analytics</h4>
                    <p className="text-sm text-neutral">AI/ML Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://pixabay.com/get/g9e9c509b78a00727c843b1beb60295c23834c47629f4150137b21490584bffb811010187d5ee9135c115454a5838480b7aed7b1130347caec5ba9ba5887436e5_1280.jpg"
                alt="Modern data center with servers"
                className="rounded-lg shadow-lg w-full h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Financial charts and data visualization"
                className="rounded-lg shadow-lg w-full h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Modern workplace with multiple monitors"
                className="rounded-lg shadow-lg w-full h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Digital transformation concept with technology"
                className="rounded-lg shadow-lg w-full h-40 object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
