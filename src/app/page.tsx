"use client"
import React from 'react';

const HomePage = () => {
    return (
        <>
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-indigo-600">EduPortal</h1>
                    <div className="space-x-4 flex items-center">
                        <a href="#home" className="py-2 px-4 rounded-full font-medium text-indigo-600 hover:bg-gray-100 transition-colors">Home</a>
                        <a href="/addschool" className="py-2 px-4 rounded-full font-medium text-gray-600 hover:bg-gray-100 transition-colors">Add School</a>
                        <a href="/showschools" className="py-2 px-4 rounded-full font-medium text-gray-600 hover:bg-gray-100 transition-colors">Show Schools</a>
                        <a href="https://github.com/tusharathub" target='_blank' className="py-2 px-4 rounded-full font-medium text-gray-600 hover:bg-gray-100 transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section id="home" className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-b-3xl p-16 text-center shadow-xl mb-12">
                    <div className="container mx-auto">
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                            Streamline Your School Management
                        </h2>
                        <p className="text-xl md:text-2xl font-light mb-8 opacity-90 max-w-3xl mx-auto">
                            Effortlessly manage school data, from student enrollment to administrative insights, all in one place.
                        </p>
                        <a href="#add-school" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
                            Get Started Today
                        </a>
                    </div>
                </section>

                {/* Feature Cards Section */}
                <section id="features" className="container mx-auto p-8 py-12">
                    <h3 className="text-3xl font-bold text-center mb-10">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Add Data */}
                        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-semibold mb-2">Add School Data</h4>
                            <p className="text-gray-500">
                                Easily upload new school information including contact details, addresses, and images.
                            </p>
                        </div>
                        {/* Card 2: View Data */}
                        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-semibold mb-2">View Existing Data</h4>
                            <p className="text-gray-500">
                                Browse and search through all registered schools with a simple, responsive interface.
                            </p>
                        </div>
                        {/* Card 3: Contact */}
                        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m0-2a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 002 2h0a2 2 0 002-2v-4a2 2 0 012-2z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-semibold mb-2">Get in Touch</h4>
                            <p className="text-gray-500">
                                Reach out to our support team for help or to provide feedback on our service.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="container mx-auto p-8 py-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
                    <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
                        We would love to hear from you. Follow us on our social media to stay updated.
                    </p>
                    <a href="https://x.com/tushar_nerd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
                        <span>Follow us on X</span>
                    </a>
                </section>
            </main>
        </>
    );
};

export default HomePage;
