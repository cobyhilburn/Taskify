"use client"
import {signOut} from "next-auth/react";

export default function Logout() {
    return(
        <button
            className="text-center bg-accentcolor p-2 justify-center text-[20px] text-secondarycolor rounded-md font-golos font-bold"
            onClick={() => signOut({callbackUrl: "http://localhost:3000/"})}>
            Sign Out
        </button>

    )

}