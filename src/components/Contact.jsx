import React from "react";

export default function Contact({
    title = "Get in Touch",
    subtitle = "Have a question or need a quote? Fill out the form and we'll get back to you as soon as possible.",
    contactInfo = {
        address: "Plot No. 89/278, Daultabad Industrial Area, Daultabad Road, Gurugram",
        phone: "+91 9540082525",
        email: "s.1packaging@gmail.com",
    },
}){
    return (
        <section id="contact" className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2">
                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 mb-8">{subtitle}</p>
                    <ul className="space-y-4">
                        <li>
                            <span className="font-semibold">Address: </span>{contactInfo.address}
                        </li>
                        <li>
                            <span className="font-semibold">Phone: </span> {contactInfo.phone}
                        </li>
                        <li>
                            <span className="font-semibold">Email: </span> {contactInfo.email}
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <form className="bg-white p-8 rounded-lg shadow-md space-y-6" action="https://formspree.io/f/xnngknez" method="POST">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                            Name
                        </label>
                        <input id="name" name="name" type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-md p-2 focus:border-green-600 focus:ring-green-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                            Email
                        </label>
                         <input id="email" type="email" placeholder="Your Email" name="email" className="w-full border border-gray-300 rounded-md p-2 focus:border-green-600 focus:ring-green-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="number">Phone No.</label>
                        <input id="number" type="number" placeholder="Your Contact Number" className="w-full border border-gray-300 rounded-md p-2 focus:border-green-600 focus:ring-green-100" name="phone" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="message">
                            Message
                        </label>
                        <textarea name="message" id="message" rows={4} placeholder="Tell us about your project..." className="w-full border border-gray-300 rounded-md p-2 focus:border-green-600 focus:ring-green-100" />
                        <div className="pt-5">
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}