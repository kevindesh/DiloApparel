import { motion } from "framer-motion";
import { Palette, Users, MessageSquare, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import customTeam from "@/assets/custom-team.jpg";
import flatlay from "@/assets/product-scrubs-flatlay.jpg";

const steps = [
  { icon: MessageSquare, title: "Tell Us Your Vision", desc: "Share your colors, patterns, logos, and design ideas." },
  { icon: Send, title: "Order Confirmation", desc: "We'll shoot you a text confirming your order and any changes that might be necessary." },
  { icon: Users, title: "Pay, Receive and Enjoy", desc: "Get your custom creation, ready to wear." },
];

const options = [
  "Custom colors & color matching",
  "Logo & screen printing",
  "Custom patterns & graphics",
  "Personalized names & initials",
  "Mix and match styles",
  "Reorder anytime with saved designs",
];

const CustomDesigns = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={customTeam} alt="Custom team scrubs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-background mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Custom Designs
          </motion.h1>
          <motion.p
            className="text-background/80 text-lg max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Design apparel that's truly you. Customize colors, patterns, logos, and more to create something unique.
          </motion.p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={24} className="text-primary" />
                </div>
                <div className="text-xs font-bold text-accent mb-2">Step {i + 1}</div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 lg:py-28 bg-sage-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Make It Personal</h2>
              <ul className="space-y-4">
                {options.map((opt) => (
                  <li key={opt} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{opt}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-sage-500 transition-colors mt-8"
              >
                Request a Quote
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={flatlay} alt="Custom scrubs options" className="rounded-xl w-full" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomDesigns;
