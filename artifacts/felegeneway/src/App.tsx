import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, MapPin, Phone, Mail, Menu, X, ArrowRight, Award, Heart, Shield, Lightbulb, ChevronRight, CheckCircle2 } from "lucide-react";
import logo from "@assets/image_1782398612308.png";
import heroImage from "@assets/image_1782399955786.png";
import aboutImage from "@assets/image_1782400618970.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Admissions", href: "#admissions" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 z-50">
          <img src={logo} alt="Felegeneway Academy Logo" className="h-12 w-auto" />
          <div className={`flex flex-col ${isScrolled ? "text-primary" : "text-white"} transition-colors duration-300`}>
            <span className="font-serif font-bold text-xl leading-tight">Felegeneway</span>
            <span className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold opacity-90">Academy</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium tracking-wide hover:text-accent transition-colors ${isScrolled ? "text-foreground" : "text-white/90"}`}>
              {link.name}
            </a>
          ))}
          <a href="#admissions" className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent/90 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/20">
            Apply Now
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className={`md:hidden z-50 ${isScrolled || mobileMenuOpen ? "text-primary" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-primary hover:text-accent transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="#admissions" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold mt-4">
                Apply Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20 z-10" />
        <img src={heroImage} alt="Felegeneway Academy Students" className="w-full h-full object-cover object-top" />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center text-white">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/90">Learn to Live</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6 drop-shadow-lg">
            Shaping Character.<br />
            <span className="text-white/80 italic font-light">Igniting Intellect.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Felegeneway Academy is where Ethiopian families send their children to be shaped into thoughtful, capable citizens. We honor tradition while embracing the future.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#admissions" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-base font-bold transition-all transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl shadow-accent/20">
              Begin Your Journey <ArrowRight size={18} />
            </a>
            <a href="#about" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-base font-bold transition-all w-full sm:w-auto flex items-center justify-center">
              Discover Our Story
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const pillars = [
    { icon: <Award className="w-6 h-6 text-accent" />, title: "Excellence", desc: "Uncompromising academic standards that challenge and elevate every student." },
    { icon: <Shield className="w-6 h-6 text-accent" />, title: "Integrity", desc: "Building strong moral compasses grounded in honesty and accountability." },
    { icon: <Heart className="w-6 h-6 text-accent" />, title: "Community", desc: "Fostering deep respect for Ethiopian heritage and global citizenship." },
    { icon: <Lightbulb className="w-6 h-6 text-accent" />, title: "Innovation", desc: "Equipping minds to solve tomorrow's problems with creativity and resilience." }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h4 variants={fadeInUp} className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Our Mission</motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              A foundation built on purpose and pride.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Felegeneway Academy, we believe education extends far beyond the classroom. The flame in our crest represents the enduring light of knowledge, while the pillars stand for the unbreakable foundation of character. We are committed to a holistic approach that nurtures the mind, body, and spirit of every child who walks through our doors.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {pillars.map((pillar, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{pillar.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
            <img src={aboutImage} alt="Felegeneway Academy students with certificates" className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[600px]" />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px] border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="font-bold text-primary text-sm uppercase tracking-wider">Since 1998</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Serving families in Lebu and across Addis Ababa.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      title: "Kindergarten",
      age: "Ages 4–6",
      desc: "A nurturing foundation where curiosity is celebrated and core social, emotional, and cognitive skills are developed through purposeful play and structured discovery.",
      color: "bg-slate-100 text-slate-700 border-slate-200"
    },
    {
      title: "Primary School",
      age: "Grades 1–8",
      desc: "A comprehensive academic curriculum that builds strong literacy, numeracy, and critical thinking skills alongside a deep appreciation for Ethiopian heritage and values.",
      color: "bg-blue-50 text-blue-800 border-blue-100"
    },
    {
      title: "Secondary School",
      age: "Grades 9–10",
      desc: "Focused academic preparation aligned with the national curriculum, equipping students with the knowledge and discipline required for university entrance examinations.",
      color: "bg-indigo-50 text-indigo-800 border-indigo-100"
    },
    {
      title: "Preparatory",
      age: "Grades 11–12",
      desc: "Rigorous university preparatory education across natural and social science streams, mentored by experienced faculty committed to each student's highest potential.",
      color: "bg-navy-50 text-primary border-primary/20"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Academics</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Educational Pathway</h2>
          <p className="text-muted-foreground text-lg">We offer a seamless journey of learning that adapts to the developmental needs of your child at every stage.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold border mb-6 ${program.color}`}>
                {program.age}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{program.desc}</p>
              <a href="#admissions" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-accent transition-colors group-hover:gap-3">
                Learn more <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "100%", label: "University Acceptance" },
    { value: "45+", label: "Extracurriculars" },
    { value: "12:1", label: "Student-Teacher Ratio" },
  ];

  return (
    <section className="py-20 bg-primary text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium tracking-wide text-white/80 uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  const news = [
    {
      date: "Oct 15, 2024",
      category: "Achievement",
      title: "Students Win National Science Fair",
      desc: "Our secondary school robotics team secured first place at the annual Ethiopian National Science and Innovation Fair.",
      img: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "Nov 02, 2024",
      category: "Event",
      title: "Annual Heritage Day Celebration",
      desc: "Join us next week as we celebrate the rich cultural tapestry of Ethiopia with performances, food, and student presentations.",
      img: "https://images.unsplash.com/photo-1542838686-37ed7a7ef6f3?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "Dec 10, 2024",
      category: "Academic",
      title: "New Advanced Placement Tracks",
      desc: "We are expanding our curriculum to include new rigorous academic tracks for grades 11 and 12 starting next semester.",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Campus Life</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">News & Events</h2>
          </div>
          <button className="bg-primary/5 text-primary hover:bg-primary/10 px-6 py-2.5 rounded-full text-sm font-bold transition-colors">
            View All News
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary z-20">
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <div className="text-accent text-sm font-bold mb-3">{item.date}</div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Admissions() {
  return (
    <section id="admissions" className="py-24 bg-primary text-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h4 variants={fadeInUp} className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Join Us</motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">Admissions are open for the 2025 academic year.</motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8 leading-relaxed font-light">
              Choosing the right school is one of the most important decisions a family makes. We invite you to begin the process by submitting an inquiry. Our admissions team will guide you through every step.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="space-y-6">
              {[
                "Submit an online inquiry",
                "Schedule a campus tour and interview",
                "Complete the application & assessment",
                "Receive admission decision"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-sm border border-white/30 shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-medium text-lg">{step}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-foreground"
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Request Information</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" placeholder="Abebe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" placeholder="Kebede" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Phone Number</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" placeholder="+251 911 234 567" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Interested Grade Level</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none">
                  <option value="">Select Level</option>
                  <option value="kg">Kindergarten (Ages 4–6)</option>
                  <option value="primary">Primary School (Grades 1–8)</option>
                  <option value="secondary">Secondary School (Grades 9–10)</option>
                  <option value="preparatory">Preparatory (Grades 11–12)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Message (Optional)</label>
                <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors mt-4 shadow-lg shadow-primary/30">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "The dedication of the teachers here is unmatched. My daughter doesn't just learn subjects; she learns how to be a better person.",
      author: "Sara T.",
      role: "Parent of Grade 8 Student"
    },
    {
      quote: "Felegeneway prepared me not just for university, but for life. The values instilled in me here guide my decisions every single day.",
      author: "Dawit M.",
      role: "Alumni, Class of '20"
    },
    {
      quote: "A truly holistic environment. They recognize the unique potential in every child and provide the exact support needed to unlock it.",
      author: "Dr. Aster K.",
      role: "Parent of KG & Grade 4 Students"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h4 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Voices</h4>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16">Our Community Speaks</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative"
            >
              <div className="absolute -top-5 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-3xl leading-none pt-2 shadow-lg">
                "
              </div>
              <p className="text-lg text-primary font-medium italic mt-6 mb-8 leading-relaxed">"{item.quote}"</p>
              <div className="mt-auto">
                <div className="font-bold text-primary">{item.author}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logo" className="h-12 w-auto brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight text-white">Felegeneway</span>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-white/80">Academy</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
              Learn to Live. We are committed to shaping thoughtful, capable citizens through values-driven education in the heart of Ethiopia.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Academic Programs', 'Admissions Process', 'News & Events', 'Career Opportunities'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Lebu, Nifas Silk-Lafto<br/>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+251 11 662 1234</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@felegeneway.edu.et</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Find Us</h4>
            <div className="w-full h-32 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
              <MapPin className="w-8 h-8 text-white z-20 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="sr-only">Map Placeholder</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Felegeneway Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="font-sans text-foreground selection:bg-accent selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Stats />
        <News />
        <Admissions />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;