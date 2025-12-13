import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SkillCategory {
    category: string;
    skills: string[];
}

const Skills = () => {
    const skillsData: SkillCategory[] = [
        {
            category: "PROGRAMMING LANGUAGES",
            skills: ["C++", "Python", "Java", "Javascript", "SQL"]
        },
        {
            category: "FRONTEND DEVELOPMENT",
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
        },
        {
            category: "BACKEND DEVELOPMENT",
            skills: ["Node.js", "Express.js", "REST APIs"]
        },
        {
            category: "DATABASES",
            skills: ["MySQL", "PostgreSQL", "MongoDB"]
        },
        {
            category: "Tools & Technologies",
            skills: ["GitHub", "Git", "AWS", "Docker", "Clerk", "Shadcn-UI", "Vercel", "Postman", "Prisma ORM"]
        },
        {
            category: "COURSEWORK & CONCEPTS",
            skills: ["Data Structures & Algorithms", "Object Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks", "SOLID Principles"]
        }
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-2 md:pl-4 pr-2 md:pr-4 max-h-[550px] md:max-h-[550px] w-full">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-lg md:text-xl pb-2 px-2 md:px-4">SKILLS</CardHeader>
                <Separator className="pt-1 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 ml-2 md:ml-4" />
            </div>
            <CardContent className="text-white text-xs md:text-md overflow-y-auto custom-scrollbar space-y-4 md:space-y-6 px-2 md:px-4">
                {skillsData.map((category, index) => (
                    <div key={index} className="space-y-2 md:space-y-3">
                        <h3 className="text-blue-400 font-semibold text-base md:text-md">{category.category}</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {category.skills.map((skill, idx) => (
                                <span 
                                    key={idx}
                                    className="px-4 md:px-8 py-2 md:py-3 bg-zinc-700 border text-gray-300 rounded-md text-xs md:text-md hover:text-blue-400 hover:cursor-pointer hover:border-blue-500 transition-all"
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