"use client";

import React from "react";

interface ContactSectionProps {
    formData: {
        name: string;
        email: string;
        message: string;
    };
    isSubmitting: boolean;
    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ContactSection({ formData, isSubmitting, onSubmit, onChange }: ContactSectionProps) {
    const handleFormSubmit = (e: React.FormEvent) => {
        console.log('ContactSection form submitted!');
        onSubmit(e);
    };

    return (
        <section className="w-full py-12 px-4" style={{ pointerEvents: 'auto' }}>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Have a project in mind? Drop me a message and let&apos;s bring your ideas to life.
                    </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6 relative z-50" style={{ pointerEvents: 'auto' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="relative">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="John Doe"
                                style={{ pointerEvents: 'auto' }}
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                                style={{ pointerEvents: 'auto' }}
                            />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="relative">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={onChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Tell me about your project..."
                            style={{ pointerEvents: 'auto' }}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center" style={{ pointerEvents: 'auto' }}>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            onClick={() => console.log('Submit button clicked!')}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2 cursor-pointer"
                            style={{ pointerEvents: 'auto' }}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
