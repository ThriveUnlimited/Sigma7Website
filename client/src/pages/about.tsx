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
        <div className="max-w-4xl mx-auto px-9">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sigma7 Group</h1>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              We transform businesses through innovative technology solutions and strategic consulting.
            </p>
          </div>

          {/* Founder/Team Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Leadership</h2>
              <div className="space-y-4 text-neutral leading-relaxed">
                <p>
                  Founded in 2017, Sigma7 Group emerged from a vision to bridge the gap between cutting-edge technology and practical business solutions. Our leadership team brings together decades of experience across enterprise consulting, software development, and strategic business transformation.
                </p>
                <p>
                  What sets us apart is our commitment to understanding each client's unique challenges and crafting solutions that not only solve immediate problems but position businesses for long-term success in an ever-evolving digital landscape.
                </p>
                <p>
                  We believe that the best technology solutions are those that empower people and enhance human potential. This philosophy drives everything we do, from our initial client consultations to the final implementation of our solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-1a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <p className="text-neutral font-medium">Team Photo</p>
                  <p className="text-sm text-neutral/70">Coming Soon</p>
                </div>
              </div>
            </div>
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
