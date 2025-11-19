import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardDescription } from "../ui/card";

const HeroSection = () => {
    return (
        <div>
            <Card className="bg-zinc-800 min-h-150 w-[350px] ml-16 mt-4 border-1 border-zinc-700 rounded-xl shadow-lg">
                <CardContent> 
                    <img 
                        src="https://avatar.githubusercontent.com/u/114048615?v=4" 
                        alt="Gaurang" 
                        className="rounded-xl border-4 border-blue-400 w-35 h-40 object-cover mx-auto"
                    />
                    <h1 className="text-lg font-bold text-center mt-4 text-white">GAURANG KHATOR</h1>
                    <Card className="bg-zinc-700 mt-4 border-none p-2">
                        <CardDescription className="text-gray-400 flex justify-center align-items-center">Software Engineer | AWS Certified | Full Stack Developer</CardDescription>
                    </Card>
                    <Separator className="my-4 h-px bg-gray-600" />
                    <h1>EMAIL</h1>
                    <p>gaurangkhator.work@gmail.com</p>
                    <Separator className="my-4 h-px bg-gray-600" />
                    <h1>CONNECT</h1>
                    
                    <Separator className="my-4 h-px bg-gray-600" />
                    <h1>CODING PROFILES</h1>
                </CardContent>
            </Card>
        </div>
    );
};

export default HeroSection;