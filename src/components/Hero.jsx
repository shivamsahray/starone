
export default function Hero({
    title = "Sustainable Packaging Solutions",
    subtitle = "Custom | Reliable | Eco-friendly",
    description = "We provide innovative packaging solutions tailored to your business needs — designed to protect your products and the planet.",
    ctaPrimary = {label: "Get a Quote", href:"contact"},
    ctaSecondary = {label : "Our Products", href: "products"},
    imageSrc= "hero-image.png",
}){
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* text */}
                <div> 
                <h1 className="text-4xl font-bold text-gray-900 mb-4 lg:text-5xl">
                    {title}
                </h1>
                <h2 className="text-xl text-green-600 font-medium mb-6">
                    {subtitle}
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    {description}
                </p>
                <div className="flex gap-4">
                    <a href={ctaPrimary.href}
                    className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition">
                        {ctaPrimary.label}
                    </a>
                    <a href={ctaSecondary.href}
                    className="border border-greem-600 text-green-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-green-50 transition">
                        {ctaSecondary.label}
                    </a>
                </div>
                </div>

                {/* Image */}
                <div className="flex justify-center lg:justify-end">
                    <img src={imageSrc}
                        alt="Packaging Solutions"
                        className="w-full max-w-md rounded-lg shadow-lg object-cover" />
                </div>

            </div>
        </section>
    )

}