import { motion } from "framer-motion";
import { Award, Heart, Lightbulb, Shield } from "lucide-react";
import aboutImage from "@assets/image_1782400618970.png";
import { fadeInUp, staggerContainer } from "../lib/animations";

const pillars = [
  { icon: Award, title: "Do Your Best", desc: "Good lessons that help every student do their best." },
  { icon: Shield, title: "Be Honest", desc: "Learning to be honest, responsible, and fair." },
  { icon: Heart, title: "Community", desc: "Respecting Ethiopian culture and caring for others." },
  { icon: Lightbulb, title: "New Ideas", desc: "Using creativity to solve problems and try new things." },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h4 variants={fadeInUp} className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              Our Mission
            </motion.h4>
            <motion.h2 variants={fadeInUp} className="mb-6 text-4xl font-serif font-bold leading-tight text-primary md:text-5xl">
              A strong start for a bright future.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mb-8 text-lg leading-relaxed text-muted-foreground">
              We believe school is about more than lessons. The flame in our crest reminds us of the light of learning, while the pillars represent strong values. We help every child grow in their mind, body, and relationships.
            </motion.p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div key={pillar.title} variants={fadeInUp} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold text-primary">{pillar.title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 transform rounded-3xl bg-primary opacity-10" />
            <img
              src={aboutImage}
              alt="Felegeneway Academy students with certificates"
              className="relative z-10 h-[600px] w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -left-8 z-20 max-w-[240px] rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
              <div className="mb-2 flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-accent" />
                <span className="text-sm font-bold uppercase tracking-wider text-primary">Since 2004 E.C.</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Supporting students as they learn, grow, and prepare for the future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}