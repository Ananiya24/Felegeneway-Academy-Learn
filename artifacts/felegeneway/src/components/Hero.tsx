import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/image_1782399955786.png";
import { fadeInUp, staggerContainer } from "../lib/animations";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />
        <img src={heroImage} alt="Felegeneway Academy students" className="h-full w-full object-cover object-top" />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center text-white md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Learn To Live</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-5xl font-serif font-bold leading-[1.1] drop-shadow-lg md:text-7xl lg:text-8xl"
          >
            Growing Good People.
            <br />
            <span className="font-light italic text-white/80">Building Bright Minds.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-white/80 md:text-xl">
            Felegeneway Academy is a school where children learn, grow, and become kind, capable people. We prepare students for the future.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-xl shadow-accent/20 transition-all hover:-translate-y-1 hover:bg-accent/90 sm:w-auto"
            >
              Contact Us <ArrowRight size={18} />
            </a>
            <a
              href="/about"
              className="flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
            >
              Learn About Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}