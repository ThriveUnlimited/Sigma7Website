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
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Professional solutions designed to optimize operations and accelerate growth.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {/* Service 1 */}
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-center mb-3">
                <Code className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Technology Solutions</h3>
              </div>
              <p className="text-neutral">
                Custom software development, cloud infrastructure, and digital transformation services.
              </p>
            </div>

            {/* Service 2 */}
            <div className="border-l-4 border-accent pl-6">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-xl font-semibold">Business Consulting</h3>
              </div>
              <p className="text-neutral">
                Strategic planning, process optimization, and performance improvement consulting.
              </p>
            </div>

            {/* Service 3 */}
            <div className="border-l-4 border-primary-dark pl-6">
              <div className="flex items-center mb-3">
                <Shield className="h-8 w-8 text-primary-dark mr-3" />
                <h3 className="text-xl font-semibold">Documentation & Support</h3>
              </div>
              <p className="text-neutral">
                No product is complete without thorough documentation nor without a solid support plan.
              </p>
            </div>
          </div>

      
        </div>
      </section>

      <Footer />
    </div>
  );
}
