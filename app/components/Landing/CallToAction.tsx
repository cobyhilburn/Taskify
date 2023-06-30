"use client"
import {signIn} from "next-auth/react";
export default function CallToAction() {
    return(
        <section className="bg-primarycolor">
            <div className="container mx-auto flex flex-col items-center justify-center h-[810px] p-[100px] relative gap-[40px]">
                <div className="flex flex-col gap-[40px] max-w-[1000px] w-full justify-center items-center text-center relative h-fit">
                    <div className="flex flex-col max-w-[1000px] relative gap-[40px] text-center justify-center items-center">
                    <h1 className="font-unbounded font-bold text-secondarycolor text-[48px] leading-[1.2em]">Ready to revolutionize <br />
                        how you tackle tasks? <br />
                        Join the Taskify family <br /> today and kiss <br />disorganization goodbye!</h1>
                    <div>
                        <button className="p-[15px] bg-accentcolor text-[14px]" onClick={() => signIn()}>Join Now!</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}