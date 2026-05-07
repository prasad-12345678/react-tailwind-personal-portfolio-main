import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, maintainable, and scalable code for modern web applications.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing applications for speed, efficiency, and smooth user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Ready to Working with teams to build efficient web applications and deliver quality software solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Constantly exploring new technologies and improving my skills to build better web applications.",
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
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building scalable web applications,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one feature at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate Full-Stack Developer with a strong foundation in building modern web applications. 
                My journey into development started with a curiosity about how web applications work, which led me to explore 
                full-stack technologies and create real-world projects.
              </p>
              <p>
                I specialize in the MERN stack, working with React, Node.js, Express, and MongoDB to develop scalable and 
                efficient applications. I also have experience with Python and Django for backend development, 
                along with building REST APIs and implementing secure authentication systems.
              </p>
              <p>
                Through my projects and internship experience, I’ve built full-stack applications such as a 
                social media platform and an e-commerce system. I enjoy solving problems, learning new technologies, 
                and continuously improving my development skills to build impactful software.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build scalable and reliable web applications that solve real-world problems 
                while continuously learning and improving as a developer."
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
