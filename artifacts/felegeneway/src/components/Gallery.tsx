import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import heroImage from "@assets/image_1782399955786.png";
import aboutImage from "@assets/image_1782400618970.png";

const galleryItems = [
  {
    src: heroImage,
    alt: "Felegeneway Academy students holding certificates",
    title: "Learning together",
    category: "School life",
  },
  {
    src: aboutImage,
    alt: "Felegeneway Academy students celebrating their achievements",
    title: "Celebrating achievement",
    category: "Student moments",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[number] | null>(null);

  return (
    <section id="gallery" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Gallery</h4>
          <h2 className="mb-6 text-4xl font-serif font-bold text-primary md:text-5xl">A Look Inside Our School</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            See the people, learning, and moments that make Felegeneway special.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-3xl bg-primary text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
            >
              <img src={item.src} alt={item.alt} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                <div>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-accent">{item.category}</span>
                  <span className="text-xl font-serif font-bold">{item.title}</span>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <Maximize2 size={17} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/90 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl" />
              <p className="mt-4 text-center text-lg font-medium text-white">{selectedImage.title}</p>
              <button
                type="button"
                aria-label="Close gallery image"
                onClick={() => setSelectedImage(null)}
                className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg transition hover:bg-accent hover:text-white"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}