import { motion } from "framer-motion";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-primary pb-20 pt-40 text-white">
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
          <h1 className="mb-6 text-5xl font-serif font-bold leading-tight md:text-7xl">{title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}