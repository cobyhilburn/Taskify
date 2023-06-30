export default function Metrics() {
    return(
        <section className="bg-accentcolor">
            <div  className="container mx-auto max-w-[1903px] p-[100px] flex place-content-center items-center">
                <div className="flex flex-col justify-items-start max-w-[1000px] gap-[20px] w-full h-fit">
                    <div className="flex flex-row flex-nowrap max-w-[1000px] w-full gap-[20px]">
                        <div className="bg-[#67A297] flex flex-col items-center text-center justify-center h-[320px] p-[60px] max-w-[620px] min-w-[620px]">
                            <h1 className="font-unbounded font-[700] text-primarycolor text-[72px]">1000's</h1>
                            <p className="font-golos font-normal text-black text-[20px]">of happy users already on board</p>
                        </div>
                        <div className="bg-[#67A297] flex items-center h-[320px] p-[60px] w-[320px] flex-col text-center justify-center">
                            <h1>Text</h1>
                        </div>
                    </div>
                    <div className="flex flex-row flex-nowrap gap-[20px]">

                        <div className="bg-[#67A297] flex items-center h-[320px] p-[60px] w-[320px] flex-col text-center justify-center">
                            <h1>Text</h1>
                        </div>
                        <div className="bg-[#67A297] flex flex-col items-center text-center justify-center h-[320px] p-[60px] min-w-[620px]">
                            <h1 className="font-unbounded font-[700] text-primarycolor text-[72px]">5</h1>
                            <p className="font-golos font-normal text-black text-[20px]">minutes to master the app</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}