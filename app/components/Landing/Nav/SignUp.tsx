"use client"
import {signIn} from "next-auth/react";




export default function SignUp() {


    return(
            <button
                className="text-center bg-accentcolor p-2 justify-center text-[20px] text-secondarycolor rounded-md font-golos font-bold"
                onClick={() => signIn("google", {
                    callbackUrl: "http://localhost:3000/dashboard"
                })}>
                Sign Up
            </button>

    )

}