import { motion } from "framer-motion";

type Item = {
  chapter?: string;
  event: string;
  person?: string;
  sub?: string[];
  group?: boolean;
};

const programItems: Item[] = [
  { chapter: "Chairpersons", event: "Chairpersons", person: "Mr. Raphael Jn Charles & Mrs. Annia Modeste" },
  { chapter: "Procession", event: "Entrance of Graduands", person: "Musical Rendition" },
  { chapter: "Anthem", event: "National Anthem", person: "Instrumental" },
  { chapter: "Invocation", event: "Prayers", person: "Renaldo St. Helene" },
  { chapter: "Welcome", event: "Welcome Remarks", person: "Ms. Stecia Stanislaus" },
  { chapter: "Reporting", event: "Year Head's Remarks" },
  
  { chapter: "Remarks", event: "Remarks", person: "Mr. Jean Jeriffe — Education Officer (District V)" },
  { chapter: "Remarks", event: "Remarks", person: "Representative of Ministry of Education, Sustainable Development, Innovation, Science, Technology and Vocational Training" },
  { chapter: "Address", event: "Principal's Address", person: "Mrs. Flora Joseph" },
  { chapter: "Certificates", event: "Presentation of School Leaving Certificates", person: "Year Head & Homeroom Sponsors" },
  { chapter: "Discipline", event: "Presentation of Discipline Awards", person: "Deans of Discipline & Sponsors" },
  { chapter: "Performance", event: "Performance", person: "Micoud Secondary Dance Club" },
  { chapter: "Feature", event: "Feature Address", person: "Mrs. Annie Greaves Maryat" },
  { chapter: "Token", event: "Presentation to Guest Speaker", person: "Kievon Abbot" },
  { chapter: "Rendition", event: "Rendition", person: "Ms. Shan Lucien / MSS Choir" },
  { chapter: "Academic", event: "Presentation of Individual Subject Awards" },
  {
    chapter: "Sports Awards",
    event: "Sports Awards",
    group: true,
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
    chapter: "Special Awards",
    event: "Special Awards",
    group: true,
    sub: [
      "Contribution to School Life",
      "Spirit of MSS",
      "Most Improved Students",
      "Dance Award",
      "Resilience Awards",
    ],
  },
  {
    chapter: "Outstanding Awards",
    event: "Outstanding Awards",
    group: true,
    sub: [
      "Sportsman & Sportswoman of the Year",
      "Highest Academic Achiever / Most Outstanding",
      "Principal's Award",
      "Student of the Year",
    ],
  },
  { chapter: "Valedictory", event: "Valedictory Address", person: "Quana Monlouis" },
  { chapter: "Song", event: "Graduation Song", person: "\"We Pray\" by Popcaan" },
  { chapter: "Thanks", event: "Vote of Thanks", person: "Haylee Annenville" },
  { chapter: "School Song", event: "School Song — Our School, Our Life", person: "Graduates" },
  { chapter: "Recessional", event: "Exit of Graduates" },
];

const ProgramSection = () => {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-widest text-burnt border-b border-burnt/20 pb-4 inline-block px-6">
            Order of Programme
          </h3>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Center spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-teal/30 -translate-x-1/2 hidden md:block"
          />

          <div className="space-y-8 md:space-y-6">
            {programItems.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const dotColor = idx % 3 === 0 ? "bg-burnt" : "bg-teal";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`programme-item relative pl-6 md:pl-0 border-l-2 md:border-l-0 border-teal/20 flex flex-col md:flex-row ${
                    isLeft
                      ? "md:justify-end md:pr-10 md:text-right md:w-1/2 md:border-none"
                      : "md:ml-auto md:pl-10 md:text-left md:w-1/2 md:border-none"
                  }`}
                >
                  {/* Mobile dot */}
                  <div className={`md:hidden absolute top-2 -left-[5px] w-2 h-2 rounded-full ${dotColor}`} />
                  {/* Desktop dot on spine */}
                  <div
                    className={`hidden md:block absolute top-2 w-3 h-3 rounded-full border-2 border-background z-10 ${dotColor} ${
                      isLeft ? "-right-1.5" : "-left-1.5"
                    }`}
                  />

                  <div className="w-full">
                    <h4 className="font-body text-[10px] md:text-xs uppercase tracking-[0.25em] text-burnt font-semibold mb-1">
                      {String(idx + 1).padStart(2, "0")} · {item.chapter}
                    </h4>
                    <p className="font-display text-xl md:text-2xl font-bold text-teal leading-tight">
                      {item.event}
                    </p>
                    {item.person && (
                      <p className="font-body text-sm text-foreground/70 mt-1 italic">
                        {item.person}
                      </p>
                    )}
                    {item.sub && (
                      <ul
                        className={`mt-3 space-y-1 font-body text-sm text-foreground/80 ${
                          isLeft ? "md:ml-auto" : ""
                        }`}
                      >
                        {item.sub.map((s, i) => (
                          <li
                            key={i}
                            className={`flex items-center gap-2 ${
                              isLeft ? "md:justify-end" : ""
                            }`}
                          >
                            <span className="text-burnt text-xs md:hidden">◆</span>
                            {!isLeft && (
                              <span className="hidden md:inline text-burnt text-xs">◆</span>
                            )}
                            <span>{s}</span>
                            {isLeft && (
                              <span className="hidden md:inline text-burnt text-xs">◆</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
