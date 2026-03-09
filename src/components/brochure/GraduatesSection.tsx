import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const GraduatesSection = () => {
  return (
    <section className="py-24 px-6 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">With Pride We Present</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">The Graduating Class</h2>
          <div className="w-24 h-0.5 gold-gradient mx-auto mt-4" />
          <p className="font-elegant text-xl text-muted-foreground mt-4 italic">Class of 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <GraduationCap className="w-20 h-20 text-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-green-light rounded-2xl p-8 md:p-12 text-center border border-border"
        >
          <p className="font-elegant text-xl md:text-2xl text-foreground leading-relaxed italic">
            "Today we celebrate not just the completion of your studies, but the beginning of your 
            extraordinary journeys. Each graduate of the Class of 2026 has demonstrated resilience, 
            dedication, and the spirit of excellence that defines Micoud Secondary School."
          </p>
          <div className="w-16 h-0.5 gold-gradient mx-auto my-8" />
          <p className="font-body text-muted-foreground text-sm tracking-wider uppercase">
            Congratulations to all Graduates
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
    </section>
  );
};

export default GraduatesSection;
