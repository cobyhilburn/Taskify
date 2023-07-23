"use client"
import Link from "next/link";

export default function HomeButton() {
    return(
        <Link
            className="text-center bg-secondarycolor p-2 justify-center text-[20px] text-accentcolor rounded-md font-golos font-bold"
            href="/">
            Home
        </Link>

    )

}