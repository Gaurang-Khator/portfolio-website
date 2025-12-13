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
            date: "2023"
        },
        {
            title: "Hacktoberfest 2025 - Super Contributor",
            description: "Successfully merged 6 pull requests to open-source repositories, contributing to the global open-source community during Hacktoberfest.",
            date: "October 2025"
        },
        {
            title: "LeetCode - Peak Rating 1726",
            description: "Achieved peak rating of 1686 on LeetCode, demonstrating strong problem-solving skills in data structures and algorithms.",
            date: "Present"
        },
        {
            title: "Codeforces - Rating 1013",
            description: "Maintained a consistent rating of 1012 on Codeforces, participating actively in competitive programming contests.",
            date: "Present"
        },
        {
            title: "E-Commerce Club - Technical Team Lead",
            description: "Led the Technical Team with 10+ members, conducting workshops and mentoring juniors in full-stack web development.",
            date: "2023 - 2025"
        },
        {
            title: "AWS Certified Cloud Practitioner",
            description: "Successfully obtained AWS Cloud Practitioner certification, validating knowledge of cloud computing fundamentals and AWS services.",
            date: "May 2025"
        },
        
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-2 md:pl-4 pr-2 md:pr-4 max-h-[550px] md:max-h-[550px] w-full">
                <div className="w-40">
                    <CardHeader className="font-bold text-white text-lg md:text-xl pb-2 px-2 md:px-4">ACHIEVEMENTS</CardHeader>
                    <Separator className="pt-1 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 ml-2 md:ml-4" />
                </div>
                <CardContent className="text-white text-xs md:text-md overflow-y-auto custom-scrollbar space-y-2 md:space-y-3 px-2 md:px-4">
                    {achievementsData.map((achievement, index) => (
                        <div key={index} className="border border-zinc-700 rounded-lg p-3 hover:border-blue-500 transition-colors">
                            <div className="flex items-start gap-3">
                                <Award className="text-yellow-400 shrink-0 mt-1.5" size={18} />
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-blue-400 font-semibold text-sm sm:text-base break-words">{achievement.title}</h3>
                                    <p className="text-gray-300 text-xs sm:text-sm mb-2 leading-relaxed">{achievement.description}</p>
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