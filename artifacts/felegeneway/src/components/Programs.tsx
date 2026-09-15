import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const programs = [
  {
    title: "Kindergarten",
    age: "Ages 4–6",
    desc: "A caring start where children learn through play, ask questions, and build important skills.",
    color: "border-slate-200 bg-slate-100 text-slate-700",
  },
  {
    title: "Primary School",
    age: "Grades 1–8",
    desc: "Lessons that build strong reading, writing, math, and problem-solving skills while teaching Ethiopian culture and values.",
    color: "border-blue-100 bg-blue-50 text-blue-800",
  },
  {
    title: "Secondary School",
    age: "Grades 9–10",
    desc: "Classes that follow the national curriculum and help students get ready for university entrance exams.",
    color: "border-indigo-100 bg-indigo-50 text-indigo-800",
  },
  {
    title: "Preparatory",
    age: "Grades 11–12",
    desc: "Classes in natural and social sciences that prepare students for university, with teachers who support every learner.",
    color: "border-primary/20 bg-navy-50 text-primary",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-gray-50 py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute right-[-5%] top-[-10%] h-[40%] w-[40%] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Academics</h4>
          <h2 className="mb-6 text-4xl font-serif font-bold text-primary md:text-5xl">Our School Programs</h2>
          <p className="text-lg text-muted-foreground">We help children learn and grow at every stage of school.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className={`mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-bold ${program.color}`}>{program.age}</div>
              <h3 className="mb-4 text-2xl font-serif font-bold text-primary transition-colors group-hover:text-accent">{program.title}</h3>
              <p className="mb-8 leading-relaxed text-muted-foreground">{program.desc}</p>
              <a href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3 group-hover:text-accent">
                Learn more <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}