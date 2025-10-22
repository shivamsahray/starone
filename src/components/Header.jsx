import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Header({
    companyName = "STARONE PACKAGING",
    tagline = "Sustainable · Custom · Reliable",
    logosrc = 'image.png',
    links = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/products", label: "Products" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ],
    cta = {label: "Get a Quote", href: "contact"}
}){
    const [open, setOpen] = useState(false);

    const initials = companyName
        .split(" ")
        .map((w) => w[0])
        .slice(0,2)
        .join("")
        .toUpperCase();

    return (
        <header className="bg-white shadow-sm sticky top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/">
                <div className="flex items-center gap-3">
                    <img
                        src={logosrc}
                        alt={`${companyName} logo`}
                        className="w-12 h-12 object-contain"/>
                    <div>
                        <h1 className="text-lg font-semibold">{companyName}</h1>
                        <p className="text-xs text-gray-500">{tagline}</p>
                    </div>
                </div>
                </a>

                {/* Desktop mode */}
                <nav className="hidden md:flex gap-6 items-center text-sm">
                    {links.map((l) => {
                        return (
                            <Link key={l.href} to={l.href} className="block ">
                                {l.label}
                            </Link>
                        )
                    })}
                    {/* <a href={cta.href} className="ml-2 bg-green-600 text-gray-100 px-4 py-2 rounded-md text-sm">{cta.label}</a> */}
                    <Link to='/contact' className="ml-2 bg-green-600 text-gray-100 px-4 py-2 rounded-md text-sm">{cta.label}</Link>
                </nav>


                {/* mobile mode */}

                <div className="md:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-label="Toggle menu"
                        className="text-gray-600 focus:ouline-none"
                        > {open ? "x" : "≡"}</button>
                </div>
            </div>

            {/* mobile menu panel */}
            {open && (
                <div className="md:hidden border-t">
                    <div className="px-6 py-4 space-y-3">
                        {links.map((l) => {
                            return <Link key={l.href} href={l.href} className="block" onClick={() => setOpen(false)}>{l.label}</Link>
                        })}
                        <a href={cta.href} className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-md">{cta.label}</a>
                    </div>
                </div>
            )}
        </header>
    )
}