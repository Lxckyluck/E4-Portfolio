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
                        <span className={"text-gradient text-5xl md:text-7xl mr-2"}>14</span>
                        <p>availables projects on <Link href={"https://github.com/StopThatTalace"}
                                                        className={"hover:text-blue-300"}>github</Link>.</p>
                    </h1>
                    <div className={"mt-12 flex mx-auto text-xl md:text-3xl md:max-w-5xl max-w-sm justify-between font-bold"}>
                        <Link href={"https://github.com/"} className={"flex items-center hover:text-blue-300"}>
                            <FaGithub className={"mr-1"}/>
                            <p>Personal</p>
                        </Link>
                        <Link className={"flex items-center hover:text-blue-300"} href={"https://github.com/"}>
                            <GiSushis className={"mr-1"}/>
                            <p>WorkGroup</p>
                        </Link>
                        <Link href={"https://github.com/"} className={"flex items-center hover:text-blue-300"}>
                            <GrGroup className={"mr-1"}/>
                            <p>CyberTeam</p>
                        </Link>
                    </div>
        </div>
    )
}