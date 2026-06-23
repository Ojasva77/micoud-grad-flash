import { motion } from "framer-motion";
import mssLogo from "@/assets/mss-logo.jpg";

const HeroSection = () => {
  return (
    <header className="relative teal-gradient text-primary-foreground pt-14 pb-20 md:pt-20 md:pb-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none dotted-pattern" />
      <div className="absolute top-0 left-0 right-0 h-2 bg-burnt" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-burnt" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-burnt bg-cream p-1 shadow-2xl mb-6 md:mb-8 overflow-hidden flex items-center justify-center"
        >
          <img
            src={mssLogo}
            alt="Micoud Secondary School Logo"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 tracking-tight text-cream"
        >
          Micoud Secondary School
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-display italic text-lg md:text-2xl text-burnt-light mb-8 md:mb-10"
          style={{ color: "hsl(var(--burnt-light))" }}
        >
          "Learn Well to Serve Better"
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="w-24 h-px bg-burnt mb-8 origin-center"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="space-y-3"
        >
          <h2 className="font-body text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.2em] md:tracking-[0.25em] font-light">
            Class of 2026
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 font-body text-xs md:text-base opacity-90">
            <span>Thursday, June 25th 2026</span>
            <span className="w-1 h-1 bg-burnt rounded-full" />
            <span>MSS Auditorium, Micoud</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="no-print absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-5 h-9 border-2 border-burnt rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-burnt rounded-full"
          />
        </div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
