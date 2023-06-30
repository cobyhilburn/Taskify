import Image from "next/image";
import Lightning from "./lightning.svg"
export default function About() {
    return(
        <section className="bg-secondarycolor">
            <div className="container mx-auto max-w-[1903px] h-[475px] max-h-[475px] p-[100px] flex place-content-center items-center">
                <div className="flex flex-col justify-items-start max-w-[1000px] w-full h-fit gap-[40px]">
                    <h1 className="font-unbounded text-black text-[48px] font-[700] leading-[1.2em] ">Task Management <br />Reinvented!</h1>

                    <p className="font-golos text-primarycolor font-normal text-[20px] leading-[1.5em] ">Welcome to Taskify, the casual todo app that will transform <br />
                        the way you organize your life. Forget those boring, run-of-<br />
                        the-mill task apps—Taskify brings fun and simplicity into the<br />
                        mix.</p>
                </div>
            </div>

        </section>
    )
}