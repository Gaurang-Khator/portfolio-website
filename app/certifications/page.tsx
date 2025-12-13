import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface Certification {
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    link?: string;
}

const Certifications = () => {
    const certificationsData: Certification[] = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services (AWS)",
            date: "Issued: May 2025",
            credentialId: "ABC123XYZ",
            link: "https://aws.amazon.com/certification/"
        },
        {
            title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            issuer: "Oracle",
            date: "Completed: October 2025",
            link: "https://www.udemy.com"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            date: "Completed: April 2024",
            link: "https://www.udemy.com"
        },
        {
            title: "Cyber Security Analyst",
            issuer: "IBM",
            date: "Completed: April 2025",
            link: "https://www.codingninjas.com"
        },
        {
            title: "MERN Full Stack Development",
            issuer: "Ethnus",
            date: "Completed: April 2025",
            link: "https://www.coursera.org"
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Google / Coursera",
            date: "Achieved: December 2023",
            link: "https://hacktoberfest.digitalocean.com"
        },
        {
            title: "Data Analysis with R Programming",
            issuer: "Google / Coursera",
            date: "Achieved: April 2023",
            link: "https://hacktoberfest.digitalocean.com"
        }
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-2 md:pl-4 pr-2 md:pr-4 max-h-[550px] md:max-h-[550px] w-full">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-lg md:text-xl pb-2 px-2 md:px-4">CERTIFICATIONS</CardHeader>
                <Separator className="pt-1 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 ml-2 md:ml-4" />
            </div>
            <CardContent className="text-white text-xs md:text-md overflow-y-auto custom-scrollbar px-2 md:px-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {certificationsData.map((cert, index) => (
                        <div key={index} className="bg-linear-to-br from-zinc-700/40 to-zinc-900/40 border border-zinc-600/50 hover:border-blue-500/50 rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                            <div className="flex items-start gap-2 md:gap-3">
                                <CheckCircle className="text-blue-400 shrink-0 mt-0.5 md:mt-1" size={18} />
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-blue-400 font-semibold text-sm md:text-base break-words">{cert.title}</h3>
                                    <p className="text-gray-400 text-xs md:text-sm mt-1">{cert.issuer}</p>
                                    <p className="text-gray-500 text-xs md:text-sm mb-2">{cert.date}</p>
                                    
                                    {cert.credentialId && (
                                        <p className="text-gray-400 text-xs mb-2 break-words">ID: {cert.credentialId}</p>
                                    )}

                                    {cert.link && (
                                        <Button 
                                            size="lg"
                                            className="bg-green-600 hover:bg-green-700 text-white text-sm h-6 md:h-7"
                                            asChild
                                        >
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                                View Credential
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

export default Certifications;