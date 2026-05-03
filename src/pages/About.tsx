import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import fabricTexture from "@/assets/fabric-texture.jpg";
import customTeam from "@/assets/custom-team.jpg";

const About = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              About Dilo Apparels
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              We believe nurses deserve apparel that's as unique and hardworking as they are. Founded to create comfortable, customizable clothing for nurses' personal lives, we focus on quality fabrics, thoughtful design, and the ability to express individuality.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.img
              src={customTeam}
              alt="Our team"
              className="rounded-xl w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To create comfortable, high-quality, fully customizable apparel that lets nurses express their personal style outside the hospital.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every piece is designed with comfort in mind and built to last. We believe in quality first, with premium fabrics and attention to detail — because you deserve clothes that feel as good as they look.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Quality First</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We source premium fabrics that are soft, breathable, and built to last. Every piece is designed for comfort and durability, and fully customizable to match your unique style.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { num: "100%", label: "Customizable" },
                  { num: "4.9★", label: "Average rating" },
                  { num: "50+", label: "Color options" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-bold text-primary">{stat.num}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.img
              src={fabricTexture}
              alt="Premium fabric"
              className="rounded-xl w-full order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
