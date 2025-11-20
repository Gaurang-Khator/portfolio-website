import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4">
            <CardHeader className="font-bold text-white text-xl">About Me</CardHeader>
            <Separator className="h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            <CardContent></CardContent>
        </Card>
    );
};

export default About;