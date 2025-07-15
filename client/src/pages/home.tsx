import { Link } from "wouter";
import { ArrowRight, Code, TrendingUp, Shield } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional Business Solutions for Modern Enterprises
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Sigma7 Group delivers innovative technology solutions and strategic consulting services that drive business growth and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-50">
                    Learn More
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern corporate office building"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-neutral max-w-3xl mx-auto">
              Comprehensive business solutions designed to optimize operations and accelerate growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Code className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Technology Solutions</h3>
                <p className="text-neutral mb-6">
                  Custom software development, cloud infrastructure, and digital transformation services.
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <TrendingUp className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Business Consulting</h3>
                <p className="text-neutral mb-6">
                  Strategic planning, process optimization, and performance improvement consulting.
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Shield className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-neutral mb-6">
                  Comprehensive security solutions to protect your digital assets and ensure compliance.
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
