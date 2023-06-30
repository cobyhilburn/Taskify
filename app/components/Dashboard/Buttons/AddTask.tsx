"use client";
import AddTaskToggle from "@/app/components/Dashboard/Buttons/AddTaskToggle";
import { useState } from "react";

export default function AddTask() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-center">
      <button
        className="text-center bg-accentcolor p-2 justify-center text-[24px] text-secondarycolor rounded-md font-golos font-bold"
        onClick={(e) => {
          e.stopPropagation();
          setToggle(true);
        }}
      >
        ADD
        {toggle && <AddTaskToggle setToggle={setToggle} />}
      </button>
    </div>
  );
}
