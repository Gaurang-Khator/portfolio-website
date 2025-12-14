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
    tech: string[];
    github?: string;
    live?: string;
}

const ProjectsPage = () => {
    const projectsData: Project[] = [
        {
            id: 1,
            title: "S3-Sync",
            description: "A next-generation AWS S3 web file manager with authentication and upload, download and preview capabilities.",
            image: "/s3-sync.png",
            tech: ["Next.js", "TypeScript", "AWS S3", "Tailwind CSS", "Clerk", "Shadcn-UI"],
            github: "https://github.com/Gaurang-Khator/s3-file-manager-ui",
            // live: "https://example.com"
        },
        {
            id: 2,
            title: "Muziic",
            description: "Muziic is a collaborative music streaming app where users vote on songs in real-time to create a shared listening experience.",
            image: "/music.png",
            tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Sahdcn-UI", "Prisma"],
            github: "https://github.com/Gaurang-Khator/muziic",
            // live: "https://example.com"
        },
        {
            id: 3,
            title: "Coding Contest Tracker",
            description: "Coding Contest Tracker is a web-based application that helps competitive programmers stay up-to-date with upcoming, ongoing, and completed contests across multiple platforms such as Codeforces, LeetCode, and CodeChef — all in one dashboard.",
            image: "/coding-contest.png",
            tech: ["Next.js", "Tailwind CSS", "Shadcn-UI", "MongoDB"],
            github: "https://github.com/Gaurang-Khator/Coding-Contest-Tracker",
            live: "https://coding-contest-tracker-eight.vercel.app/"
        },
        {
            id: 4,
            title: "CodeNexus",
            description: "CodeNexus is a full-stack EdTech platform that enables instructors to create and manage courses while allowing students to explore and purchase them. It features secure payment handling, cloud media uploads, and a fully responsive frontend.",
            image: "/codenexus.png",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary", "Razorpay"],
            github: "https://github.com/Gaurang-Khator/CodeNexus",
            // live: "https://example.com"
        },
       
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-2 md:pl-4 pr-2 md:pr-4 max-h-[550px] md:max-h-[550px] w-full">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-lg md:text-xl pb-2 px-2 md:px-4">PROJECTS</CardHeader>
                <Separator className="pt-1 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 ml-2 md:ml-4"/>
            </div>
            <CardContent className="text-white text-xs md:text-md overflow-y-auto custom-scrollbar mb-4 px-2 md:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {projectsData.map((project) => (
                        <div 
                            key={project.id}
                            className="bg-linear-to-br from-zinc-700/40 to-zinc-900/40 border border-zinc-600/50 hover:border-blue-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group flex flex-col"
                        >
                            <div className="relative h-24 md:h-32 w-full overflow-hidden bg-zinc-700">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-2 md:p-3 flex flex-col flex-1">
                                <h3 className="text-blue-400 font-semibold text-sm md:text-md group-hover:text-blue-300 transition-colors line-clamp-1 mb-1 md:mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-4 mb-1 md:mb-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tech.map((tech, idx) => (
                                        <span 
                                            key={idx}
                                            className="px-2 py-1 bg-zinc-700 text-gray-300 rounded-sm text-xs hover:bg-blue-600/30 hover:text-blue-400 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-1 md:gap-2 mt-auto pt-2">
                                    {project.github && (
                                        <Button 
                                            size="sm"
                                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm h-5 md:h-6 flex-1 p-1 rounded-sm"
                                            asChild
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                                                <Github size={10} /> Code
                                            </a>
                                        </Button>
                                    )}
                                    {project.live && (
                                        <Button 
                                            size="sm"
                                            className="bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm h-5 md:h-6 flex-1 p-1 rounded-sm"
                                            asChild
                                        >
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                                                <ExternalLink size={10} /> Live
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