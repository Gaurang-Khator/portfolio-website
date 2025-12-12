import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SkillCategory {
    category: string;
    skills: string[];
}

const Skills = () => {
    const skillsData: SkillCategory[] = [
        {
            category: "Frontend Development",
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
        },
        {
            category: "Backend Development",
            skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"]
        },
        {
            category: "Databases",
            skills: ["MySQL", "PostgreSQL", "MongoDB"]
        },
        {
            category: "Cloud & DevOps",
            skills: ["AWS (S3, EC2, Lambda)", "Cloud Practitioner Certified", "Git", "Docker"]
        },
        {
            category: "Tools & Technologies",
            skills: ["Clerk", "NextAuth", "Radix UI", "Shadcn", "Vercel", "Firebase", "Prisma ORM"]
        },
        {
            category: "CoureWork",
            skills: ["Data Structures & Algorithms", "Object Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks"]
        }
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4 max-h-[550px]">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-xl pb-2">SKILLS</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ml-6 h-1" />
            </div>
            <CardContent className="text-white text-md overflow-y-auto custom-scrollbar space-y-6">
                {skillsData.map((category, index) => (
                    <div key={index} className="space-y-3">
                        <h3 className="text-blue-400 font-semibold text-lg">{category.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, idx) => (
                                <span 
                                    key={idx}
                                    className="px-8 py-3 bg-zinc-700 border-1 text-gray-300 rounded-md text-md hover:text-blue-400 hover:cursor-pointer hover:border-blue-500 transition-all"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default Skills;