import { motion } from "framer-motion";

const MessageSection = () => {
  return (
    <section className="py-24 px-6 bg-green-light relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">Words of Wisdom</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Principal's Message</h2>
          <div className="w-24 h-0.5 gold-gradient mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 gold-gradient" />
          <div className="absolute top-6 left-8 text-8xl font-display text-gold opacity-20">"</div>

          <div className="relative z-10 font-elegant text-lg md:text-xl leading-relaxed text-foreground space-y-4 pt-8">
            <p>
              Dear Graduates of the Class of 2026,
            </p>
            <p>
              Today marks a significant milestone in your journey. As you leave the halls of Micoud Secondary School, 
              carry with you the values, knowledge, and experiences that have shaped you into the remarkable young 
              men and women you are today.
            </p>
            <p>
              Remember our motto — <em className="text-gold font-semibold">"Learn Well to Serve Better."</em> Let 
              this guiding principle continue to inspire you as you venture into the world. The education you have 
              received here is not merely academic; it is a foundation for service, leadership, and positive change 
              in your communities and beyond.
            </p>
            <p>
              We are immensely proud of each and every one of you. Go forth with confidence, compassion, and the 
              determination to make a difference.
            </p>
            <p className="text-right mt-8 font-body text-base">
              <span className="text-gold font-semibold">— The Principal</span>
              <br />
              <span className="text-muted-foreground">Micoud Secondary School</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
