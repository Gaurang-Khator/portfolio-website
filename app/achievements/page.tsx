import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award } from "lucide-react";

interface Achievement {
    title: string;
    description: string;
    date: string;
}

const Achievements = () => {
    const achievementsData: Achievement[] = [
        {
            title: "BugOff Hackathon - Runner Up",
            description: "Resolved 8+ critical bugs and implemented new features within 24 hours, securing runner-up position among 50+ teams.",
            date: "2025"
        },
        {
            title: "Hacktoberfest 2025 - Super Contributor",
            description: "Successfully merged 6 pull requests to open-source repositories, contributing to the global open-source community during Hacktoberfest.",
            date: "October 2025"
        },
        {
            title: "LeetCode - Peak Rating 1686",
            description: "Achieved peak rating of 1686 on LeetCode, demonstrating strong problem-solving skills in data structures and algorithms.",
            date: "2024"
        },
        {
            title: "Codeforces - Rating 1012",
            description: "Maintained a consistent rating of 1012 on Codeforces, participating actively in competitive programming contests.",
            date: "2024"
        },
        {
            title: "E-Commerce Club - Technical Team Lead",
            description: "Led the Technical Team with 10+ members, conducting workshops and mentoring juniors in full-stack web development.",
            date: "2024 - Present"
        },
        {
            title: "AWS Certified Cloud Practitioner",
            description: "Successfully obtained AWS Cloud Practitioner certification, validating knowledge of cloud computing fundamentals and AWS services.",
            date: "March 2024"
        },
        {
            title: "Innovation in Student Project",
            description: "Developed an innovative full-stack solution that improved data processing efficiency by 40% for a major tech company.",
            date: "2024"
        },
        {
            title: "Dean's List Recognition",
            description: "Recognized on the Dean's List for outstanding academic performance and contributions to the institution.",
            date: "2024"
        }
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4 max-h-[550px]">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-xl pb-2">ACHIEVEMENTS</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ml-6 h-1" />
            </div>
            <CardContent className="text-white text-md overflow-y-auto custom-scrollbar space-y-3">
                {achievementsData.map((achievement, index) => (
                    <div key={index} className="border border-zinc-700 rounded-lg p-3 hover:border-blue-500 transition-colors">
                        <div className="flex items-start gap-3">
                            <Award className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                            <div className="flex-1">
                                <h3 className="text-blue-400 font-semibold text-base">{achievement.title}</h3>
                                <p className="text-gray-300 text-sm mb-2 leading-relaxed">{achievement.description}</p>
                                <p className="text-gray-500 text-xs">{achievement.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default Achievements;