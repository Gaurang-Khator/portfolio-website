import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const Resume = () => {
    const resumeDriveLink = "https://drive.google.com/file/d/1awJcO-VjbjT09tCXSXUqygF6Jy4h8upN/view?usp=sharing";
    const resumeDownloadLink = "https://drive.google.com/file/d/1awJcO-VjbjT09tCXSXUqygF6Jy4h8upN/view?usp=sharing";

    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-2 md:pl-4 pr-2 md:pr-4 max-h-[550px] md:max-h-[550px] w-full">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-lg md:text-xl pb-2 px-2 md:px-4">RESUME</CardHeader>
                <Separator className="pt-1 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 ml-2 md:ml-4" />
            </div>
            <CardContent className="text-white text-xs md:text-md overflow-y-auto custom-scrollbar flex flex-col items-center justify-center py-6 md:py-12 space-y-4 md:space-y-6">
                <div className="text-center space-y-2 md:space-y-3">
                    {/* <h3 className="text-base md:text-lg font-semibold text-blue-400">Download My Resume</h3> */}
                    <p className="text-gray-300 text-xs md:text-sm">Get a complete overview of my skills, experience, and achievements</p>
                </div>

                <div className="flex flex-col gap-2 md:gap-3 w-full px-2 md:w-auto">
                    <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 w-full md:w-48 text-sm md:text-base"
                        asChild
                    >
                        <a href={resumeDriveLink} target="_blank" rel="noopener noreferrer">
                            <Eye size={16} /> Preview Resume
                        </a>
                    </Button>

                    <Button 
                        className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 w-full md:w-48 text-sm md:text-base"
                        asChild
                    >
                        <a href={resumeDownloadLink} download="Gaurang_Khator_Resume.pdf">
                            <Download size={16} /> Download Resume
                        </a>
                    </Button>
                </div>

            </CardContent>
        </Card>
    );
};

export default Resume;