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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sigma7 Group</h1>
              <p className="text-lg text-neutral mb-6">
                Founded with a vision to transform businesses through innovative technology solutions, Sigma7 Group has been at the forefront of digital transformation for over a decade.
              </p>
              <p className="text-lg text-neutral mb-8">
                Our team of expert consultants and technologists work collaboratively with clients to understand their unique challenges and deliver tailored solutions that drive measurable results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="text-center p-6 section-bg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-neutral">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 section-bg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-neutral">Enterprise Clients</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Professional business team in a meeting"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Team & Values */}
          <div className="section-bg rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-neutral text-lg max-w-2xl mx-auto">
                We believe in delivering excellence through innovation, integrity, and unwavering commitment to client success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-neutral">
                  Constantly pushing boundaries to deliver cutting-edge solutions that drive business transformation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-neutral">
                  Building trust through transparent communication, ethical practices, and reliable delivery.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-neutral">
                  Committed to delivering superior quality in every project and exceeding client expectations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Modern office workspace with collaborative areas"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Professional workspace with team collaboration"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Creative workspace with modern design"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
