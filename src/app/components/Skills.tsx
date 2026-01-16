import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import React from 'react';


const skillCategories = [
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'React.js / Next.js', level: 95, color: 'from-primary to-primary' },
      { name: 'TypeScript / JS', level: 92, color: 'from-primary/80 to-accent' },
      { name: 'Tailwind / CSS3', level: 90, color: 'from-accent to-primary' },
      { name: 'Redux / Angular.js', level: 85, color: 'from-primary to-accent' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'ASP.NET (C#) / Node.js', level: 88, color: 'from-accent to-primary' },
      { name: 'PostgreSQL / MySQL', level: 85, color: 'from-primary to-accent' },
      { name: 'Redis / MongoDB', level: 82, color: 'from-primary/80 to-accent' },
      { name: 'REST / GraphQL', level: 90, color: 'from-primary to-accent' },
    ],
  },
  {
    category: 'DevOps & AI Tools',
    skills: [
      { name: 'AWS / Docker', level: 80, color: 'from-primary/80 to-accent' },
      { name: 'Jenkins / CI/CD', level: 85, color: 'from-primary to-primary/90' },
      { name: 'LLM Prompt Tuning', level: 93, color: 'from-primary to-accent' },
      { name: 'Kafka / RabbitMQ', level: 82, color: 'from-primary to-primary' },
    ],
  },
];

function SkillBar({ skill, index, isInView }: { skill: any; index: number; isInView: boolean }) {
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let current = 0;
        const interval = setInterval(() => {
          current += 2;
          if (current >= skill.level) {
            setDisplayLevel(skill.level);
            clearInterval(interval);
          } else {
            setDisplayLevel(current);
          }
        }, 20);
        return () => clearInterval(interval);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-muted-foreground font-mono text-sm">{displayLevel}%</span>
      </div>
      <div className="relative h-3 bg-foreground/5 rounded-full overflow-hidden backdrop-blur-sm border border-border">
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${displayLevel}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-foreground/20"
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillCircle({ skill, index, isInView }: { skill: any; index: number; isInView: boolean }) {
  const [displayLevel, setDisplayLevel] = useState(0);
  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (displayLevel / 100) * circumference;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let current = 0;
        const interval = setInterval(() => {
          current += 2;
          if (current >= skill.level) {
            setDisplayLevel(skill.level);
            clearInterval(interval);
          } else {
            setDisplayLevel(current);
          }
        }, 20);
        return () => clearInterval(interval);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-40 h-40 mb-4">
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="var(--foreground)"
            strokeOpacity="0.05"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            stroke={`url(#gradient-${index})`}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? offset : circumference }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="50%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">{displayLevel}%</div>
          </div>
        </div>
      </div>
      <span className="text-foreground font-medium text-center">{skill.name}</span>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-surface to-background overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            style={{ fontSize: '3.5rem', fontWeight: 700 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A comprehensive toolkit of modern technologies and design tools
          </motion.p>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-surface/5 to-surface/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                {category.category}
              </h3>
              {category.skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Featured Skills as Circles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-center text-foreground mb-12">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {[
              { name: 'React Engine', level: 95 },
              { name: 'Backend API', level: 88 },
              { name: 'AI Engineering', level: 93 },
              { name: 'System Design', level: 85 },
            ].map((skill, index) => (
              <SkillCircle key={skill.name} skill={skill} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
