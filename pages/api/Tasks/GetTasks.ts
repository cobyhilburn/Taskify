import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res.status(401).json({ message: "Sign in to make post" });

    //Get user
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    try {
      const data = await prisma.task.findMany({
        where: {
          userId: prismaUser.id,
        },
        orderBy: {
          createdAt: "desc"
        }
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "Error fetching posts" });
    }
  }
}
