import { Link } from "react-router-dom";

export default function Footer({
    companyName = "STARONE PACKAGING",
    logoSrc = "/image.png",
    links = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/products", label: "Products" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ],
    contactInfo = {
        address: "Plot No. 89/278, Daultabad Industrial Area, Daultabad Road, Gurugram",
        phone: "+91 9540082525",
        email: "s.1packaging@gmail.com",
    }
}){
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
                {/* Logo & Company Info */}
                <div>
                    {logoSrc ? (
                        <img
                        src={logoSrc}
                        alt={`${companyName} logo`}
                        className="w-20 h-20 object-contain mb-4" />
                    ) : (
                        <h2 className="text-2xl font-bold text-white">{companyName}</h2>
                    )}

                    <p className="text-gray-400 text-sm">
                        Delivering eco-friendly, high-quality packaging solutions for all your business needs.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link key={link.href} to={link.href} className="hover:text-green-600 ">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Contact Info */}

                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li>{contactInfo.address}</li>
                        <li>{contactInfo.phone}</li>
                        <li>{contactInfo.email}</li>
                    </ul>
                </div>
            </div>


            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
                 © 2016 {companyName}. All rights reserved.
            </div>
        </footer>
    )
}