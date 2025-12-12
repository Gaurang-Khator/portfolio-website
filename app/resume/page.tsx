import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const Resume = () => {
    const resumeDriveLink = "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view";
    const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=YOUR_RESUME_FILE_ID";

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4 max-h-[550px]">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-xl pb-2">RESUME</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ml-6 h-1" />
            </div>
            <CardContent className="text-white text-md overflow-y-auto custom-scrollbar flex flex-col items-center justify-center py-12 space-y-6">
                <div className="text-center space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Download My Resume</h3>
                    <p className="text-gray-300 text-sm">Get a complete overview of my skills, experience, and achievements</p>
                </div>

                <div className="flex flex-col gap-3 w-full sm:w-auto">
                    <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 w-full sm:w-48"
                        asChild
                    >
                        <a href={resumeDriveLink} target="_blank" rel="noopener noreferrer">
                            <Eye size={18} /> Preview Resume
                        </a>
                    </Button>

                    <Button 
                        className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 w-full sm:w-48"
                        asChild
                    >
                        <a href={resumeDownloadLink} download="Gaurang_Khator_Resume.pdf">
                            <Download size={18} /> Download Resume
                        </a>
                    </Button>
                </div>

                <div className="mt-8 border-t border-zinc-700 pt-6 w-full">
                    <h4 className="text-blue-400 font-semibold mb-4">Quick Resume Summary</h4>
                    <div className="space-y-3 text-sm">
                        <div>
                            <p className="text-gray-400">📧 Email</p>
                            <p className="text-gray-300">gaurangkhator.work@gmail.com</p>
                        </div>
                        <div>
                            <p className="text-gray-400">📱 Phone</p>
                            <p className="text-gray-300">+91 XXXXXXXXXX</p>
                        </div>
                        <div>
                            <p className="text-gray-400">📍 Location</p>
                            <p className="text-gray-300">Ahmedabad, Gujarat, India</p>
                        </div>
                        <div>
                            <p className="text-gray-400">🎓 Education</p>
                            <p className="text-gray-300">B.Tech CSE, Vellore Institute of Technology (2022-2026)</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Resume;