import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Loader2, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="py-20 relative bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
                    <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/5 bg-slate-900/40 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 resize-none"
                                    placeholder=""
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-white transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-[0_4px_14px_0_rgba(147,51,234,0.39)]"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : submitted ? (
                                    <span>Message Sent!</span>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Card 1: Contact Information */}
                        <div className="glass p-8 rounded-2xl border border-white/5 bg-slate-900/40">
                            <h3 className="text-xl font-bold text-purple-400 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                                        <p className="text-white font-medium">+91 9332880661</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                                        <p className="text-white font-medium">soumyachk1@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/soumya-chakraborty-102b24399" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-purple-400 transition-colors">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Promo */}
                        <div className="glass p-8 rounded-2xl border border-white/5 bg-slate-900/40">
                            <h3 className="text-lg font-bold text-purple-400 mb-2">Let's Create Something Amazing</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        {/* Card 3: Socials */}
                        <div className="glass p-6 rounded-2xl border border-white/5 bg-slate-900/40 flex items-center justify-between">
                            <span className="text-gray-400 text-sm">Connect with me</span>
                            <div className="flex space-x-3">
                                <a href="https://www.linkedin.com/in/soumya-chakraborty-102b24399" target="_blank" rel="noreferrer" className="p-2 bg-purple-500/10 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="https://github.com/soumyachk101" target="_blank" rel="noreferrer" className="p-2 bg-purple-500/10 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.instagram.com/soumya_chk" target="_blank" rel="noreferrer" className="p-2 bg-purple-500/10 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>

                    </motion.div>
                </div>

                <footer className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>&copy; 2026 Soumya Chakraborty. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
