
import { authOptions } from "../../../../pages/api/auth/[...nextauth]";
import SignUp from "@/app/components/Landing/Nav/SignUp";
import DashboardBTN from "@/app/components/Landing/Nav/DashboardBTN";
import {getServerSession} from "next-auth/next";
import {getSession} from "next-auth/react";

export default async function Navbar() {

    const session = await getServerSession(authOptions)
    console.log(session?.user)

  return (
      <div className="flex items-start justify-between h-auto">
          {!session?.user && <SignUp /> }
          {session?.user && <DashboardBTN />}
      </div>

  );
}
