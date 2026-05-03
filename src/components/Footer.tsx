import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/DiloLogoTrans.png" alt="Dilo Logo" className="h-14 w-auto" />
              <h3 className="font-display text-2xl font-bold">
                DILO<span className="text-sage-300">.</span>
              </h3>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Customizable, comfortable apparel for nurses who want to express their personal style outside the hospital.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">Shop</h4>
            <ul className="space-y-2.5">
              {[
                "Crewnecks",
                "Cardigans",
                "Zip Up Sweaters",
                "Dry Fit T-Shirts"
              ].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", to: "/about" },
                { label: "Custom Designs", to: "/custom" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">Connect</h4>
            <ul className="space-y-2.5">
              {["Instagram", "Facebook", "Twitter"].map((item) => (
                <li key={item}>
                  <span className="text-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-xs opacity-50">© 2026 Dilo Apparels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
