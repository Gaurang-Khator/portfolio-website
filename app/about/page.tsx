import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4 max-h-[550px]">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-xl pb-2">ABOUT ME</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 ml-6" />
            </div>
            <CardContent className="text-white text-md overflow-y-auto custom-scrollbar">
                <p>Hey there! I'm Gaurang Khator, <br />
I am a results-oriented B.Tech. student in Computer Science and Engineering at Vellore Institute of Technology , set to graduate in May 2026. I am deeply passionate about Full-Stack Web Development and dedicated to building secure, scalable, and beautifully designed digital experiences using modern frameworks. <br />

I am AWS Certified Cloud Practitioner and have comprehensive, hands-on experience across multiple projects, primarily using the Next.js stack, AWS S3, and PostgreSQL/MongoDB. My work blends robust architecture, strong authentication (Clerk, NextAuth) , and responsive UIs (Tailwind CSS)  to solve real-world problems through smart engineering. <br />

Beyond project development, I lead teams and contribute to the technical community. I led the Technical Team at the E-Commerce Club, guiding over 10 members in tech workshops and mentoring juniors in web development. I am also a Hacktoberfest 2025 Super Contributor, successfully merging 6 pull requests to open-source repositories. <br />

With a peak LeetCode rating of 1686 and a Codeforces rating of 1012, I am deeply grounded in algorithms and logic, consistently participating in online contests. I also secured runner-up in the BugOff Hackathon, resolving 8+ critical bugs and implementing new features within 24 hours.<br />

I believe great tech is accessible, scalable, and impactful —and I'm always excited to collaborate and turn ideas into reality.
                </p>
            </CardContent>
        </Card>
    );
};

export default About;