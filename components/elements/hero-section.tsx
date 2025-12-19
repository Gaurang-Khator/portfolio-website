import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Facebook, Instagram, LinkedinIcon, Mail, Twitter } from "lucide-react";

const HeroSection = () => {
    return (
        <div className="flex justify-center md:block">
            <Card className="bg-zinc-800 min-h-100 w-full md:w-[350px] md:ml-16 md:mt-4 border-zinc-700 rounded-xl shadow-lg">
                <CardContent> 
                    <img 
                        src="/favicon.png"
                        alt="Gaurang Profile Pic" 
                        className="rounded-xl border-4 border-blue-400 w-24 h-24 md:w-35 md:h-40 object-cover mx-auto"
                    />
                    <h1 className="text-base md:text-lg font-bold text-center mt-4 text-white">GAURANG KHATOR</h1>
                    <p className="text-gray-400 text-xs md:text-sm text-center" >Ahmedabad, Gujarat, India.</p>
                    <Card className="bg-zinc-700 mt-4 border-none p-2">
                        <CardDescription className="text-gray-400 flex justify-center align-items-center text-xs md:text-sm">Software Engineer | AWS & Oracle Certified | Full Stack Developer</CardDescription>
                    </Card>
                    <Separator className="my-4 h-px bg-gray-600" />
                    <div className="flex flex-row m-2 gap-3 md:gap-4 align-items-center justify-center">
                        <aside> 
                            <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                                <Mail className="text-blue-400 w-4 h-4 md:w-5 md:h-5"/> 
                            </div>
                        </aside>
                        <main className="flex flex-col">
                            <h1 className="text-xs font-bold text-white">EMAIL</h1>
                            <p className="text-gray-400 text-xs md:text-sm hover:text-blue-300 truncate" ><a href="mailto:gaurangkhator.work@gmail.com">gaurangkhator.work@gmail.com</a></p>
                        </main>
                    </div>
                    <Separator className="my-4 h-px bg-gray-600" />
                    <h1 className="text-xs md:text-sm font-bold text-center mt-4 text-white">CONNECT</h1>
                    <div className="flex justify-center gap-2 md:gap-3 pt-3 flex-wrap">
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="https://www.linkedin.com/in/gaurang2201/" target="_blank">
                                <LinkedinIcon className="text-gray-400 hover:text-blue-400 w-4 h-4 md:w-5 md:h-5"/> 
                            </a>
                        </div>   
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center ">
                            <a href="https://www.instagram.com/gaurang_khator" target="_blank">
                                <Instagram className="text-gray-400 hover:text-blue-400 w-4 h-4 md:w-5 md:h-5"/> 
                            </a>
                        </div>
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="https://x.com/GaurangKhator" target="_blank">
                                <Twitter className="text-gray-400 hover:text-blue-400 w-4 h-4 md:w-5 md:h-5"/> 
                            </a>
                        </div>    
                        {/* <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="" target="_blank">
                                <Facebook className="text-gray-400 hover:text-blue-400 w-4 h-4 md:w-5 md:h-5"/> 
                            </a>
                        </div>             */}
                    </div>   
                    <Separator className="my-4 h-px bg-gray-600" />
                    <h1 className="text-xs md:text-sm font-bold text-center mt-4 text-white">CODING PROFILES</h1>
                    <div className="flex justify-center gap-2 md:gap-3 pt-3 flex-wrap">   
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="https://www.github.com/Gaurang-Khator" target="_blank">
                                <img src="/icons8-github-24.png" alt="GitHub" className="w-4 h-4 md:w-6 md:h-6"/>
                            </a>
                        </div>
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center ">
                            <a href="https://leetcode.com/u/gaurang_khator/" target="_blank">
                                <img src="/icons8-leetcode-24.png" alt="LeetCode" className="w-4 h-4 md:w-6 md:h-6"/>
                            </a>
                        </div>    
                        <div className="p-2 bg-gray-600 rounded-lg flex justify-center align-items-center">
                            <a href="https://codeforces.com/profile/gaurang_khator" target="_blank">
                                <img src="/icons8-codeforces-24.png" alt="Codeforces" className="w-4 h-4 md:w-6 md:h-6"/>
                            </a>
                        </div>            
                    </div> 
                </CardContent>
            </Card>
        </div>
    );
};

export default HeroSection;