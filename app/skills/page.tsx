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
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Responsive Design"]
        },
        {
            category: "Backend Development",
            skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Authentication", "Database Design"]
        },
        {
            category: "Cloud & DevOps",
            skills: ["AWS (S3, EC2, Lambda)", "Cloud Practitioner Certified", "Git", "Docker", "Deployment"]
        },
        {
            category: "Tools & Technologies",
            skills: ["Clerk", "NextAuth", "Radix UI", "Shadcn", "Vercel", "Firebase", "Prisma ORM"]
        },
        {
            category: "Problem Solving",
            skills: ["Data Structures", "Algorithms", "LeetCode (Rating: 1686)", "Codeforces (Rating: 1012)", "Competitive Programming"]
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
                    <div key={index} className="space-y-2">
                        <h3 className="text-blue-400 font-semibold text-base">{category.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, idx) => (
                                <span 
                                    key={idx}
                                    className="px-3 py-1 bg-zinc-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
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