"use client"
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import {useEffect} from "react";

export default function Ctf_and_platformes() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className={"bg-gradient-to-b from-blue-800 via-blue-700 to-blue-950 h-[1200px] md:h-[950px] sm:pt-14 md:pt-20"}>
            <section className={"h-[200px] max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto overflow-hidden bg-gray-950 rounded-lg"}>
                <p className={"text-white text-4xl md:text-6xl font-bold text-center mt-16 md:mt-20"}>CTF & PLATFORMES</p>
                <div className={"div-animation"}></div>
            </section>
            <section className={"max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto w-full mt-16 md:flex justify-around"}>
                <article data-aos="fade-up-right" data-aos-delay="150"
                    className={"p-4 mb-12 rounded-lg max-w-lg w-full bg-gradient-to-tl from-gray-800 from-30% via-gray-800 via-65% to-red-600"}>
                    <section className={"h-[360px] mx-auto max-w-md w-full"}>
                        <div className={"w-full items-center flex"}>
                            <div className={"w-full max-w-40"}>
                                <Link href={"https://www.root-me.org/"} className={"mx-auto w-full"}><Image src={"/ctf/rootme.png"}
                                                                                    className={"mx-auto transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300"} alt={""}
                                                                                    height={"100"}
                                                                                    width={"100"}></Image></Link>
                                <p className={"text-white font-bold py-2 text-center"}>Root-me</p>
                            </div>
                            <div className={"w-full max-w-48 mx-auto"}>
                                <div>
                                    <p className={"absolute text-sm font-bold text-white"}>Name</p>
                                    <p className={"text-white text-3xl font-bold my-2 py-4"}>Talace</p>
                                </div>
                                <p className={"absolute text-sm font-bold text-white"}>Rank <span
                                    className={"text-red-600"}>trainee</span></p>
                                <p className={"text-7xl py-3 font-bold text-white"}>3375<span
                                    className={"text-lg"}>pts</span></p>
                            </div>
                        </div>
                        <div className={"pt-8"}>
                            <p className={"text-center text-white font-bold text-lg max-w-36 bg-red-600 rounded-md mx-auto"}>Top
                                catégories</p>
                            <section className={"justify-around flex pt-2"}>
                                <div className={"max-w-24 md:max-w-32"}>
                                    <p className={"text-white font-bold text-center "}>Web - serveur</p>
                                    <p className={"text-3xl md:text-6xl font-bold text-center w-full mx-auto bg-gradient-to-r from-red-600 to-gray-500 bg-clip-text text-transparent"}>90%</p>
                                </div>
                                <div className={"max-w-24 md:max-w-32"}>
                                    <p className={"text-white font-bold text-center text-sm md:text-lg"}>Réseau</p>
                                    <p className={"text-3xl md:text-6xl font-bold text-center w-full mx-auto bg-gradient-to-r from-gray-500 to-red-600 bg-clip-text text-transparent"}>48%</p>
                                </div>
                                <div className={"max-w-24 md:max-w-32 "}>
                                    <p className={"text-white font-bold text-center text-sm md:text-lg"}>Web -
                                        client</p>
                                    <p className={"text-3xl md:text-6xl font-bold text-center w-full mx-auto bg-gradient-to-r from-red-600 to-gray-500 bg-clip-text text-transparent"}>36%</p>
                                </div>
                            </section>
                        </div>
                    </section>
                </article>
                <article data-aos="fade-up-left" data-aos-delay="200"
                    className={"p-4 mb-12 rounded-lg max-w-lg w-full bg-gradient-to-tl from-gray-800 from-30% via-gray-800 via-65% to-green-400"}>
                    <section className={"h-[360px] mx-auto max-w-md w-full"}>
                        <div className={"w-full items-center flex"}>
                            <div className={"w-full max-w-40"}>
                                <Link href={"https://app.hackthebox.com/users/1551559"} className={"mx-auto w-full"}><Image src={"/ctf/HTB1.png"}
                                                                                    className={"mx-auto transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300"} alt={""}
                                                                                    height={"120"}
                                                                                    width={"120"}></Image></Link>
                                <p className={"text-white font-bold py-2 text-center"}>HackTheBox</p>
                            </div>
                            <div className={"w-full max-w-48 mx-auto"}>
                                <div>
                                    <p className={"absolute text-sm font-bold text-white"}>Name</p>
                                    <p className={"text-white text-3xl font-bold my-2 py-4"}>MyBoyTalace</p>
                                </div>
                                <p className={"absolute text-sm font-bold text-white mr-2"}>Rank</p>
                                <p className={"text-5xl md:text-7xl py-3 font-bold text-green-400"}>Hacker</p>
                            </div>
                        </div>
                        <div className={"pt-8"}>
                            <p className={"text-center text-white font-bold text-lg max-w-36 bg-green-400 rounded-md mx-auto"}>Flags</p>
                            <section className={"justify-around flex pt-2"}>
                                <div className={"max-w-24 md:max-w-32"}>
                                    <p className={"text-white font-bold text-center "}>Easy</p>
                                    <p className={"text-3xl md:text-6xl font-bold text-center w-full mx-auto bg-gradient-to-r from-green-400 to-gray-500 bg-clip-text text-transparent"}>20</p>
                                </div>
                                <div className={"max-w-24 md:max-w-32"}>
                                    <p className={"text-white font-bold text-center text-sm md:text-lg"}>Medium</p>
                                    <p className={"text-3xl md:text-6xl font-bold text-center w-full mx-auto bg-gradient-to-r from-gray-500 to-green-400 bg-clip-text text-transparent"}>1</p>
                                </div>
                                <div className={"max-w-24 md:max-w-32 "}>
                                    <p className={"text-white font-bold text-center text-sm md:text-lg"}>Hard</p>
                                    <p className={"text-3xl md:text-6xl font-bold text-center w-full mx-auto bg-gradient-to-r from-green-500 to-gray-400 bg-clip-text text-transparent"}>2</p>
                                </div>
                            </section>
                        </div>
                    </section>
                </article>
            </section>
        </div>
    )
}