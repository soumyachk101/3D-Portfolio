import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            desc: "My personal 3D portfolio built with React, Three.js, and Framer Motion.",
            tags: ["React", "Three.js", "Tailwind"],
            image: "/images/project-portfolio-real.png",
            github: "#",
            live: "#"
        },
        {
            title: "ShopEasy E-commerce",
            desc: "Full-stack shopping platform with cart, payments, and user auth.",
            tags: ["MERN Stack", "Redux", "Stripe"],
            image: "/images/project-ecommerce-new.png",
            github: "#",
            live: "#"
        },
        {
            title: "Weather Buddy",
            desc: "Real-time weather dashboard using OpenWeatherMap API.",
            tags: ["JS", "API", "CSS"],
            image: "/images/project-weather-new.png",
            github: "#",
            live: "#"
        },
        {
            title: "TaskFlow",
            desc: "Productivity app with drag-and-drop task management.",
            tags: ["React", "LocalStorage", "DnD"],
            image: "/images/project-todo.png",
            github: "#",
            live: "#"
        },
        {
            title: "Country Finder",
            desc: "A tool to search for countries and view their details.",
            tags: ["React", "API", "CSS"],
            image: "/images/project-country.png",
            github: "#",
            live: "#"
        },
        {
            title: "StockVolatility",
            desc: "Analyze stock market volatility with real-time data.",
            tags: ["React", "Finance", "API"],
            image: "/images/project-stock.png",
            github: "#",
            live: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400">
                        A selection of things I've built.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-xl overflow-hidden group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300?text=${project.title}`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a href={project.github} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-indigo-900/30 text-indigo-300 border border-indigo-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
