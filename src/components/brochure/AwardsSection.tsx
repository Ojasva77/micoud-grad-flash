import { motion } from "framer-motion";
import { Award, Star, Trophy, BookOpen } from "lucide-react";

const awards = [
  { icon: Trophy, title: "Valedictorian Award", description: "Highest Academic Achievement" },
  { icon: Star, title: "Salutatorian Award", description: "Second Highest Academic Achievement" },
  { icon: BookOpen, title: "Subject Awards", description: "Excellence in Individual Subjects" },
  { icon: Award, title: "Principal's Award", description: "Outstanding Leadership & Character" },
  { icon: Star, title: "Most Improved Student", description: "Greatest Academic Growth" },
  { icon: Award, title: "Community Service Award", description: "Dedication to Community" },
];

const AwardsSection = () => {
  return (
    <section className="py-24 px-6 green-gradient text-primary-foreground relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">Celebrating Excellence</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Awards & Honours</h2>
          <div className="w-24 h-0.5 gold-gradient mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary/30 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center hover:border-gold/50 transition-all group"
            >
              <award.icon className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold mb-2">{award.title}</h3>
              <p className="font-body text-sm opacity-80">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
