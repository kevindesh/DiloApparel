import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Heart, Droplets } from "lucide-react";
import type { Easing } from "framer-motion";

import flatlay from "@/assets/product-scrubs-flatlay.jpg";
import fabricTexture from "@/assets/fabric-texture.jpg";
import customTeam from "@/assets/custom-team.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const features = [
  { icon: Shield, title: "Premium Quality", desc: "High-quality fabrics designed for everyday comfort and durability." },
  { icon: Zap, title: "Fully Customizable", desc: "Design your own look with custom colors, patterns, logos, and embroidery." },
  { icon: Heart, title: "Comfort First", desc: "Soft, breathable materials perfect for relaxing or casual outings." },
  { icon: Droplets, title: "Easy to Care For", desc: "Machine washable fabrics that maintain their look through countless wears." },
];

const categories = [
  { name: "Crewnecks", image: "/Home Page Images/product_front_transparent.png" },
  { name: "Cardigans", image: "/Home Page Images/CardiganFrontTrans.png" },
  { name: "Zip Up Sweaters", image: "/Home Page Images/ZipperFrontTrans.png" },
  { name: "Dry Fit T-Shirts", image: "/TshirtRealTrans.png" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/HeroImage.png" alt="Healthcare professional in Dilo scrubs" className="w-full h-full object-cover object-[75%_center] md:object-top" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-sage-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Nurse Apparel
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.1] mb-6">
              Comfort & Style <br />Made <br />
              <span className="text-coral-400">Personal</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-background/80 text-lg md:text-xl mb-8 max-w-md leading-relaxed">
              Customizable apparel designed for nurses who want comfort and style outside the hospital. Express your personality.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-sage-500 transition-colors"
              >
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/custom"
                className="inline-flex items-center gap-2 border border-background/30 text-background px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-background/10 transition-colors"
              >
                Custom Designs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Shop by Style</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Choose your favorite piece and customize it to match your personality.</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link to="/shop" className="group block relative aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                  <img src={cat.image} alt={cat.name} className={`w-full h-full ${cat.name === "Dry Fit T-Shirts" ? "object-contain object-bottom scale-95 translate-y-2" : "object-cover"} group-hover:scale-105 transition-transform duration-500`} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                    <h3 className="font-display text-lg lg:text-xl font-semibold text-background">{cat.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-sage-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img src={flatlay} alt="Scrubs collection" className="rounded-lg w-full aspect-square object-cover" loading="lazy" />
                <img src={fabricTexture} alt="Premium fabric texture" className="rounded-lg w-full aspect-square object-cover mt-8" loading="lazy" />
              </div>
            </motion.div>
            <div>
              <motion.h2
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Designed for Comfort
              </motion.h2>
              <motion.p
                className="text-muted-foreground mb-10 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Every piece is crafted with nurses in mind. Quality fabrics, thoughtful design, and endless customization options.
              </motion.p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <f.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">{f.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={customTeam} alt="Custom team scrubs" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-background mb-4">
              Make It Uniquely Yours
            </h2>
            <p className="text-background/80 text-lg mb-8 max-w-lg mx-auto">
              Customize colors, add your own designs, logos, or patterns. Create apparel that truly represents you.
            </p>
            <Link
              to="/custom"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">What Nurses Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah K.", role: "ICU Nurse", text: "Finally comfortable apparel I can wear on my days off. The customization options are amazing - I got my favorite colors!" },
              { name: "James R.", role: "ER Nurse", text: "Love that I can express my personality outside of work. The quality is outstanding and the fit is perfect." },
              { name: "Maria L.", role: "Nursing Student", text: "Beautiful pieces that feel great. I customized my crewneck with my name and it looks professional and personal." },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-card border border-border rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-coral-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
