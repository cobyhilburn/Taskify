import Navbar from "@/app/components/Landing/Nav/Navbar";
import Image from "next/image";
import LandingImage from "./Image.svg"
export default function Landing()  {

    return (
        <div className="flex flex-row h-screen">
            <div className="bg-primarycolor h-full w-1/2 gap-4 flex justify-center p-[100px] flex-col">
                <h1 className="font-golos font-[800] text-[72px] text-accentcolor">TASKIFY</h1>
                <p className="font-golos font-[400] text-[20px] text-gray-300 leading-[2em]">Welcome to <span  className="text-accentcolor">Taskify!</span>, the casual todo app that will transform the way
                    you organize your <span  className="text-accentcolor">Life</span>.
                    Forget those boring, run-of-the-mill task apps.
                    Taskify brings fun and simplicity into the mix.</p>
                <Navbar />
            </div>
            <div className="bg-secondarycolor h-full flex items-center justify-center p-[100px] w-1/2">
                <Image src={LandingImage} alt="image" width={662}/>
            </div>
        </div>
    )
}