import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code, Cpu, Globe, Database } from "lucide-react";
import React from "react";

const timeline = [
  {
    year: "Oct 2024 - Present",
    title: "Software Development Engineer - I",
    company: "RIG Enterprise Application",
    description:
      "Spearheaded the UI architecture(React.js,Redux) for RecCopilot, building mission-critical modules for Subscriptions, Real-time Notifications, and Analytics. Successfully transitioned into full-stack responsibilities by optimizing ASP.NET REST APIs by 25% and engineering LLM prompt strategies that improved candidate evaluation accuracy by 35%.",
  },
  {
    year: "May 2024 - Aug 2024",
    title: "Software Engineer Intern",
    company: "Anuta Networks",
    description:
      "Optimized Angular UI with lazy-loaded modules, reducing bundle size by 12% and improving responsiveness by 22%. Built parallel E2E Selenium tests in Jenkins, cutting deployment failures by 20%.",
  },
  {
    year: "2020 - 2024",
    title: "B.Tech in Computer Science",
    company: "IIIT Sricity",
    description:
      "Specialized in AI and DSA, solving 700+ LeetCode challenges. Led campus clubs, mentored 20+ juniors in DSA workshops, and organized a Blood Donation Camp for 70+ donors.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-background to-surface overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(var(--primary)/0.1_1px,transparent_1px),linear-gradient(90deg,var(--primary)/0.1_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-5xl font-bold mb-4">
            About Me
          </h2>
        </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 space-y-12 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {/* AI Innovation */}
              <h3 className="text-3xl font-bold mb-14 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
                As a Software Development Engineer, I hold expertise in Full-Stack Development
              </h3>
              <div>
                
                <p className="text-muted-foreground leading-relaxed">
                  At <span className="text-primary">RIG Enterprise</span>, I built the UI for RecCopilot and optimized
                  ASP.NET APIs. By fine-tuning LLM prompts, I boosted evaluation accuracy by
                  <span className="text-foreground font-medium"> 35%</span> and increased recruiter efficiency
                  by <span className="text-foreground font-medium"> 30%</span>.
                </p>
              </div>

              {/* Distributed Systems */}
              <div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Architected <span className="text-primary">HireHub</span>, using <span className="text-foreground">Kafka</span> and
                  <span className="text-foreground"> Redis</span> to handle high-concurrency notifications.
                  Integrated Gemini AI for automated analysis, improving system throughput by
                  <span className="text-foreground font-medium"> 40%</span>.
                </p>
              </div>

              {/* Real-Time Systems */}
              <div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Developed <span className="text-primary">ChatterBox</span> using Socket.io and RabbitMQ.
                  Achieved a <span className="text-foreground font-medium">35% latency reduction</span> and
                  ensured 99% uptime on AWS through strategic rate-limiting.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              Career Journey
            </h3>

            <div
              className="relative border-l-2 border-border ml-3 space-y-8
            
            "
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative pl-8"
                >
                  <div
                    className="absolute -left-[9px] top-6 w-4 h-4 rounded-full z-10 bg-primary ring-4 ring-primary/30
                  bg-gradient-to-b 
    from-transparent 
    via-primary/60 
    to-transparent
                  "
                  />

                  <div className="group relative bg-card/50 border border-border p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <span className="text-sm font-bold text-primary tracking-wider uppercase mb-2 block">
                      {item.year}
                    </span>

                    <h4 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h4>

                    {/* Company */}
                    <p className="text-muted-foreground text-sm font-medium mb-4">
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
