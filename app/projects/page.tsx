import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    tech: string[];
    github?: string;
    live?: string;
}

const ProjectsPage = () => {
    const projectsData: Project[] = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and secure payment integration using Stripe.",
            image: "/favicon.png",
            category: "Full Stack",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Clerk", "Stripe"],
            github: "https://github.com/Gaurang-Khator",
            live: "https://example.com"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Real-time collaborative task management application with role-based access control, notifications, and data persistence using MongoDB.",
            image: "/favicon.png",
            category: "Web App",
            tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Express"],
            github: "https://github.com/Gaurang-Khator",
            live: "https://example.com"
        },
        {
            id: 3,
            title: "AI Content Generator",
            description: "AI-powered content generation tool leveraging OpenAI API for creating blog posts, social media content, and marketing copy with customizable tone.",
            image: "/icons8-github-24.png",
            category: "Generative AI",
            tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Shadcn", "PostgreSQL"],
            github: "https://github.com/Gaurang-Khator",
            live: "https://example.com"
        },
        {
            id: 4,
            title: "Real-time Chat Application",
            description: "Feature-rich chat application with user presence, typing indicators, file sharing, and message history using WebSockets.",
            image: "/favicon.png",
            category: "Real-time App",
            tech: ["React", "Firebase", "Socket.io", "TailwindCSS", "Redux"],
            github: "https://github.com/Gaurang-Khator",
            live: "https://example.com"
        },
       
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4 max-h-[550px]">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-xl pb-2">PROJECTS</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ml-6 h-1" />
            </div>
            <CardContent className="text-white text-md overflow-y-auto custom-scrollbar mb-4">
                <div className="grid grid-cols-2 gap-4">
                    {projectsData.map((project) => (
                        <div 
                            key={project.id}
                            className="border border-zinc-700 rounded-lg overflow-hidden hover:border-blue-500 transition-colors group"
                        >
                            {/* Project Image */}
                            <div className="relative h-32 w-full overflow-hidden bg-zinc-700">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-3 space-y-2">
                                {/* Category Badge */}
                                <div>
                                    <span className="inline-block px-2 py-0.5 bg-blue-600/20 text-blue-400 text-xs font-semibold rounded border border-blue-500/30">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-blue-400 font-semibold text-md group-hover:text-blue-300 transition-colors line-clamp-1">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1">
                                    {project.tech.slice(0, 3).map((tech, idx) => (
                                        <span 
                                            key={idx}
                                            className="px-1.5 py-0.5 bg-zinc-700 text-gray-300 rounded text-xs hover:bg-blue-600/30 hover:text-blue-400 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-gray-400 text-xs">+{project.tech.length - 3}</span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 pt-2">
                                    {project.github && (
                                        <Button 
                                            size="sm"
                                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm h-6 flex-1 p-1"
                                            asChild
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                                                <Github size={12} /> Code
                                            </a>
                                        </Button>
                                    )}
                                    {project.live && (
                                        <Button 
                                            size="sm"
                                            className="bg-green-600 hover:bg-green-700 text-white text-sm h-6 flex-1 p-1"
                                            asChild
                                        >
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                                                <ExternalLink size={12} /> Live
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectsPage;