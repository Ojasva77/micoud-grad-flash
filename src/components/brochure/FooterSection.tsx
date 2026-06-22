import { motion } from "framer-motion";
import { Printer } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative teal-gradient text-primary-foreground py-16 px-6 border-t-4 border-burnt">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center space-y-6"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] opacity-90">
          Micoud Secondary School
        </p>
        <div className="w-12 h-px bg-burnt mx-auto" />
        <p className="font-display italic text-lg opacity-90">
          "Learn Well to Serve Better"
        </p>
        <p className="font-body text-xs font-light opacity-70 leading-relaxed">
          Micoud Village, Saint Lucia
          <br />
          Class of 2026 — Graduation Ceremony
        </p>

        <div className="pt-4 no-print">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-8 py-3 bg-burnt text-primary-foreground font-body font-semibold rounded-full hover:bg-burnt-light hover:scale-105 transition-all shadow-lg uppercase text-xs tracking-widest"
            style={{ backgroundColor: "hsl(var(--burnt))" }}
          >
            <Printer className="w-4 h-4" />
            Print Brochure
          </button>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
