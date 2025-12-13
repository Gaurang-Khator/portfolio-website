import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
                "Expected Graduation: May 2026",
                "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Cloud Computing",
                "Active participation in technical clubs and coding competitions"
            ]
        },
        {
            degree: "Senior Secondary (12th Grade)",
            institution: "Zydus School for Excellence, Ahmedabad",
            duration: "2021 - 2022",
            details: [
                "Percentage: 86.4%",
                "Board: CBSE",
                "Subjects: Physics, Chemistry, Mathematics, Computer Science"
            ]
        },
        {
            degree: "Secondary (10th Grade)",
            institution: "Seven Oaks School, Dehradun",
            duration: "2019 - 2020",
            details: [
                "Percentage: 98.2 %",
                "Board: ICSE",
                "School Topper Award for Academic Excellence"
            ]
        }
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-2 md:pl-4 pr-2 md:pr-4 max-h-[550px] md:max-h-[550px] w-full">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-lg md:text-xl pb-2 px-2 md:px-4">EDUCATION</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ml-2 md:ml-6 h-1" />
            </div>
            <CardContent className="text-white text-xs md:text-md overflow-y-auto custom-scrollbar space-y-3 md:space-y-4 px-2 md:px-4">
                {educationData.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-2 md:pl-4 py-2">
                        <h3 className="text-blue-400 font-semibold text-sm md:text-base break-words">{edu.degree}</h3>
                        <p className="text-gray-400 text-xs md:text-sm">{edu.institution}</p>
                        <p className="text-gray-500 text-xs md:text-sm mb-2">{edu.duration}</p>
                        
                        <ul className="space-y-1">
                            {edu.details.map((detail, idx) => (
                                <li key={idx} className="text-gray-300 text-xs md:text-sm flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5 md:mt-1 flex-shrink-0">•</span>
                                    <span className="break-words">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default Education;