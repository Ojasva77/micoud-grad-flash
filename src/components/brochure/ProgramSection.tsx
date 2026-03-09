import { motion } from "framer-motion";

const programItems = [
  { time: "9:30 AM", event: "Arrival & Seating of Guests" },
  { time: "10:00 AM", event: "Processional — Graduating Class of 2026" },
  { time: "10:15 AM", event: "National Anthem & School Song" },
  { time: "10:20 AM", event: "Invocation & Welcome" },
  { time: "10:30 AM", event: "Principal's Address" },
  { time: "10:45 AM", event: "Guest Speaker's Address" },
  { time: "11:05 AM", event: "Valedictorian's Speech" },
  { time: "11:20 AM", event: "Musical Interlude" },
  { time: "11:30 AM", event: "Presentation of Awards & Certificates" },
  { time: "12:15 PM", event: "Vote of Thanks" },
  { time: "12:25 PM", event: "School Song & Recessional" },
  { time: "12:35 PM", event: "Reception & Refreshments" },
];

const ProgramSection = () => {
  return (
    <section className="py-24 px-6 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
      
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">Order of</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Programme</h2>
          <div className="w-24 h-0.5 gold-gradient mx-auto mt-4" />
        </motion.div>

        <div className="space-y-0">
          {programItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-6 py-4 border-b border-border group hover:bg-green-light transition-colors px-4 rounded"
            >
              <span className="font-body text-sm font-semibold text-gold min-w-[90px]">
                {item.time}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:bg-gold transition-colors" />
              <span className="font-elegant text-lg md:text-xl text-foreground">
                {item.event}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
    </section>
  );
};

export default ProgramSection;
