import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
}

const Projects = () => {
    const projectsData: Project[] = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and secure payment integration using Stripe.",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Clerk", "Stripe"],
            github: "https://github.com/Gaurang-Khator",
            live: "https://example.com"
        },
        {
            title: "Task Management App",
            description: "Real-time collaborative task management application with role-based access control, notifications, and data persistence using MongoDB.",
            tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Express"],
            github: "https://github.com/Gaurang-Khator",
            live: "https://example.com"
        },
        {
            title: "AI Content Generator",
            description: "AI-powered content generation tool leveraging OpenAI API for creating blog posts, social media content, and marketing copy with customizable tone.",
            tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Shadcn", "PostgreSQL"],
            github: "https://github.com/Gaurang-Khator",
            live: "https://example.com"
        },
        {
            title: "Real-time Chat Application",
            description: "Feature-rich chat application with user presence, typing indicators, file sharing, and message history using WebSockets.",
            tech: ["React", "Firebase", "Socket.io", "TailwindCSS", "Redux"],
            github: "https://github.com/Gaurang-Khator",
            live: "https://example.com"
        },
        {
            title: "Portfolio Analytics Dashboard",
            description: "Interactive dashboard for tracking investment portfolio performance with real-time data visualization and financial metrics.",
            tech: ["Next.js", "Chart.js", "API Integration", "Tailwind CSS", "TypeScript"],
            github: "https://github.com/Gaurang-Khator",
            live: "https://example.com"
        }
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4 max-h-[550px]">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-xl pb-2">PROJECTS</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ml-6 h-1" />
            </div>
            <CardContent className="text-white text-md overflow-y-auto custom-scrollbar space-y-4">
                {projectsData.map((project, index) => (
                    <div key={index} className="border border-zinc-700 rounded-lg p-4 hover:border-blue-500 transition-colors">
                        <h3 className="text-blue-400 font-semibold text-base mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.map((tech, idx) => (
                                <span 
                                    key={idx}
                                    className="px-2 py-1 bg-zinc-700 text-gray-300 rounded text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            {project.github && (
                                <Button 
                                    size="sm"
                                    variant="outline"
                                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-zinc-800"
                                    asChild
                                >
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                        <Github className="size-4" /> Code
                                    </a>
                                </Button>
                            )}
                            {project.live && (
                                <Button 
                                    size="sm"
                                    variant="outline"
                                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-zinc-800"
                                    asChild
                                >
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                        <ExternalLink className="size-4" /> Live
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default Projects;