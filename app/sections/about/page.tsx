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
                    <span className="text-blue-400 font-semibold">Gaurang Khator</span>, a dedicated <span className="text-blue-400 font-semibold">Computer Science & Engineering </span>undergraduate at Vellore Institute of Technology, with a strong passion for software development and problem-solving. Having completed my Class 10 in Dehradun and Class 12 in Ahmedabad, I am set to graduate in May 2026 with a focus on building scalable, secure, and user-centric applications.
                </p>

                <p className="text-gray-300 leading-relaxed">I am an <span className="text-blue-400 font-semibold">AWS Certified Cloud Practitioner</span>, with hands-on experience across cloud-integrated full-stack projects using <span className="text-blue-400 font-semibold">React.js, Next.js, Node.js,</span> and modern <span className="text-blue-400 font-semibold">database technologies</span>. From building end-to-end platforms to optimizing cloud workflows, I focus on writing clean, efficient, and maintainable code that turns product vision into reality.
                </p>

                <p className="text-gray-300 leading-relaxed">Alongside technical skills, I bring experience in{" "}
                <span className="text-blue-400 font-semibold">teamwork and leadership</span>, having collaborated closely with peers on academic, technical, and competitive projects. As part of a team, I have achieved a{" "}
                <span className="text-blue-400 font-semibold">runner-up position</span> in competitive events through effective coordination and problem-solving.
                </p>

                <p className="text-gray-300 leading-relaxed">Beyond academics, I have actively participated in{" "}
                <span className="text-blue-400 font-semibold">inter-college cricket tournaments</span>, which have strengthened my discipline, resilience, and ability to perform under pressure. I also consistently work on improving my{" "}
                <span className="text-blue-400 font-semibold">Data Structures and Algorithms</span>{" "} to build a strong foundation for real-world software development.
                </p>

                <p className="text-gray-300 leading-relaxed">My goal is to grow as a <span className="text-blue-400 font-semibold">Software Engineer</span> by embracing new challenges, learning from diverse experiences, and contributing to impactful, scalable technology solutions that drive innovation.
                
                </p>

            </CardContent>
        </Card>
    );
};

export default About;