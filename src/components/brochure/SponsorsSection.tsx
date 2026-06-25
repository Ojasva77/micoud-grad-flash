import { motion } from "framer-motion";

const platinum = ["SSDF", "Hon. Jeremiah Norbert"];
const gold = [
  "National Lotteries Authority",
  "Class of 1993",
  "Proven Bank",
  "Dawn Flood",
  "Heineken St. Lucia",
];
const silver = ["Designs Plus", "Coconut Bay", "Sacha Noel", "Trophy Center"];

const businesses = [
  "B&B Money Savers Inc.",
  "BJ Ambrose & Associates",
  "Black Radiance Hair Studio",
  "Caribbean Metals Limited",
  "Coconut Bay Resort & Spa",
  "DD Auto Imports",
  "Deals2U",
  "Designs Plus",
  "Digicel",
  "Ferrands Dairy",
  "Francis Fish and Seafood",
  "Freezone Management Authority",
  "Forest Springs",
  "Harris Paints",
  "Heineken St Lucia",
  "Hensbert Designs",
  "Hewanorra Air Cargo Services (HACS)",
  "Isaac & Joseph Enterprises",
  "J & B Enterprise",
  "Kens Service Station",
  "Remus Driving School",
  "Knight Meds",
  "Laborie Credit Union",
  "LAVE",
  "Lazarus Funeral",
  "Manicures and Pedicures",
  "Momé's Cuisine",
  "Mon Repos Cooperative Credit Union",
  "National Lotteries Authority",
  "MSS PE Department",
  "Proven Bank",
  "Paradise Moss and Herbs",
  "Republic Bank Limited",
  "Southern Taxi Association",
  "St Lucia Social Development Fund",
  "St. Lucia Volleyball Association",
  "Total Healthcare Pharmacy",
  "Techtro Knights",
  "Trophy Center",
  "Tiger Gas Station",
  "True Value",
  "Web Terrace SLU",
  "Windward Island Packaging",
];

const individuals = [
  "Senator Elisha Norbert",
  "Mr. Guibion Ferdinand",
  "Mrs. Nephritire Ferdinand",
  "Mrs. Flora Emmanuel Joseph",
  "Mr. Al Jamal Charles",
  "Mr. Ali Charles",
  "Mr. Brenner Camille",
  "Mr. Dave Fanus",
  "Ms. Amber Philbert",
  "Ms. Dawn Flood",
  "Ms. Edisha Jn. Charles",
  "Mrs. Ermine Deroses",
  "Mr. Filtus Holder",
  "Ms. Gianetti George",
  "Mr. Jerome St Omer",
  "Mr. Jullian Henry",
  "Mr. Kersheik Charles",
  "Mr. Ludwin Holder",
  "Ms. Cindy Mathurin",
  "Ms. Genefa Augustine",
  "Ms. Juddy Harlow",
  "Ms. Kervinah Segobin",
  "Micoud Secondary School – Theatre Arts Dept",
  "Mr. Nick Jacob",
  "Mr. Ojasva Pandey",
  "Ms. Sandra John",
  "Ms. Lenell Malzaire",
  "Ms. Shem Maxwell",
  "Ms. Shera Charles",
  "Ms. Vanessa St. Marie",
  "Ms. Vanessa Cox",
  "Mrs. Deborah Emmanuel",
  "Mrs. Edna Emmanuel-Yarde",
  "Mrs. Firma Sonson",
  "Mr. Hilian Gabriel",
  "Ms. Natasha Nelson",
  "Ms. Sacha Noel",
  "Ms. Rafati Eugene",
  "Ms. Solange Charlery",
  "Mr. Stephen Martin",
  "Ms. Tamara St. Aimee Emmanuel",
];

const SponsorsSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-cream border-t border-teal/10">
      <div className="max-w-5xl mx-auto">
        {/* Ornamental double frame */}
        <div className="border border-teal/20 p-1">
          <div className="border-2 border-teal p-5 sm:p-8 md:p-12 relative">
            {/* Corner ornaments */}
            <div className="absolute top-1.5 left-1.5 w-5 h-5 md:w-8 md:h-8 border-t-2 border-l-2 border-burnt" />
            <div className="absolute top-1.5 right-1.5 w-5 h-5 md:w-8 md:h-8 border-t-2 border-r-2 border-burnt" />
            <div className="absolute bottom-1.5 left-1.5 w-5 h-5 md:w-8 md:h-8 border-b-2 border-l-2 border-burnt" />
            <div className="absolute bottom-1.5 right-1.5 w-5 h-5 md:w-8 md:h-8 border-b-2 border-r-2 border-burnt" />

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-14"
            >
              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-widest text-burnt">
                Our Sponsors
              </h3>
              <div className="flex items-center justify-center gap-3 md:gap-4 mt-4">
                <div className="h-px w-10 md:w-16 bg-burnt" />
                <span className="text-burnt text-lg md:text-xl">◈</span>
                <div className="h-px w-10 md:w-16 bg-burnt" />
              </div>
              <p className="font-body text-sm md:text-base text-foreground/75 italic mt-6 max-w-2xl mx-auto leading-relaxed">
                The Class of 2026 extends its heartfelt gratitude to the following sponsors
                whose generosity made this celebration possible. Your support has helped shape
                our journey — thank you.
              </p>
            </motion.div>

            {/* Tiered Sponsors — Platinum elevated center */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-14 md:mb-20">
              {/* Gold (left on desktop, 2nd on mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center order-2 md:order-1 flex flex-col items-center"
              >
                <div className="mb-3">
                  <svg className="w-9 h-9 md:w-10 md:h-10 text-burnt/80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L9 9H2L7 14L5 21L12 17L19 21L17 14L22 9H15L12 2Z" />
                  </svg>
                </div>
                <h4 className="font-display text-xl md:text-2xl italic font-semibold text-teal mb-3">
                  Gold
                </h4>
                <div className="w-10 h-px bg-burnt/40 mb-4" />
                <ul className="font-body text-sm md:text-[15px] text-teal/90 font-medium space-y-1.5">
                  {gold.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Platinum (center, elevated) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center order-1 md:order-2 flex flex-col items-center md:-translate-y-4"
              >
                <div className="relative mb-5">
                  <div className="bg-teal p-4 rounded-full border-4 border-burnt shadow-lg">
                    <svg
                      className="w-9 h-9 md:w-10 md:h-10 text-cream"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-display text-2xl md:text-3xl font-bold text-teal tracking-tight mb-3 uppercase">
                  Platinum
                </h4>
                <div className="border-t border-b border-burnt/40 py-3 md:py-4 px-5 md:px-6">
                  <ul className="font-display text-lg md:text-xl text-teal font-semibold space-y-1">
                    {platinum.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Silver */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center order-3 flex flex-col items-center"
              >
                <div className="mb-3">
                  <svg className="w-9 h-9 md:w-10 md:h-10 text-burnt/60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L9 9H2L7 14L5 21L12 17L19 21L17 14L22 9H15L12 2Z" />
                  </svg>
                </div>
                <h4 className="font-display text-xl md:text-2xl italic font-semibold text-teal mb-3">
                  Silver
                </h4>
                <div className="w-10 h-px bg-burnt/40 mb-4" />
                <ul className="font-body text-sm md:text-[15px] text-teal/90 font-medium space-y-1.5">
                  {silver.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Ornamental divider */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-14">
              <div className="h-px flex-1 bg-teal/20" />
              <span className="text-burnt/60 text-[10px] md:text-xs tracking-[0.3em] uppercase font-display">
                With Gratitude
              </span>
              <div className="h-px flex-1 bg-teal/20" />
            </div>

            {/* Businesses & Individuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:border-l md:border-burnt/20 md:pl-8"
              >
                <h4 className="font-display text-base md:text-lg font-bold uppercase tracking-widest text-teal mb-5 flex items-center gap-3">
                  <span className="w-2 h-2 bg-burnt rotate-45" />
                  Businesses
                </h4>
                <ul className="font-body text-xs sm:text-sm text-teal/85 leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {businesses.map((name) => (
                    <li key={name} className="break-inside-avoid">
                      {name}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:border-l md:border-burnt/20 md:pl-8"
              >
                <h4 className="font-display text-base md:text-lg font-bold uppercase tracking-widest text-teal mb-5 flex items-center gap-3">
                  <span className="w-2 h-2 bg-burnt rotate-45" />
                  Individuals
                </h4>
                <ul className="font-body text-xs sm:text-sm text-teal/85 leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {individuals.map((name) => (
                    <li key={name} className="break-inside-avoid">
                      {name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Footer motif */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="inline-block border-t border-teal/20 pt-4 px-8 md:px-12">
                <p className="font-display text-base md:text-lg text-burnt italic">
                  With sincere thanks — Class of 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
