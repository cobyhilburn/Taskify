import Image from "next/image"
import Logout from "@/app/components/Dashboard/Sidebar/Logout";
import HomeButton from "@/app/components/Dashboard/Sidebar/HomeButton";

export default function Sidebar({name, image}) {
  return (
   <div className="flex flex-col w-full p-5 bg-primarycolor h-full border-2 border-secondarycolor rounded-l-[50px]">
      <div className="flex flex-row items-center pb-[5px] border-b-2 border-accentcolor">
          <Image src={image} alt="profile picture" width={65} height={65} className="rounded-full"/>
          <div className="flex flex-col ml-[10px] font-bold text-[20px]">
              <h1 className="font-golos font-normal text-accentcolor">Welcome 👋</h1>
              <h1 className="text-secondarycolor font-golos font-bold">{name}</h1>

          </div>

      </div>
       <div className="h-full flex flex-col gap-2 justify-end">
           <HomeButton />
           <Logout />
       </div>
   </div>
  );
}
