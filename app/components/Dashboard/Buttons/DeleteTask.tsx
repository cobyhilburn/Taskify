import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import axios from "axios";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";


export default function DeleteTask({id}) {
    const queryClient = useQueryClient()

    const {mutate} = useMutation(
        async (id: string) =>
            await axios.delete(`/api/Tasks/DeleteTask?id=${id}`,),
        {
            onError: (error) => {
                console.log(error)
            },
            onSuccess: (data) => {
                console.log(data)
                queryClient.invalidateQueries(["tasks"])
            }

        }
    )

    const handleTaskDeletion = () => {
        mutate(id)
    }

    return(
        <div>
            <button onClick={handleTaskDeletion}>
                <FontAwesomeIcon style={{color: "FFA500"}} icon={faTrash} />
            </button>
        </div>

    )
}