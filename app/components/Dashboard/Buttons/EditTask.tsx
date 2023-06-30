"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import {useState} from "react";
import AddTaskToggle from "@/app/components/Dashboard/Buttons/AddTaskToggle";

import EditTaskToggle from "@/app/components/Dashboard/Buttons/EditTaskToggle";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Props {
    id: string,
    completed: boolean,
    title: string,
}

export default function EditTask({id, completed, title}: Props) {
    const [toggle, setToggle] = useState(false)

    return (
        <div>

            <button onClick={(e) => {setToggle(true)}}>
                <FontAwesomeIcon style={{color: "#FFA500"}} icon={faPenToSquare} />
            </button>
            {toggle && <EditTaskToggle id={id} title={title} iscompleted={completed} setToggle={setToggle}/>}
        </div>
    )

}