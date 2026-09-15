import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The teachers here really care. My daughter learns her school subjects and how to be a good person.",
    author: "Sara T.",
    role: "Parent of Grade 8 Student",
  },
  {
    quote: "Felegeneway prepared me for university and for life. The lessons I learned here still guide me every day.",
    author: "Dawit M.",
    role: "Alumni, Class of '20",
  },
  {
    quote: "This is a caring school. The teachers see what each child can do and give them the support they need.",
    author: "Dr. Aster K.",
    role: "Parent of KG & Grade 4 Students",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 text-center md:px-12">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">What People Say</h4>
        <h2 className="mb-16 text-4xl font-serif font-bold text-primary md:text-5xl">What Our Community Says</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm"
            >
              <div className="absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent pt-2 font-serif text-3xl leading-none text-white shadow-lg">
                "
              </div>
              <p className="mt-6 mb-8 text-lg font-medium italic leading-relaxed text-primary">"{item.quote}"</p>
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