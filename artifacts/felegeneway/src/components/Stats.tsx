import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Years of Learning" },
  { value: "100%", label: "University Acceptance" },
  { value: "45+", label: "Extracurriculars" },
  { value: "12:1", label: "Student-Teacher Ratio" },
];

export function Stats() {
  return (
    <section className="relative bg-primary py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-10" />
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="mb-2 text-4xl font-serif font-bold text-white md:text-6xl">{stat.value}</div>
              <div className="text-sm font-medium uppercase tracking-wide text-white/80 md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}