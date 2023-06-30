import Link from "next/link";
export default function DashboardBTN() {
    return (
        <button className="text-center bg-accentcolor p-2 justify-center text-[20px] text-secondarycolor rounded-md font-golos font-bold">
            <Link href="/dashboard">Launch</Link>
        </button>
    )
}