import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Download, FileText, ExternalLink, Maximize2 } from 'lucide-react';
import React from 'react';

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isLoading, setIsLoading] = useState(true);

  // Path to the file in your 'public' folder
  const resumeUrl = "/images/afreen_resume.pdf";

  return (
    <section id="resume" className="relative py-32 bg-gradient-to-b from-surface to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(var(--primary)/0.1_1px,transparent_1px),linear-gradient(90deg,var(--primary)/0.1_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

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
            Resume
          </motion.h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Download Button - Converted to anchor tag for functionality */}
            <motion.a
              href={resumeUrl}
              download="Afreen-Resume.pdf" // This attribute triggers the download
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download PDF
            </motion.a>

            {/* View in New Tab Button (Useful for mobile users) */}
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              View Full Screen
            </motion.a>
          </div>
        </motion.div>

        {/* Interactive Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <FileText className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">Preview</h3>
            </div>
          </div>

          {/* PDF Container */}
          <div className="relative w-full aspect-[8.5/11] bg-gray-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl">

            {/* Loading Skeleton (visible while PDF loads) */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse z-0">
                <FileText className="w-16 h-16 text-gray-700" />
              </div>
            )}

            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full relative z-10"
              title="Resume Preview"
              onLoad={() => setIsLoading(false)}
            />

            {/* Mobile overlay warning (Optional: iOS often handles iframes poorly) */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 text-center md:hidden z-20">
              <p className="text-sm">Tap "View Full Screen" above for best mobile experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}