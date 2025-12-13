import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
            date: "Issued May 2025",
            // credentialId: "ABC123XYZ",
            link: "https://www.credly.com/badges/251ae1b6-0001-417e-b258-8348026dadf6/public_url"
        },
        {
            title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            issuer: "Oracle",
            date: "Issued October 2025",
            link: "https://drive.google.com/file/d/1o1CrEuK5g7CXq273ciwmsF4aMqKA4An8/view?usp=sharing"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            date: "Issued April 2024",
            link: "https://drive.google.com/file/d/1Y3usYl69ovO57Pag2_QbQkc5YQ5bCQ2A/view?usp=sharing"
        },
        {
            title: "Cyber Security Analyst",
            issuer: "IBM",
            date: "Issued April 2025",
            link: "https://drive.google.com/file/d/1fxA5OUTMbeJOoN1hbGYPfJF-CWZXXn_X/view?usp=sharing"
        },
        {
            title: "MERN Full Stack Development",
            issuer: "Ethnus",
            date: "Issued April 2025",
            link: "https://drive.google.com/file/d/1FbXxvLHG2z9-tgkWL7pk8Zwp7jNZZuGZ/view?usp=sharing"
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Google / Coursera",
            date: "issued December 2023",
            link: "https://drive.google.com/file/d/16ojMrWh2rwKyXV1vn6Ky1GE14x9tIyDX/view?usp=sharing"
        },
        {
            title: "Data Analysis with R Programming",
            issuer: "Google / Coursera",
            date: "Issued April 2023",
            link: "https://drive.google.com/file/d/1JShxl1AkxGPTTmIKU0m2NNJTUAkZY96i/view?usp=sharing"
        }
    ];

    return (
        <TooltipProvider>
            <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-2 md:pl-4 pr-2 md:pr-4 max-h-[550px] md:max-h-[550px] w-full">
                <div className="w-40">
                    <CardHeader className="font-bold text-white text-lg md:text-xl pb-2 px-2 md:px-4">CERTIFICATIONS</CardHeader>
                    <Separator className="pt-1 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 ml-2 md:ml-4" />
                </div>
                <CardContent className="text-white text-xs md:text-md overflow-y-auto custom-scrollbar px-2 md:px-4 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {certificationsData.map((cert, index) => (
                            <div key={index} className="bg-linear-to-br from-zinc-700/40 to-zinc-900/40 border border-zinc-600/50 hover:border-blue-500/50 rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                <div className="flex items-start gap-2 md:gap-3 justify-between">
                                    <div className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
                                        <CheckCircle className="text-blue-400 shrink-0 mt-0.5 md:mt-1" size={18} />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-blue-400 font-semibold text-sm md:text-base break-words">{cert.title}</h3>
                                            <p className="text-gray-400 text-xs md:text-sm mt-1">{cert.issuer}</p>
                                            <p className="text-gray-500 text-xs md:text-sm mb-2">{cert.date}</p>
                                            
                                            {cert.credentialId && (
                                                <p className="text-gray-400 text-xs mb-2 break-words">Validation ID: {cert.credentialId}</p>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {cert.link && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button 
                                                    size="sm"
                                                    className="bg-green-600 hover:bg-green-700 text-white p-1 h-7 w-7 flex items-center justify-center shrink-0 ml-2"
                                                    asChild
                                                >
                                                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink size={16} />
                                                    </a>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>View Credential</TooltipContent>
                                        </Tooltip>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </TooltipProvider>
    );
};

export default Certifications;