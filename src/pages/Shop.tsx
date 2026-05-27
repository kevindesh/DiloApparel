import { useState } from "react";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { Link } from "react-router-dom";


const products = [
  { id: 9, name: "Cozy Crewneck", price: 40, color: "Navy", category: "Crewnecks", image: "/Home Page Images/product_front_transparent.png", desc: "Comfortable crewneck perfect for casual wear. Fully customizable with your own design." },
  { id: 10, name: "Cardigan Sweater", price: 45, color: "Gray", category: "Cardigans", image: "/Home Page Images/CardiganFrontTrans.png", desc: "Versatile cardigan for layering. Customize colors and add your personal touch." },
  { id: 11, name: "Zip Up Sweater", price: 45, color: "Sage", category: "Zip Up Sweaters", image: "/Home Page Images/ZipperFrontTrans.png", desc: "Cozy zip-up sweater for everyday comfort. Make it uniquely yours with customization." },
  { id: 13, name: "Performance Tee", price: 28, color: "White", category: "Dry Fit T-Shirts", image: "/TshirtRealTrans.png", desc: "Breathable dry fit tee for active days. Customize with colors, logos, or designs." },
];

const filters = [
  "All",
  "Crewnecks",
  "Cardigans",
  "Zip Up Sweaters",
  "Dry Fit T-Shirts",
];

const Shop = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">Shop Our Collection</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Comfortable apparel designed for nurses. Every piece is fully customizable — choose colors, patterns, logos, and designs that express your personality.</p>
          </div>

          <div className="bg-sage-50 rounded-lg p-8 mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Palette size={20} className="text-primary" />
              <h3 className="font-semibold text-foreground">All Items Are Customizable</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">Add embroidery, screen printing, custom colors, patterns, and more. Want help designing? <Link to="/custom" className="text-primary font-semibold hover:underline">Visit our custom design studio.</Link></p>
          </div>

          <div className="flex justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full ${product.category === "Cardigans" ? "object-contain" : product.category === "Dry Fit T-Shirts" ? "object-contain object-bottom scale-95 translate-y-2" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 flex items-center justify-center">
                    <Link to="/custom" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary text-primary-foreground px-4 py-2 rounded-md text-xs font-semibold">
                      Customize
                    </Link>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{product.desc}</p>
                <p className="text-xs text-primary font-semibold mb-2">Fully Customizable</p>
                <p className="text-sm font-semibold text-foreground">From ${product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
  );
};

export default Shop;
