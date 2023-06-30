import {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import prisma from "../../../prisma/client"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === "DELETE") {
        const session = await getServerSession(req, res, authOptions)
        if (!session) {
            res.status(401).json({message: "Unauthorized "})
        }
        const {id: string} = req.query

        //Delete Task
        try {
            await prisma.task.delete({
                where: {
                    id: id,
                },
            });
            res.status(200).json({message: "Task deleted"})
        }catch(error){
            res.status(500).json({message: "An error occurred while deleting task"})
        }

    }
}
