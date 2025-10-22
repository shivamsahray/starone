import React from "react";
import { Box, Leaf, Truck } from "lucide-react"; // lucide-react icons
import { motion } from "motion/react"

export default function Services({
    title = "Our Services",
    subtitle = "Providing end to end packaging solutions for every need.",
    items = [{
        icon: <Box className="w-8 h-8 text-green-600" />,
        heading: "Custom Packaging Design",
        text: "Tailored solutions that fit your product perfectly while enhancing your brand presence.",
    },{
        icon: <Leaf className="w-8 h-8 text-green-600" />,
        heading: "Eco-friendly Materials",
        text: "Sustainable and bioderable packaging to reduce environmental impact.",
    },{
        icon: <Truck className="w-8 h-8 text-green-600" />,
        heading: "Fast Delivery",
        text: "Efficient production and logistics to ensure on-time delivery worldwide."
    }]
}){ 

    return(
        <section id="services" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                {/* Services grid */}
                <div className="grid gap-10 md:grid-cols-3">
                    {items.map((service, index) => (
                        <motion.div 
                            whileHover={{scale: 1.1}} whileTap={{ scale: 0.9}}
                             key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition" 
                            initial={{opacity:0, y:50}}
                            whileInView={{opacity: 1, y:0}}
                            viewport={{once: true   }}
                            transition={{duration: 0.5, delay: index * .1}}>
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.heading}</h3>
                            <p className="text-gray-600">{service.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )

}