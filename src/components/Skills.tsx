import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cloud, PenTool, Cpu, Globe, Brain } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code2 className="text-purple-400" size={24} />,
            skills: [
                { name: "Python", level: 95, icon: <Brain size={18} /> },
                { name: "JavaScript (ES6+)", level: 90, icon: <Code2 size={18} /> },
                { name: "TypeScript", level: 85, icon: <Code2 size={18} /> },
                { name: "SQL", level: 88, icon: <Database size={18} /> },
                { name: "C", level: 80, icon: <Cpu size={18} /> }
            ]
        },
        {
            title: "Frameworks & Dev",
            icon: <Layout className="text-pink-400" size={24} />,
            skills: [
                { name: "React.js", level: 92, icon: <Globe size={18} /> },
                { name: "Next.js", level: 85, icon: <Globe size={18} /> },
                { name: "Tailwind CSS", level: 95, icon: <PenTool size={18} /> },
                { name: "Framer Motion", level: 88, icon: <Layout size={18} /> },
                { name: "Three.js (Basics)", level: 75, icon: <Cpu size={18} /> }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: <Terminal className="text-indigo-400" size={24} />,
            skills: [
                { name: "Git & GitHub", level: 90, icon: <Terminal size={18} /> },
                { name: "AWS (Cloud)", level: 80, icon: <Cloud size={18} /> },
                { name: "VS Code", level: 95, icon: <Code2 size={18} /> },
                { name: "Figma", level: 85, icon: <PenTool size={18} /> },
            ]
        }
    ];

    const softSkills = [
        "Communication", "Problem Solving", "Team Collaboration",
        "Time Management", "Adaptability", "Critical Thinking",
        "Attention to Detail", "Empathy", "Creativity"
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Expertise</h2>
                    <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Technical Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-purple-500/30 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                {category.icon}
                                <h3 className="text-xl font-bold text-gray-200">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2 text-gray-300">
                                                {skill.icon}
                                                <span className="text-sm font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-purple-400 font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                                            <motion.div
                                                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full relative overflow-hidden"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite] w-full h-full transform -skew-x-12 origin-left"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass p-10 rounded-2xl bg-slate-900/40 border border-white/5 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-200 mb-8">Soft Skills</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                                className="px-6 py-3 rounded-full bg-white/5 border border-purple-500/20 text-indigo-200 text-sm font-medium cursor-default transition-colors"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
