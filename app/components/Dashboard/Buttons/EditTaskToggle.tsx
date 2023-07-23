"use client";
import {Dispatch} from "react";
import { useState } from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

const OPTIONS: Options[] = [
        "incomplete",
        "complete"
]
type Options = "incomplete" | "complete"

interface EditTaskToggle {
    setToggle: (open: boolean) => void;
    id: Dispatch<React.SetStateAction<string>>;
    title: Dispatch<React.SetStateAction<string>>;
    iscompleted: Dispatch<React.SetStateAction<boolean>>;
  }
interface IProps {
    setToggle: (open: boolean) => void;
    id: string,
    title: string,
    iscompleted: boolean
}

interface IFormdata {
    task: string;
    completed: boolean;
    id: string;
  }
  

export default function EditTaskToggle({ setToggle, id , title, iscompleted}: IProps ) {
    const queryClient = useQueryClient()
    const [completed, isCompleted] = useState(iscompleted  );
    const [task, setTask] = useState(title);

    

    const  mutation = useMutation(
        async () => await axios.put("/api/Tasks/EditTask", {
            title: task,
            completed: completed,
            id: id
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }),
        {
            onError: (error) => {
                console.log(error);
            },
            onSuccess: () => {
                queryClient.invalidateQueries(["tasks"])
            },
        }
    );



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formData: IFormdata = {
            task: task, 
            completed: completed, 
            id: id
        };
        mutation.mutate();
        setToggle(false);
    };

    const handleSelectChange = async (e: React.FormEvent) => {
        const value = e.target as HTMLSelectElement
        const selected = value.options[value.selectedIndex].text;
        if (selected === "complete") {
            isCompleted(true);
        } else if (selected === "incomplete") {
            isCompleted(false);
        }
    };




    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
            }}
            className="fixed bg-black/50 w-full h-full z-20 left-0 top-0 "
        >
            <div className="absolute bg-secondarycolor top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-[20px] flex flex-col border-primary-color border-4">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col align-middle items-start w-[600px] "
                >
                    <h1 className="font-golos text-[30px] text-primarycolor font-bold mb-[10px]">
                        UPDATE TASK
                    </h1>
                    <div className="flex flex-col items-start w-full">
                        <label
                           
                            className="font-bold text-[20px] font-golos text-accentcolor"
                        >
                            TITLE
                        </label>

                        <input
                            defaultValue={title}
                            onChange={(e) => setTask(e.target.value)}
                            className="border-primarycolor border-2 rounded-md font-golos font-normal text-black w-full text-[25px] py-[10px] px-[10px] h-[60px] focus:border-primarycolor focus-visible:outline-0"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col items-start w-full mt-[10px]">
                        <label className="font-bold text-[20px] font-golos text-accentcolor">
                            STATUS
                        </label>
                        <select
                            onChange={(e) => handleSelectChange((e))}
                            defaultValue={completed ? "complete" : "incomplete"}
                            className="w-full border-2 rounded-md font-golos font-normal text-black text-[25px] py-[10px] px-[10px] h-[60px] border-primarycolor focus:border-primarycolor focus-visible:outline-0"
                        >
                            {OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex mt-[70px] gap-[10px] items-center text-center">
                        <button
                            type="submit"
                            className="px-[15px] py-[10px] bg-accentcolor text-white font-golos font-bold text-center rounded-[5px] text-[20px]"
                        >
                           UPDATE
                        </button>
                        <button
                            className="px-[20px] py-[10px] bg-white border font-golos border-primarycolor text-primarycolor font-bold text-center rounded-[5px] text-[20px]"
                            onClick={() => setToggle(false)}
                        >
                            CANCEL
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
