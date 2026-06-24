import { motion } from "framer-motion";

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
  "Kens Service Station",
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
  "Total Healthcare Pharmacy",
  "Techtro Knights",
  "Trophy Center",
  "Tiger Gas Station",
  "True Value",
  "Web Terrace SLU",
  "Windward Island Packaging",
];

const individuals = [
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
  "Mr. Guibion Ferdinand",
  "Hon. Jeremiah Norbert",
  "Mr. Jerome St Omer",
  "Mr. Kersheik Charles",
  "Mr. Ludwin Holder",
  "Ms. Cindy Mathurin",
  "Ms. Genefa Augustine",
  "Mrs. Flora Joseph Emmanuel",
  "Ms. Juddy Harlow",
  "Ms. Kervinah Segobin",
  "Micoud Secondary School – Theatre Arts Dept",
  "Ms. Sandra John",
  "Ms. Lenell Malzaire",
  "Ms. Shem Maxwell",
  "Ms. Shera Charles",
  "Ms. Vanessa St. Marie",
  "Ms. Vernessa Cox",
  "Mrs. Deborah Emmanuel",
  "Mrs. Edna Emmanuel-Yarde",
  "Mrs. Firma Sonson",
  "Mrs. Nephritire Ferdinand",
  "Mr. Helian Gabriel",
  "Ms. Natasha Nelson",
  "Ms. Sacha Noel",
  "Ms. Rafati Eugene",
  "Senator Elisha Norbert",
  "Ms. Solange Charlery",
  "Mr. Stephen Martin",
  "Ms. Tamara St. Aimee Emmanuel",
];

const SponsorsSection = () => {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-cream border-t border-teal/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-widest text-burnt border-b border-burnt/20 pb-4 inline-block px-6">
            Our Sponsors
          </h3>
          <p className="font-body text-base md:text-lg text-foreground/75 italic mt-6 max-w-2xl mx-auto leading-relaxed">
            The Class of 2026 extends its heartfelt gratitude to the following businesses
            and individuals whose generosity made this celebration possible. Your support
            has helped shape our journey — thank you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 mt-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background/60 border border-teal/15 p-6 md:p-8 shadow-sm"
          >
            <h4 className="font-display text-2xl font-bold text-teal uppercase tracking-wider mb-1">
              Businesses
            </h4>
            <div className="w-12 h-px bg-burnt mb-5" />
            <ul className="font-body text-sm md:text-[15px] text-foreground/85 space-y-2 columns-1 sm:columns-2 md:columns-1">
              {businesses.map((name) => (
                <li key={name} className="flex items-start gap-2 break-inside-avoid">
                  <span className="text-burnt text-xs mt-1.5">◆</span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background/60 border border-teal/15 p-6 md:p-8 shadow-sm"
          >
            <h4 className="font-display text-2xl font-bold text-teal uppercase tracking-wider mb-1">
              Individuals
            </h4>
            <div className="w-12 h-px bg-burnt mb-5" />
            <ul className="font-body text-sm md:text-[15px] text-foreground/85 space-y-2 columns-1 sm:columns-2 md:columns-1">
              {individuals.map((name) => (
                <li key={name} className="flex items-start gap-2 break-inside-avoid">
                  <span className="text-burnt text-xs mt-1.5">◆</span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display text-lg md:text-xl text-burnt italic mt-12"
        >
          With sincere thanks — Class of 2026
        </motion.p>
      </div>
    </section>
  );
};

export default SponsorsSection;
