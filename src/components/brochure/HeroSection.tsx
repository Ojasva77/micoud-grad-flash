import { motion } from "framer-motion";
import mssLogo from "@/assets/mss-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center green-gradient text-primary-foreground overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-gold rounded-full" />
        <div className="absolute top-1/3 right-10 w-20 h-20 border border-gold rotate-45" />
      </div>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-2 gold-gradient" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={mssLogo}
            alt="Micoud Secondary School Logo"
            className="w-36 h-36 mx-auto rounded-full border-4 border-gold shadow-2xl object-cover bg-card"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4"
        >
          Micoud Secondary School Presents
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          Graduation
          <br />
          <span className="text-gold italic">Ceremony</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="w-48 h-0.5 gold-gradient mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="font-elegant text-2xl md:text-3xl italic text-gold-light"
        >
          "Learn Well to Serve Better"
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-10 font-body text-lg tracking-wide"
        >
          <p className="text-gold font-semibold text-xl">Class of 2026</p>
          <p className="mt-2 opacity-80">Friday, June 27th, 2026 • 10:00 AM</p>
          <p className="opacity-80">Micoud Secondary School Auditorium</p>
          <p className="opacity-80">Micoud, Saint Lucia</p>
        </motion.div>
      </motion.div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 gold-gradient" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
