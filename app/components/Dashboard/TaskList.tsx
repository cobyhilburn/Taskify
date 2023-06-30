"use client"

import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import Task from "@/app/components/Dashboard/Task";
import {useState} from "react";
import AddTask from "@/app/components/Dashboard/Buttons/AddTask";
import DeleteTask from "@/app/components/Dashboard/Buttons/DeleteTask";
import EditTask from "@/app/components/Dashboard/Buttons/EditTask";
import {Oval} from "react-loader-spinner";

interface tasks {

}
const fetchTasks = async () => {
    const response = await axios.get("/api/Tasks/GetTasks");
    return response.data;
};


export default function TaskList() {


    const { data, isLoading, error } = useQuery({
        queryFn: fetchTasks,
        queryKey: ["tasks"],
    });
    if (error) return error;

    if (isLoading) return <Oval
        height={700}
        width={80}
        color="#FFA500"
        wrapperStyle={{}}
        wrapperClass="content-center flex items-center justify-center"
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#005EB8"
        strokeWidth={2}
        strokeWidthSecondary={2}

    />;

   console.log(data)


    return(
       <div>
           <div className="grid-cols-3 grid gap-4 content-center items-center font-bold px-[20px] pt-[30px] font-golos text-primarycolor text-[24px] pb-[10px] mb-[30px] border-b-2 border-accentcolor">
        <div>
            <h1>TASK</h1>
        </div>
           <div>
               <h1 className="text-center">STATUS</h1>
           </div>
           <div>
               <AddTask />
           </div>
           </div>
           {data?.map((task) => {
               const completionStatus = task.completed ? "Complete" : "Incomplete"
               return (
                   <div
                   key={task.id}
                   id={task.id}
                       className="grid-cols-3 grid gap-4 bg-primarycolor px-[20px] rounded-[50px] text-center h-[70px] items-center font-normal font-golos text-secondarycolor mb-[20px] text-[20px]">
                       <div>
                           <h1 className={`text-left capitalize ${task.completed ? "line-through decoration-accentcolor " : ""}`}>{task.title}</h1>
                       </div>
                       <div>
                           <h1 className="text-center">{completionStatus}</h1>
                       </div>
                       <div className="flex justify-center gap-[10px]">
                           <DeleteTask id={task.id} />
                           <EditTask title={task.title} completed={task.completed} id={task.id}/>
                       </div>
                   </div>
               )
           })}
       </div>
    )
}