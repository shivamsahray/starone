import React from "react";
import { motion } from "motion/react";

const services = [
  {
    title: "Custom Packaging",
    description: "Tailored designs to suit your brand identity and product needs.",
    icon: "📦",
  },
  {
    title: "Eco-friendly Materials",
    description: "Sustainable and biodegradable packaging options for a greener planet.",
    icon: "🌱",
  },
  {
    title: "Bulk Supply",
    description: "Reliable high-volume packaging supply for all industries.",
    icon: "🚚",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{opacity: 0, y:50}}
              whileInView={{opacity: 1, y:0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: index* .1}}
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
