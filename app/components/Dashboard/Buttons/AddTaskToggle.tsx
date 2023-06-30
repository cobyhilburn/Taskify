"use client";

import { useState } from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

export default function AddTaskToggle({ setToggle }) {
  const queryClient = useQueryClient()
  const [completed, isCompleted] = useState(false);
  const [task, setTask] = useState("");

  const { mutate } = useMutation(
    async (formdata) => await axios.post("/api/Tasks/AddTask", { formdata }),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["tasks"])
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = [task, completed];
    mutate(formdata);
    setToggle(false);
  };

  const handleSelectChange = async (e) => {
    const { value } = e.target;
    if (value === "true") {
      isCompleted(true);
    } else if (value === "false") {
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
          <h1 className="text-[30px] text-primarycolor font-golos font-bold mb-[10px]">
            ADD TASK
          </h1>
          <div className="flex flex-col items-start w-full">
            <label
              for="task"
              className="text-[20px]  font-golos font-bold text-accentcolor"
            >
              TITLE
            </label>
            <input
              onChange={(e) => setTask(e.target.value)}
              className="border-primarycolor border-2 rounded-md font-golos font-normal text-black w-full text-[25px] py-[10px] px-[10px] h-[60px] focus:border-primarycolor focus-visible:outline-0"
              required={true}
            />
          </div>
          <div className="flex flex-col items-start w-full mt-[10px]">
            <label className="text-[20px]  font-golos font-bold text-accentcolor">
              STATUS
            </label>
            <select
              className="w-full border-2 rounded-md font-golos font-normal text-black text-[25px] py-[10px] px-[10px] h-[60px] border-primarycolor focus:border-primarycolor focus-visible:outline-0"
              value={completed.toString()}
              onChange={handleSelectChange}
            >
              <option value="false">Incomplete</option>
              <option value="true">Complete</option>
            </select>
          </div>
          <div className="flex mt-[70px] gap-[10px] items-center text-center">
            <button
              type="submit"
              className="px-[15px] py-[10px] bg-accentcolor text-white font-golos font-bold text-center rounded-[5px] text-[20px]"
            >
              ADD
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
