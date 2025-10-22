import { motion } from 'motion/react'

export default function WhyChooseUs({
    title = "Why Choose Us",
    subtitle = "We combine innovation, quality, and customer-focused service to deliver the best packaging solutions.",
    features = [
    {
      icon: "♻️",
      heading: "Eco-Friendly Materials",
      text: "We use recyclable and biodegradable materials to help protect our planet.",
    },
    {
      icon: "🎨",
      heading: "Custom Designs",
      text: "Personalized packaging tailored to your brand and product specifications.",
    },
    {
      icon: "⚡",
      heading: "Fast Turnaround",
      text: "Quick production and delivery times without compromising on quality.",
    },
    {
      icon: "🏆",
      heading: "High Quality",
      text: "Strict quality control to ensure every piece meets your standards.",
    },
    {
      icon: "💬",
      heading: "Responsive Support",
      text: "Our team is always ready to help with any questions or special requests.",
    },
    {
      icon: "💰",
      heading: "Competitive Pricing",
      text: "Affordable solutions without sacrificing quality or service.",
    },
  ],
}){
    return (
        <section id="why-choose-us" className="bg-white py-16">
            <div className="mx-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                          initial={{opacity: 0, y:50}}
                          whileInView={{opacity: 1, y:0}}
                          viewport={{once: true}}
                          transition={{duration: 0.5, delay: index* 0.1}}
                           key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{feature.heading}</h3>
                            <p className="text-gray-600 text-sm">{feature.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}