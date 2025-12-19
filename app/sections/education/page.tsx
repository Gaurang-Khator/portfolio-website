import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Calendar, Award } from "lucide-react";

interface Education {
    degree: string;
    institution: string;
    duration: string;
    details: string[];
}

const Education = () => {
    const educationData: Education[] = [
        {
            degree: "B.Tech. in Computer Science and Engineering",
            institution: "Vellore Institute of Technology (VIT)",
            duration: "2022 - 2026",
            details: [
                "CGPA: 8.84/10",
                "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems",
            ]
        },
        {
            degree: "12th Standard (CBSE)",
            institution: "Zydus School for Excellence, Ahmedabad",
            duration: "2021 - 2022",
            details: [
                "Percentage: 86.4%",
            ]
        },
        {
            degree: "10th Standard (ICSE)",
            institution: "Seven Oaks School, Dehradun",
            duration: "2019 - 2020",
            details: [
                "Percentage: 98.2 %",
                "School Topper Award for Academic Excellence"
            ]
        }
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-2 md:pl-4 pr-2 md:pr-4 max-h-[550px] md:max-h-[550px] w-full">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-lg md:text-xl pb-2 px-2 md:px-4">EDUCATION</CardHeader>
                <Separator className="pt-1 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 ml-2 md:ml-4 h-1" />
            </div>
            <CardContent className="text-white overflow-y-auto custom-scrollbar space-y-4 px-2 md:px-4 mb-4">
                {educationData.map((edu, index) => (
                    <div key={index} className="group relative bg-linear-to-br from-zinc-700/40 to-zinc-900/40 border border-zinc-600/50 hover:border-blue-500/50 rounded-xl p-4 md:p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                
                        <div className="flex items-start gap-3 mb-3">
                            <BookOpen className="text-blue-400 shrink-0 mt-1" size={20} />
                            <div className="flex-1 min-w-0">
                                <h3 className="text-blue-400 font-bold text-sm md:text-base break-words leading-tight">{edu.degree}</h3>
                                <p className="text-gray-400 text-xs md:text-sm mt-1">{edu.institution}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 ml-8 md:ml-8 mb-3 text-gray-400">
                            <Calendar size={14} className="text-purple-400 shrink-0" />
                            <span className="text-xs md:text-sm">{edu.duration}</span>
                        </div>

                        <div className="ml-8 md:ml-8 space-y-2">
                            {edu.details.map((detail, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <Award size={14} className="text-yellow-400 mt-1 shrink-0" />
                                    <p className="text-gray-300 text-xs md:text-sm break-words leading-relaxed">{detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default Education;