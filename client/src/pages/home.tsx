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
                Professional Business Solutions
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Technology consulting and strategic solutions for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-50">
                    Get Started
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary"
                  >
                    Learn More
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
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-primary mb-4">
                <Code className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Technology</h3>
              <p className="text-neutral">
                Custom solutions and digital transformation
              </p>
            </div>

            <div className="text-center">
              <div className="text-primary mb-4">
                <TrendingUp className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Consulting</h3>
              <p className="text-neutral">
                Strategic planning and business optimization
              </p>
            </div>

            <div className="text-center">
              <div className="text-primary mb-4">
                <Shield className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Security</h3>
              <p className="text-neutral">
                Cybersecurity and compliance solutions
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
