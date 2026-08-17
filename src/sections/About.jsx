import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Programming",
    description:
      "Proficient in data analysis languages such as SQL and Python, as well as web development frameworks. This allows me to create practical solutions for various projects that can be implemented on the web.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "As a web development teacher, I identify problems and develop solutions for students to improve their coding skills.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Coordinated with a team in my school's Environmental Council to educate the student body about sustainable living.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Developing efficient solutions to modern challenges such as creating a system for users to check the weather right in their Discord App.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              The transferrable skills that
              <span className="font-serif italic font-normal text-white"> build the future.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                As a student of Rotman Commerce in the University of Toronto and a 
                self-taught programmer for many years, 
                I am passionate in exploring how fields of finance and technology intersect.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to create efficient and sustainable solutions to modern-day financial challenges through the use of technology and innovation.
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};