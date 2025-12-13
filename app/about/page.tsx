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
                    <span className="text-blue-400 font-semibold">Gaurang Khator</span>, a results-oriented B.Tech. student in Computer Science and Engineering at Vellore Institute of Technology, set to graduate in May 2026.
                </p>

                <p className="text-gray-300 leading-relaxed">
                    I am deeply passionate about{" "}
                    <span className="text-blue-400 font-semibold">Full-Stack Web Development</span> and dedicated to building secure, scalable, and beautifully designed digital experiences using modern frameworks.
                </p>

                <p className="text-gray-300 leading-relaxed">
                    I am an{" "}
                    <span className="text-blue-400 font-semibold">AWS Certified Cloud Practitioner</span> with comprehensive hands-on experience across multiple projects, primarily using the Next.js stack, AWS S3, and PostgreSQL/MongoDB. My work blends robust architecture, strong authentication (Clerk, NextAuth), and responsive UIs (Tailwind CSS) to solve real-world problems.
                </p>

                <p className="text-gray-300 leading-relaxed">
                    Beyond development, I{" "}
                    <span className="text-blue-400 font-semibold">lead teams</span> and contribute to the technical community. I led the Technical Team at the E-Commerce Club, guiding over 10 members and mentoring juniors in web development. I'm also a{" "}
                    <span className="text-blue-400 font-semibold">Hacktoberfest 2025 Super Contributor</span>, successfully merging 6 pull requests to open-source repositories.
                </p>

                <p className="text-gray-300 leading-relaxed">
                    With a peak LeetCode rating of{" "}
                    <span className="text-blue-400 font-semibold">1686</span> and Codeforces rating of{" "}
                    <span className="text-blue-400 font-semibold">1012</span>, I'm deeply grounded in algorithms. I also secured runner-up in the{" "}
                    <span className="text-blue-400 font-semibold">BugOff Hackathon</span>, resolving 8+ critical bugs in 24 hours.
                </p>

                <p className="text-gray-300 leading-relaxed">
                    I believe great tech is{" "}
                    <span className="text-blue-400 font-semibold">accessible, scalable, and impactful</span> — always excited to collaborate and turn ideas into reality.
                </p>
            </CardContent>
        </Card>
    );
};

export default About;