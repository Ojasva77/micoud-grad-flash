import { motion } from "framer-motion";
import mssLogo from "@/assets/mss-logo.jpg";

const FooterSection = () => {
  return (
    <section className="py-20 px-6 green-gradient text-primary-foreground relative">
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
      
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={mssLogo}
            alt="MSS Logo"
            className="w-20 h-20 mx-auto rounded-full border-2 border-gold mb-6 object-cover bg-card"
          />

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Micoud Secondary School
          </h2>
          <p className="font-elegant text-xl italic text-gold mb-8">
            "Learn Well to Serve Better"
          </p>

          <div className="w-16 h-0.5 gold-gradient mx-auto mb-8" />

          <div className="font-body text-sm opacity-80 space-y-1">
            <p>Micoud, Saint Lucia</p>
            <p>Graduation Ceremony — Class of 2026</p>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="font-elegant text-lg italic text-gold-light">
              "The future belongs to those who believe in the beauty of their dreams."
            </p>
            <p className="font-body text-xs mt-3 opacity-60">— Eleanor Roosevelt</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterSection;
