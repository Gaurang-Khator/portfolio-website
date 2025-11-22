import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Achievements = () => {
    return (
        <Card className="bg-zinc-800 border-none rounded-2xl min-h-full pl-4 pr-4 max-h-[550px]">
            <div className="w-40">
                <CardHeader className="font-bold text-white text-xl pb-2">ABOUT ME</CardHeader>
                <Separator className="pt-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 ml-6" />
            </div>
            <CardContent className="text-white text-md overflow-y-auto custom-scrollbar">
                <p>hii
                </p>
            </CardContent>
        </Card>
    );
};

export default Achievements;