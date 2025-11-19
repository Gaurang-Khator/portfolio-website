import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Facebook, Github, Instagram, LinkedinIcon, Mail, Twitter } from "lucide-react";

const HeroSection = () => {
    return (
        <div>
            <Card className="bg-zinc-800 min-h-150 w-[350px] ml-16 mt-4 border-1 border-zinc-700 rounded-xl shadow-lg">
                <CardContent> 
                    <img 
                        src="" 
                        alt="Gaurang Profile Pic" 
                        className="rounded-xl border-4 border-blue-400 w-35 h-40 object-cover mx-auto"
                    />
                    <h1 className="text-lg font-bold text-center mt-4 text-white">GAURANG KHATOR</h1>
                    <p className="text-gray-400 text-sm text-center" >Ahmedabad, Gujarat, India.</p>
                    <Card className="bg-zinc-700 mt-4 border-none p-2">
                        <CardDescription className="text-gray-400 flex justify-center align-items-center">Software Engineer | AWS Certified | Full Stack Developer</CardDescription>
                    </Card>
                    <Separator className="my-4 h-px bg-gray-600" />
                    <div className="flex flex-row m-2 gap-4 align-items-center justify-center">
                        <aside> 
                            <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                                <Mail className="text-blue-400"/> 
                            </div>
                        </aside>
                        <main className="flex flex-col">
                            <h1 className="text-xs font-bold text-white">EMAIL</h1>
                            <p className="text-gray-400 text-md hover:text-blue-200" ><a href="mailto:gaurangkhator.work@gmail.com">gaurangkhator.work@gmail.com</a></p>
                        </main>
                    </div>
                    <Separator className="my-4 h-px bg-gray-600" />
                    <h1 className="text-sm font-bold text-center mt-4 text-white">CONNECT</h1>
                    <div className="flex justify-center gap-2 pt-2">
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="https://www.linkedin.com/in/gaurang2201/" target="_blank">
                                <LinkedinIcon className="text-gray-400 hover:text-blue-400"/> 
                            </a>
                        </div>   
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="https://www.instagram.com/gaurang_khator" target="_blank">
                                <Instagram className="text-gray-400 hover:text-blue-400"/> 
                            </a>
                        </div>
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="" target="_blank">
                                <Twitter className="text-gray-400 hover:text-blue-400"/> 
                            </a>
                        </div>    
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="" target="_blank">
                                <Facebook className="text-gray-400 hover:text-blue-400"/> 
                            </a>
                        </div>            
                    </div>   
                    <Separator className="my-4 h-px bg-gray-600" />
                    <h1 className="text-sm font-bold text-center mt-4 text-white">CODING PROFILES</h1>
                    <div className="flex justify-center gap-2 pt-2">   
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="https://www.github.com/Gaurang-Khator" target="_blank">
                                <Github className="text-gray-400 hover:text-blue-400"/> 
                            </a>
                        </div>
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="https://leetcode.com/u/gaurang_khator/" target="_blank">
                                <Twitter className="text-gray-400 hover:text-blue-400"/> 
                            </a>
                        </div>    
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="https://codeforces.com/profile/gaurang_khator" target="_blank">
                                <Facebook className="text-gray-400 hover:text-blue-400"/> 
                            </a>
                        </div>            
                    </div> 
                </CardContent>
            </Card>
        </div>
    );
};

export default HeroSection;