import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Facial Recognition',
      description: 'Real-time face recognition pipeline for staff identification and access control. Built with modern CV techniques for accurate and fast inference.',
      type: 'Freelance (1 month)',
      metrics: '95%+ accuracy | <50ms latency',
      tech: ['Face Detection', 'Face Embeddings', 'Real-time Inference', 'Edge Deployment'],
      github: 'https://github.com/Rohith2006/Facial-Recognition',
    },
    {
      title: 'Semantic Mapping',
      description: 'Fast semantic map generation for robotics navigation and scene understanding. Optimized for edge devices with minimal computational overhead.',
      type: 'Freelance (1 week)',
      metrics: 'Real-time | Edge optimized',
      tech: ['Semantic Segmentation', 'SLAM', 'Edge Optimization', 'Robotics'],
      github: 'https://github.com/Rohith2006/sem-map',
    },
  ];

  const skills = {
    'ML / Computer Vision': ['Object Detection', 'MOT', 'Face Embeddings', 'Re-ID', 'Edge Inference', 'Real-time CV', 'Semantic Segmentation'],
    'Systems & Backend': ['GStreamer', 'FFmpeg', 'RTSP', 'NVIDIA Jetson', 'TensorRT', 'Edge Systems', 'CUDA'],
    'Tools & Infra': ['Linux', 'Python', 'OpenCV', 'ONNX', 'Git', 'Docker', 'C++'],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" }
    })
  };

  return (
    <main className="bg-black text-white font-sans antialiased overflow-x-hidden relative">
      {/* Subtle parallax background */}
      <motion.div 
        style={{ y: scrollY * 0.3 }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-indigo-900/10 via-transparent to-pink-900/10"></div>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <motion.a 
            href="#" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            RT
          </motion.a>
          <div className="flex gap-8">
            <motion.a 
              href="#projects"
              className="text-gray-400 hover:text-indigo-400 transition text-sm font-bold uppercase tracking-wider"
              whileHover={{ scale: 1.05, color: '#a78bfa' }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#contact"
              className="text-gray-400 hover:text-indigo-400 transition text-sm font-bold uppercase tracking-wider"
              whileHover={{ scale: 1.05, color: '#a78bfa' }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto min-h-screen flex items-center justify-center px-8 py-32 relative">
        {/* Subtle background elements */}
        <motion.div 
          style={{ y: scrollY * 0.4 }}
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>
        <motion.div 
          style={{ y: scrollY * -0.2 }}
          className="absolute bottom-20 right-10 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>

        <div className="flex flex-col items-center gap-12 relative z-10">
          {/* Profile Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ y: scrollY * -0.2 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-indigo-500/50 shadow-2xl bg-gradient-to-br from-gray-900 to-black"
            >
              <img 
                src="/profile1.png" 
                alt="Rohith" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ y: scrollY * -0.15 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-8xl font-black text-white mb-4 leading-tight">
              Rohith
              <br />
              Thirunagari
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-medium">
              Computer Vision Engineer • Edge Systems • Real-time Inference
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-6"
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-lg uppercase tracking-wide transition"
            >
              View Work
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.08, borderColor: "#6366f1" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-gray-600 text-white font-bold rounded-lg text-lg uppercase tracking-wide transition"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="mt-20 text-gray-500 text-sm font-mono"
          >
            ↓ SCROLL TO EXPLORE
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-32 px-8 border-t border-gray-800/50 relative overflow-hidden">
        <motion.div 
          style={{ y: scrollY * 0.25 }}
          className="absolute top-20 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center relative z-10"
        >
          <motion.div variants={fadeInUp} custom={0}>
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-white leading-tight">About</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I build production-grade AI and computer vision systems optimized for real-world constraints. Specializing in <span className="text-indigo-400 font-bold">edge deployment, real-time inference, and systems optimization</span> on resource-constrained hardware.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience spans retail analytics, robotics navigation, and custom ML pipelines. Focused on accuracy vs. latency trade-offs, thermal management, and achieving high performance on edge devices.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            custom={1}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 border border-gray-800 hover:border-indigo-500/50 transition-all"
          >
            <p className="text-gray-400 font-bold mb-8 text-sm uppercase tracking-widest">Key Focus Areas</p>
            <ul className="space-y-4">
              {['Real-time Video Inference', 'Edge Device Optimization', 'Model Quantization (INT8/FP16)', 'Stream Processing Pipelines', 'Computer Vision Systems', 'Production Deployment'].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="text-gray-300 flex items-center text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-4 flex-shrink-0"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto py-32 px-8 border-t border-gray-800/50 relative overflow-hidden">
        <motion.div 
          style={{ y: scrollY * 0.2 }}
          className="absolute top-0 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-black mb-16 text-white relative z-10"
        >
          Featured Projects
        </motion.h2>
        <div className="space-y-12 relative z-10">
          {projects.map((project, idx) => (
            <motion.a 
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={idx}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)" }}
              className="block bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <motion.h3 
                    className="text-4xl md:text-5xl font-black text-white mb-3"
                    animate={hoveredProject === idx ? { x: 8 } : { x: 0 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-indigo-400 font-bold text-sm uppercase tracking-widest">{project.type}</p>
                </div>
                <motion.div
                  animate={hoveredProject === idx ? { rotate: 45, scale: 1.15 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl font-black text-indigo-400"
                >
                  →
                </motion.div>
              </div>
              <p className="text-gray-300 text-xl mb-6 leading-relaxed">{project.description}</p>
              <p className="text-indigo-300 text-lg font-mono mb-6 font-semibold">{project.metrics}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-lg text-sm font-bold border border-indigo-500/50 hover:bg-indigo-600/40 transition"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto py-32 px-8 border-t border-gray-800/50 relative overflow-hidden">
        <motion.div 
          style={{ y: scrollY * -0.15 }}
          className="absolute top-32 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-black mb-16 text-white relative z-10"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-indigo-500/50 transition-all"
            >
              <h3 className="text-2xl font-black text-indigo-400 mb-8 uppercase tracking-widest">{category}</h3>
              <ul className="space-y-4">
                {items.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    className="text-gray-300 flex items-center text-lg font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                  >
                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-4 flex-shrink-0"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto py-32 px-8 border-t border-gray-800/50 relative overflow-hidden">
        <motion.div 
          style={{ y: scrollY * 0.2 }}
          className="absolute top-20 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10"
        >
          <motion.h2 
            variants={fadeInUp}
            custom={0}
            className="text-6xl md:text-7xl font-black mb-12 text-white"
          >
            Experience
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            custom={1}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 border border-gray-800 hover:border-indigo-500/50 transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white">AI/Computer Vision Engineer</h3>
                <p className="text-indigo-400 font-bold text-xl mt-3">Pharmacy Network (Internship)</p>
              </div>
              <span className="px-6 py-3 bg-indigo-600/30 text-indigo-300 rounded-lg text-sm font-bold border border-indigo-500/50 uppercase tracking-widest">
                Nov 2023 - June 2024
              </span>
            </div>
            <ul className="space-y-5 text-gray-300">
              {[
                'Built AI-powered CV systems for retail analytics: footfall detection, staff identification, uniform detection',
                'Engineered RTSP camera stream pipelines using GStreamer for real-time video ingestion and preprocessing',
                'Deployed models on NVIDIA Jetson with TensorRT optimization (FP16/INT8) for low-latency edge inference',
                'Integrated FFmpeg for video decoding, stream debugging, and multi-format support',
                'Focused on real-time performance, edge constraints, and accuracy vs. latency trade-offs'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex gap-4 text-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <span className="text-indigo-500 font-black flex-shrink-0 text-2xl">→</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto py-32 px-8 border-t border-b border-gray-800/50 relative overflow-hidden">
        <motion.div 
          style={{ y: scrollY * -0.2 }}
          className="absolute top-0 left-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"
        ></motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center relative z-10"
        >
          <motion.h2 
            variants={fadeInUp}
            custom={0}
            className="text-6xl md:text-7xl font-black mb-8 text-white"
          >
            Let's Build Together
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            custom={1}
            className="text-2xl text-gray-400 mb-12 max-w-4xl mx-auto"
          >
            Always open to discussing AI/CV projects, edge systems optimization, and interesting opportunities.
          </motion.p>
          <motion.a 
            href="mailto:rohith@example.com"
            variants={fadeInUp}
            custom={2}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xl rounded-lg transition duration-300 uppercase tracking-widest"
          >
            Send Email →
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-800 py-12 px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <p className="text-gray-500 text-sm font-mono">© 2026 Rohith Thirunagari. Crafted with focus on real-time systems.</p>
        </motion.div>
      </footer>
    </main>
  );
}

export default App;
