import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail,SquareCodeIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-surface to-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--primary)/0.03_1px,transparent_1px),linear-gradient(90deg,var(--primary)/0.03_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_100%)]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Falling Beams */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute w-1 bg-gradient-to-b from-primary via-accent to-transparent opacity-40"
          style={{
            left: `${15 + i * 15}%`,
            height: '100px',
            top: 0,
          }}
          animate={{
            y: [0, window.innerHeight + 200],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeIn',
          }}
        />
      ))}

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1
              className="mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              style={{ fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.2 }}
            >
              Software Engineer
            </motion.h1>

            <motion.p
              className="text-2xl text-foreground/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Building scalable web apps with clean UI, solid backend, and smooth animations

            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              I’m <span className='bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'>Afreen</span> — a software engineer who loves turning complex ideas into
              clean, performant web applications. I work across the stack using
              modern frameworks, strong fundamentals, and animations that actually
              serve a purpose.

            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { Icon: Github, href: 'https://github.com/Afreen4115', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/shaik-afreen-8ab792232/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:afreen4115@gmail.com', label: 'Email' },
                { Icon: SquareCodeIcon, href:'https://leetcode.com/u/rose_1921/',label:'Leetcode' }
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-foreground/5 backdrop-blur-sm p-4 rounded-lg border border-border hover:border-accent/50 transition-colors group">
                    <Icon className="w-6 h-6 text-accent animate-pulse drop-shadow-[0_0_8px_rgba(var(--accent),0.5)]" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a
                href="#portfolio"
                className="relative group px-8 py-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-accent/80 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-primary-foreground font-semibold">View My Work</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="relative group px-8 py-4 rounded-lg border border-border hover:border-foreground/40 transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-foreground font-semibold">Get In Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-50"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <ImageWithFallback
                src="./images/afreen-portfolio.png"
                alt="Professional Developer"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-foreground/10"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-foreground/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-32 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div> */}
      </motion.div>
    </section>
  );
}
