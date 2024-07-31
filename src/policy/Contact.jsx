import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-6">
                    <p>Business Name: Tanya kapoor</p>
                    <p>Phone Number: <a href="tel:+918837827095" className="text-blue-500">+918837827095</a></p>
                    <p>Email: <a href="mailto:Kapoorghanishtha2005@gmail.com" className="text-blue-500">Kapoorghanishtha2005@gmail.com</a></p>
                    <p>The website <a href="https://urbancartproj.netlify.app/" className="text-blue-500">https://urbancartproj.netlify.app/</a> is owned and operated by Tanya Kapoor ("Company"), a proprietorship firm with its registered office at 2/13, nehru colony, amritsar, 143001.</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
