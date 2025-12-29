import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-2 md:pl-4 pr-2 md:pr-4 max-h-[550px] md:max-h-[550px] w-full">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-lg md:text-xl pb-2 px-2 md:px-4">ABOUT ME</CardHeader>
                <Separator className="pt-1 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 ml-2 md:ml-4" />
            </div>
            <CardContent className="text-white text-md md:text-md overflow-y-auto custom-scrollbar space-y-3 md:space-y-4 px-2 md:px-4">
                <p className="text-gray-300 leading-relaxed">
                    Hey there! I'm{" "}
                    <span className="text-blue-400 font-semibold">Gaurang Khator</span>, a dedicated <span className="text-blue-400 font-semibold">Computer Science & Engineering </span>undergraduate at Vellore Institute of Technology, with a strong passion for software development and problem-solving. 
                </p>

                <p className="text-gray-300 leading-relaxed">I'm <span className="text-blue-400 font-semibold">AWS Certified</span>, with hands-on experience across cloud-integrated full-stack projects using <span className="text-blue-400 font-semibold">React.js, Next.js, Node.js,</span> and modern <span className="text-blue-400 font-semibold">database technologies</span>. My work blends creativity with performance, solving real-world problems through smart engineering.
                </p>

                <p className="text-gray-300 leading-relaxed">Professionally, I've led multiple team-based technical projects as the <span className="text-blue-400 font-semibold">Technical Team Lead at the E-Commerce Club</span>, driving innovation and collaboration through real-world product development. I was recognized as a <span className="text-blue-400 font-semibold">Hacktoberfest 2025 Super Contributor</span> and achieved <span className="text-blue-400 font-semibold">runner-up position</span> in the <span className="text-blue-400 font-semibold">Bugoff Hackathon 2023</span>, demonstrating strong leadership and the ability to deliver results under pressure.
                </p>

                <p className="text-gray-300 leading-relaxed">Beyond development, I'm passionate about competitive programming, with a <span className="text-blue-400 font-semibold">LeetCode rating of 1770</span> (Top <span className="text-blue-400 font-semibold">10% globally</span>) and a <span className="text-blue-400 font-semibold">Codeforces rating of 1013</span>. Having <span className="text-blue-400 font-semibold">solved 500+ problems</span> across multiple platforms, I continually strengthen my skills in algorithms, data structures, and logical problem-solving.
                </p>
                <p className="text-gray-300 leading-relaxed">Outside of tech, I enjoy playing cricket and badminton, as well as exploring new places through travelling, which help me stay active, focused, and inspired.
                </p>
                {/* <p className="text-gray-300 leading-relaxed">My goal is to grow as a <span className="text-blue-400 font-semibold">Software Engineer</span> by embracing new challenges, learning from diverse experiences, and contributing to impactful, scalable technology solutions that drive innovation.
                </p> */}

            </CardContent>
        </Card>
    );
};

export default About;