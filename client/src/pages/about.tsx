import { Lightbulb, Handshake, Trophy } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* About Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sigma7 Group</h1>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              We transform businesses through innovative technology solutions and strategic consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Innovation</h3>
              <p className="text-neutral text-sm">
                Cutting-edge solutions that drive transformation
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-white h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Integrity</h3>
              <p className="text-neutral text-sm">
                Transparent communication and ethical practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-white h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Excellence</h3>
              <p className="text-neutral text-sm">
                Superior quality in every project
              </p>
            </div>
          </div>

          <div className="text-center section-bg rounded-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-neutral">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-neutral">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
