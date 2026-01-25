import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative bg-slate-950 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-80 h-[28rem] md:w-96 md:h-[32rem]">
                            <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500/30 shadow-[0_0_60px_rgba(99,102,241,0.3)] bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
                            <img
                                src="/images/Profile Photo.jpg"
                                alt="Soumya Chakraborty"
                                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-xl shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Bio Card */}
                        <div className="glass p-8 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Creative & Detail-Oriented</h3>
                            <p className="text-gray-300 leading-relaxed">
                                I'm a passionate 2nd Year B.Tech CSE Student at NSHM Knowledge Campus. I love exploring the intersection of design and technology, creating user-centric web applications that not only look great but function seamlessly. My journey is driven by curiosity and a constant desire to learn new technologies.
                            </p>
                        </div>

                        {/* Location Card */}
                        <div className="glass p-6 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors">
                            <h3 className="text-xl font-bold text-gray-200 mb-3">Location</h3>
                            <div className="flex items-center text-gray-400">
                                <MapPin className="text-pink-500 mr-2" size={20} />
                                <span>Kolkata, India</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
