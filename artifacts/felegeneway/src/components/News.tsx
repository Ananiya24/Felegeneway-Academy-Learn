import { motion } from "framer-motion";

const news = [
  {
    date: "Oct 15, 2024",
    category: "Achievement",
    title: "Students Win National Science Fair",
    desc: "Our secondary school robotics team won first place at the Ethiopian National Science and Innovation Fair.",
    img: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "Nov 02, 2024",
    category: "Event",
    title: "Annual Heritage Day Celebration",
    desc: "Join us next week as we celebrate Ethiopia with performances, food, and student presentations.",
    img: "https://images.unsplash.com/photo-1542838686-37ed7a7ef6f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "Dec 10, 2024",
    category: "Academic",
    title: "New Classes for Grades 11 and 12",
    desc: "We are adding new classes for students in grades 11 and 12 next semester.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
  },
];

export function News() {
  return (
    <section id="news" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Campus Life</h4>
            <h2 className="text-4xl font-serif font-bold text-primary md:text-5xl">News &amp; Events</h2>
          </div>
          <button className="rounded-full bg-primary/5 px-6 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/10">
            View All News
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-primary/20 transition-colors duration-500 group-hover:bg-transparent" />
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <div className="mb-3 text-sm font-bold text-accent">{item.date}</div>
                <h3 className="mb-3 text-xl font-serif font-bold leading-snug text-primary transition-colors group-hover:text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}