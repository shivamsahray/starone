import React from "react";

export default function Products({
    title = "Our Products",
    subtitle = "Explore our range of innovative and sustainable packaging solutions.",
    products = [{
        image: "/products/box-1.png",
        name: "Corrugated Boxes",
        description: "Lightweight, durable, and designed to withstand the rigors of transportation, our corrugated boxes are ideal for packaging goods of all shapes and sizes. Available in customizable dimensions, they offer high storage capacity while ensuring maximum protection."
    },{
        image: "/products/box-2.png",
        name: "Corrugated Sheets & Rolls",
        description: "Our corrugated sheets are versatile and used in various industries for making packing boxes, advertisements, and more. Available in multiple thicknesses and customizable to your needs, these sheets are known for their strength and durability."
    },{
        image: "/products/box-3.png",
        name: "Heavy Duty Corrugated Boxes",
        description: "For heavier loads, our heavy-duty corrugated boxes offer exceptional strength and are perfect for shipping large or fragile items. They are easy to handle and built to endure the toughest transport conditions."
    },{
        image: "/products/box-4.png",
        name: "Die-Cut Boxes",
        description: "Offering superior finishing and customized printing options, our die-cut boxes are ideal for retail packaging. These self-locking boxes are not only space-efficient but also offer a premium look for your products."
    },{
        image: "/products/box-5.png",
        name: "Shoes Boxes",
        description: "Perfect for footwear manufacturers, our shoes boxes are designed to ensure your products arrive safely and in style. Lightweight, durable, and available in a variety of sizes, they help showcase your brand."
    },{
        image: "/products/box-6.png",
        name: "Overlap Boxes",
        description: "Known for their durability and elegant design, our overlap boxes are highly customizable and provide an extra layer of protection for your products."
    },{
        image: "/products/box-7.png",
        name: "Rigid Boxes",
        description: "Rigid boxes are premium packaging solutions made from thick, sturdy paperboard, offering a robust and highly durable form of packaging. They are often used for luxury products, electronics, cosmetics, gifts, and high-end retail items due to their strong, protective nature and elegant presentation."
    },{
        image: "/products/box-8.png",
        name: "Raphe boxes",
        description: "Raphe boxes are one of the most common types of rigid packaging. They are pre-constructed and delivered as fully-formed boxes, rather than flat or foldable. These boxes offer exceptional durability and are often used for high-end products like jewelry, perfumes, and electronics."
    },{
        image: "/products/box-9.png",
        name:"Flap Open Magnetic Boxes",
        description: "Magnetic closure boxes are a type of rigid box that uses magnets to securely close the packaging, offering a high-end, functional design. These boxes are widely used for luxury gift items, high-quality electronics, and premium retail packaging."
    },{
        image: "/products/box-10.png",
        name: "Flat Fold Boxes",
        description: "Flat fold rigid boxes are a popular type of rigid packaging that combines the durability and luxury of traditional rigid boxes with the convenience of being shipped in a flat, unassembled form. These boxes are made from sturdy paperboard but are designed to be folded and easily assembled at the point of use."
    },{
        image: "/products/box-11.png",
        name: "Drawer Style Boxes",
        description: "Drawer boxes are rigid boxes designed to slide open like a drawer. These boxes are often used in retail or premium product packaging, providing an elegant unboxing experience."
    },{
        image: "/products/box-12.png",
        name: "Top & Bottom Boxes",
        description: "Top and bottom rigid boxes are a classic style of rigid packaging consisting of two separate pieces: the top lid and the bottom tray. These boxes are commonly used for packaging products that need extra protection and a high-end presentation."
    }]

}){
    return (
        <section id="products" className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                {/* Products grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-56 object-cover"></img>

                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm">{product.description}</p> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}