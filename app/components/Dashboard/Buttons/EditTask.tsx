"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import {useState} from "react";
import EditTaskToggle from "@/app/components/Dashboard/Buttons/EditTaskToggle";


interface IProps {
    id: string,
    completed: boolean,
    title: string,
}

export default function EditTask({id, completed, title}: IProps) {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button onClick={() => {setToggle(true)}}>
                <FontAwesomeIcon style={{color: "#FFA500"}} icon={faPenToSquare} />
            </button>
            {toggle && <EditTaskToggle id={id} title={title} iscompleted={completed} setToggle={setToggle}/>}
        </div>
    )

}