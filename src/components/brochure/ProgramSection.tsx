import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type Item = {
  event: string;
  person?: string;
  sub?: string[];
};

const programItems: Item[] = [
  { event: "Chairperson", person: "Mr. Donald Albert" },
  { event: "Entrance of Graduands", person: "Musical Rendition" },
  { event: "National Anthem", person: "Instrumental" },
  { event: "Prayers", person: "Renaldo St. Helene" },
  { event: "Welcome Remarks", person: "Ms. Stecia Stanislaus" },
  { event: "Year Head's Remarks" },
  { event: "Special Rendition", person: "Ms. Amelia Francis" },
  { event: "Remarks", person: "Mr. Jean Jeriffe — Education Officer (District V)" },
  { event: "Remarks", person: "Representative of Ministry of Education, Sustainable Development, Innovation, Science, Technology and Vocational Training" },
  { event: "Principal's Address", person: "Mrs. Flora Joseph" },
  { event: "Presentation of School Leaving Certificates", person: "Year Head & Homeroom Sponsors" },
  { event: "Presentation of Discipline Awards", person: "Deans of Discipline & Sponsors" },
  { event: "Performance", person: "Micoud Secondary Dance Club" },
  { event: "Feature Address", person: "Mr. Ted Sandiford" },
  { event: "Presentation to Guest Speaker", person: "Kievon Abbot" },
  { event: "Rendition", person: "Ms. Shan Lucien / MSS Choir" },
  { event: "Presentation of Individual Subject Awards" },
  {
    event: "Sports Awards",
    sub: [
      "Football",
      "Male Track Athlete",
      "Female Track Athlete",
      "Netball",
      "Volleyball — Male & Female",
      "Basketball",
    ],
  },
  {
    event: "Special Awards",
    sub: [
      "Contribution to School Life",
      "Spirit of MSS",
      "Most Improved Students",
      "Dance Award",
      "Resilience Awards",
    ],
  },
  {
    event: "Outstanding Awards",
    sub: [
      "Sportsman & Sportswoman of the Year",
      "Highest Academic Achiever / Most Outstanding",
      "Principal's Award",
      "Student of the Year",
    ],
  },
  { event: "Valedictory Address", person: "Quana Monlouis" },
  { event: "Graduation Song", person: "\"We Pray\" by Popcaan" },
  { event: "Vote of Thanks", person: "Haylee Annenville" },
  { event: "School Song", person: "Our School, Our Life — Graduates" },
  { event: "Exit of Graduates" },
];

const ProgramSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setOpened(true),
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">Order of</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Programme</h2>
          <div className="w-24 h-0.5 gold-gradient mx-auto mt-4" />
        </motion.div>

        {/* Paper opening animation */}
        <div
          className="relative mx-auto"
          style={{ perspective: "2000px" }}
        >
          {/* Left fold */}
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            animate={opened ? { rotateY: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "right center" }}
            className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
          >
            <div className="h-full w-full bg-gradient-to-r from-card to-transparent" />
          </motion.div>
          {/* Right fold */}
          <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={opened ? { rotateY: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center" }}
            className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
          />

          <motion.div
            initial={{ scaleX: 0.2, scaleY: 0.6, opacity: 0 }}
            animate={opened ? { scaleX: 1, scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ transformOrigin: "center center" }}
            className="relative bg-background border-2 border-gold/40 shadow-2xl rounded-sm"
          >
            {/* Decorative corners */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold" />

            {/* Scroll controls */}
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="no-print hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-lg hover:bg-gold transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="no-print hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-lg hover:bg-gold transition-colors"
            >
              ›
            </button>

            <motion.div
              ref={scrollRef}
              initial={{ opacity: 0 }}
              animate={opened ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="overflow-x-auto py-12 px-8 scroll-smooth print-program-scroll"
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex gap-6 items-stretch min-w-min print-program-grid">
                {programItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={opened ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 + index * 0.04, duration: 0.4 }}
                    className="relative flex-shrink-0 w-64 bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md hover:border-gold transition-all group"
                  >
                    <div className="absolute -top-3 left-5 bg-gold text-primary-foreground font-display font-bold text-sm px-3 py-0.5 rounded-full shadow">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-lg font-bold text-primary mt-2 leading-tight group-hover:text-gold transition-colors">
                      {item.event}
                    </h3>
                    {item.person && (
                      <p className="font-elegant italic text-sm text-foreground/80 mt-2 leading-snug">
                        {item.person}
                      </p>
                    )}
                    {item.sub && (
                      <ul className="mt-3 space-y-1">
                        {item.sub.map((s, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs font-body text-foreground/80"
                          >
                            <span className="text-gold mt-1">◆</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="absolute bottom-2 right-3 font-display text-[10px] tracking-widest text-gold/60 uppercase">
                      MSS '26
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <p className="no-print text-center text-xs font-body tracking-[0.3em] uppercase text-foreground/50 pb-4">
              ← Scroll to explore the ceremony →
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
    </section>
  );
};

export default ProgramSection;
