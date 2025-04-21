"use client"

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GiSushis } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";



export default function NumberProject() {
    return (
        <div className={"mx-auto w-full bg-gradient-to-b from-gray-900 to-blue-950 text-white"}>
            <div className={"pb-20"}>
            </div>

                    <h1 className={"font-bold text-2xl md:text-5xl max-w-4xl mx-auto justify-center flex items-center"}>
                        <span className={"text-gradient text-5xl md:text-7xl mr-2"}>9</span>
                        <p>projets disponible sur <Link href={"https://github.com/Lxckyluck"}
                                                        className={"hover:text-blue-300"}>github</Link>.</p>
                    </h1>
                    <div className={"mt-12 flex mx-auto text-xl md:text-3xl md:max-w-5xl max-w-sm justify-between font-bold"}>
                    </div>
        </div>
    )
}