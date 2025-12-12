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
            institution: "Delhi Public School, Ahmedabad",
            duration: "2020 - 2022",
            details: [
                "Percentage: 94%",
                "Subjects: Physics, Chemistry, Mathematics, Computer Science",
                "Founder of school's coding club"
            ]
        },
        {
            degree: "Secondary (10th Grade)",
            institution: "Delhi Public School, Ahmedabad",
            duration: "2018 - 2020",
            details: [
                "CGPA: 9.8/10",
                "Active in Science and Technology activities",
                "Winner of School Science Fair"
            ]
        }
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4 max-h-[550px]">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-xl pb-2">EDUCATION</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ml-6 h-1" />
            </div>
            <CardContent className="text-white text-md overflow-y-auto custom-scrollbar space-y-4">
                {educationData.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                        <h3 className="text-blue-400 font-semibold text-base">{edu.degree}</h3>
                        <p className="text-gray-400 text-sm">{edu.institution}</p>
                        <p className="text-gray-500 text-sm mb-2">{edu.duration}</p>
                        
                        <ul className="space-y-1">
                            {edu.details.map((detail, idx) => (
                                <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>{detail}</span>
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