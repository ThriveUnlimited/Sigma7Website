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
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-blue-100 mb-6 backdrop-blur-sm">🚀 Consulting and Products Since 2017</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Future-Ready
                </span>
                <br />
                Business Solutions
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                We don't just solve problems – we <span className="font-semibold text-white">unlock potential</span>. 
                From cutting-edge technology to strategic insights, we're your partner in digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Start Your Journey
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    Our Story
                  </Button>
                </Link>
              </div>
              
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Modern corporate office building"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We <span className="text-primary">Excel</span> At
            </h2>
            <p className="text-neutral text-lg">Three core areas where we make the difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Technology</h3>
              <p className="text-neutral">
                Custom solutions and digital transformation that actually work
              </p>
              <div className="mt-4 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">Consulting</h3>
              <p className="text-neutral">
                Strategic insights that turn challenges into opportunities
              </p>
              <div className="mt-4 h-1 bg-gradient-to-r from-accent to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition-colors">Security</h3>
              <p className="text-neutral">
                Protection that lets you sleep soundly at night
              </p>
              <div className="mt-4 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary-dark hover:to-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
