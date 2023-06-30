import Dashboard from "@/app/components/Dashboard/Dashboard";
import {getServerSession} from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";


export default async function page(){
    const session = await getServerSession(authOptions)
    return(
        <main className="w-screen bg-primarycolor h-screen flex flex-col justify-center items-center">
            <Dashboard name={session?.user?.name} image={session?.user?.image}/>
        </main>
    )
}
