import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import React from 'react';
import emailjs from '@emailjs/browser';

// --- 1. Updated Personal Information ---
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'afreen4115@gmail.com',
    link: 'mailto:afreen4115@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 8019617499',
    link: 'tel:+918019617499',
  },
  {
    icon: MapPin,
    title: 'Location',
    // Update this to your actual city if needed
    value: 'India',
    link: '#',
  },
];

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/Afreen4115',
    color: 'from-primary to-primary',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shaik-afreen-8ab792232/',
    color: 'from-primary to-primary',
  },
];

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const SERVICE_ID = "service_zdzsk59";
    const TEMPLATE_ID = "template_401gp05";
    const PUBLIC_KEY = "D1Tnj88vtJM_LWWIO";

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setIsSubmitting(false);
        setFormData({
          user_name: "",
          user_email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setStatusMessage("Failed to send message. Please try again.");
        setIsSubmitting(false);
      });
  }


  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-surface to-background overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
            className="mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            style={{ fontSize: '3.5rem', fontWeight: 700 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Have a project in mind or want to collaborate? Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-surface/5 to-surface/[0.02] backdrop-blur-sm rounded-xl border border-border hover:border-foreground/20 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-border group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{item.title}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="relative group overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="bg-gradient-to-br from-surface/5 to-surface/[0.02] backdrop-blur-sm rounded-xl p-6 border border-border hover:border-foreground/20 transition-all">
                      <social.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors mb-3" />
                      <p className="text-foreground font-medium">{social.name}</p>
                    </div>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-xl`}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div ref={ref} className="max-w-3xl mx-auto px-6">
              

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 bg-card/60 backdrop-blur border border-border p-8 rounded-2xl"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-background border border-border"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-background border border-border"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-background border border-border"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-background border border-border resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={18} />}
                </button>

                {statusMessage && (
                  <p
                    className={`text-center ${statusMessage.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                      }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}