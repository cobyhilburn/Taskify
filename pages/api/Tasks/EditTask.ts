import {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import prisma from "../../../prisma/client"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === "PUT") {
        const session = await getServerSession(req, res, authOptions)
        if(!session)
            return res.status(401).json({message: "Unauthorized "})
        
        const {title, completed, id} = req.body
        console.log(req.body)

        //Edit Task
        try {
           const result = await prisma.task.update({
                where: {
                    id: id
                },
                data: {
                   title: title,
                    completed: completed,
                }
            })
            res.status(200).json(result)
        }catch (error){
            res.status(403).json({ err: "Error has occurred while making a post" });
        }

    }
    }
