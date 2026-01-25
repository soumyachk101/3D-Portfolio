import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

interface ExperienceItem {
    company: string;
    role: string;
    type: string;
    desc: string;
    date: string;
    certificate?: string;
}

const Experience = () => {
    const experiences: ExperienceItem[] = [
        {
            company: "AWS",
            role: "AWS Media & Entertainment Cloud Engineering",
            type: "Internship",
            desc: "Focused on cloud engineering solutions for media workflows.",
            date: "2025",
        },
        {
            company: "AICTE",
            role: "Data Analytics Process Automation",
            type: "Virtual Internship",
            desc: "Worked on real-world automation challenges using industry tools.",
            date: "2025",
            certificate: "/certificates/Data Analytics Process Automation Virtual Internship By AICTE.pdf"
        },
        {
            company: "IBM SkillsBuild",
            role: "Data Analytics & Business Intelligence",
            type: "Internship",
            desc: "Built solutions for data visualization and business insights.",
            date: "2025",
            certificate: "/certificates/Data Analytics & Business Intelligence Lab_ Explore, Analyze & Build Real-World Solutions By IBM Skill Build.pdf"
        },
        {
            company: "CodeAlpha",
            role: "Python Programming Internship",
            type: "Internship",
            desc: "Developed robust Python applications and solved algorithmic challenges.",
            date: "2024"
        }
    ];

    return (
        <section id="experience" className="py-20 relative bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2"></div>

                            <div className={`md:flex items-center justify-between mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 md:-translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                                <div className="md:w-5/12"></div>

                                <div className="md:w-5/12 glass p-6 rounded-xl hover:bg-white/5 transition-all border-l-4 border-l-indigo-500 relative">
                                    <span className="absolute -left-3 top-6 w-3 h-3 bg-indigo-500 rotate-45 hidden md:block"></span>

                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                                    </div>

                                    <div className="flex items-center text-sm text-indigo-300 mb-3 space-x-3">
                                        <span className="flex items-center"><Briefcase size={14} className="mr-1" /> {exp.company}</span>
                                        <span className="flex items-center"><Calendar size={14} className="mr-1" /> {exp.type}</span>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-4">{exp.desc}</p>

                                    {exp.certificate && (
                                        <a
                                            href={exp.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-pink-400 transition-colors border border-indigo-500/30 px-3 py-1.5 rounded-full hover:bg-indigo-500/10"
                                        >
                                            View Certificate <ExternalLink size={12} className="ml-1" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
