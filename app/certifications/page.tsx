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
            date: "Issued: March 2024",
            credentialId: "ABC123XYZ",
            link: "https://aws.amazon.com/certification/"
        },
        {
            title: "Next.js and React - The Complete Guide",
            issuer: "Udemy / Maximilian Schwarzmüller",
            date: "Completed: January 2024",
            link: "https://www.udemy.com"
        },
        {
            title: "The Complete JavaScript Course 2024",
            issuer: "Udemy / Jonas Schmedtmann",
            date: "Completed: November 2023",
            link: "https://www.udemy.com"
        },
        {
            title: "Full Stack Web Development Bootcamp",
            issuer: "Coding Ninjas",
            date: "Completed: September 2023",
            link: "https://www.codingninjas.com"
        },
        {
            title: "PostgreSQL and Database Design",
            issuer: "Coursera",
            date: "Completed: July 2023",
            link: "https://www.coursera.org"
        },
        {
            title: "Hacktoberfest 2025 Super Contributor",
            issuer: "DigitalOcean",
            date: "Achieved: October 2025",
            link: "https://hacktoberfest.digitalocean.com"
        }
    ];

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4 max-h-[550px]">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-xl pb-2">CERTIFICATIONS</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ml-6 h-1" />
            </div>
            <CardContent className="text-white text-md overflow-y-auto custom-scrollbar space-y-3">
                {certificationsData.map((cert, index) => (
                    <div key={index} className="border border-zinc-700 rounded-lg p-3 hover:border-blue-500 transition-colors">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                            <div className="flex-1">
                                <h3 className="text-blue-400 font-semibold text-base">{cert.title}</h3>
                                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                <p className="text-gray-500 text-xs mb-2">{cert.date}</p>
                                
                                {cert.credentialId && (
                                    <p className="text-gray-400 text-xs mb-2">ID: {cert.credentialId}</p>
                                )}

                                {cert.link && (
                                    <Button 
                                        size="sm"
                                        variant="outline"
                                        className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-zinc-800 text-xs h-7"
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
            </CardContent>
        </Card>
    );
};

export default Certifications;