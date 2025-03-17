"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function CertifPage() {

    useEffect(() => {
        AOS.init()
    }, [])

    const OnClickButtonParcours = () => {
        const ParcoursSection = document.getElementById('parcours');
        ParcoursSection.scrollIntoView({behavior: 'smooth'});
    }

    const OnClickButtonOrganisation = () => {
        const OrgaSection = document.getElementById('orga');
        OrgaSection.scrollIntoView({behavior: 'smooth'});
    }

    const OnClickButtonCertif = () => {
        const CertifSection = document.getElementById('certif');
        CertifSection.scrollIntoView({behavior: 'smooth'});
    }

    const OnClickButtonConclusion = () => {
        const ConcluSection = document.getElementById('conclusion');
        ConcluSection.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className={"w-full bg-gradient-to-b h-full from-gray-900 to-blue-950"}>
            <section data-aos="fade-up" data-aos-delay="200" className={"max-w-6xl mx-auto w-full text-white pt-[150px] h-full"}>
                <h1 className={"text-center text-7xl font-bold"}>CERTIFICATION(S)</h1>
                <section className={"py-16 bg-[url('/certif/bg.png')] bg-cover bg-center mb-8 rounded-md  mt-14"}>
                    <h2 className={"text-3xl font-bold mb-3 text-white text-center"}>
                        Chapter(s)
                    </h2>
                    <div
                        className={"w-full max-w-sm sm:max-w-lg md:max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 font-bold"}>
                        <button onClick={OnClickButtonParcours}
                                className={"overflow-hidden p-12 bg-gray-800 w-full rounded-md hover:brightness-150 active:opacity-75 outline-none duration-300 group relative"}>
                             <span
                                 className="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Career path
                        </button>
                        <button onClick={OnClickButtonOrganisation}
                                className={"overflow-hidden p-12 bg-gray-800 w-full rounded-md hover:brightness-150 active:opacity-75 outline-none duration-300 group relative"}>
                             <span
                                 className="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Organisation
                        </button>
                        <button onClick={OnClickButtonCertif}
                                className={"overflow-hidden p-12 bg-gray-800 w-full rounded-md hover:brightness-150 active:opacity-75 outline-none duration-300 group relative"}>
                             <span
                                 className="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Certifications
                        </button>
                        <button onClick={OnClickButtonConclusion}
                                className={"overflow-hidden p-12 bg-gray-800 w-full rounded-md hover:brightness-150 active:opacity-75 outline-none duration-300 group relative"}>
                             <span
                                 className="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Conclusion
                        </button>
                    </div>
                </section>
                <p className={"mb-60 text-center text-gray-400 italic"}>Oral certification test BTS SIO 2024</p>
                <section data-aos='zoom-in' data-aos-delay="200" id={"parcours"} className={"w-full pt-96 pb-40"}>
                    <header className={"w-full"}>
                        <p className={"text-2xl font-bold text-center bg-green-400 max-w-40 rounded-md mx-auto"}>Path</p>
                        <h1 className={"text-center text-xl md:text-5xl font-bold max-w-md md:max-w-3xl mx-auto my-5"}>
                            Why pursue certifications in addition to courses?
                        </h1>
                    </header>
                    <Carousel className={"max-w-4xl mx-auto w-full rounded-md py-10"}>
                        <CarouselContent className="h-[400px] w-[880px] rounded-md">
                            <CarouselItem
                                className="mx-6 rounded-lg bg-[url('/certif/parcours/cyber.jpg')] h-full bg-no-repeat bg-cover bg-center">
                                <section
                                    className={"left-6 absolute rounded-lg w-full bg-gradient-to-br from-black to-transparent h-full"}>
                                    <div className={"p-4"}>
                                        <header>
                                            <h1 className={"text-6xl py-36 text-center pb-6 font-bold"}>
                                                Skill enhancement
                                            </h1>
                                        </header>
                                    </div>
                                </section>
                            </CarouselItem>
                            <CarouselItem
                                className="ml-14 rounded-lg bg-[url('/certif/parcours/bg-ready.jpeg')] h-full bg-no-repeat bg-cover bg-center">
                                <section
                                    className={"left-[984px] absolute rounded-lg w-full bg-gradient-to-br from-black to-transparent h-full"}>
                                    <div className={"p-4"}>
                                        <header>
                                            <h1 className={"text-5xl py-36 pb-6 font-bold text-center"}>
                                                Preparing for the world of work
                                            </h1>
                                        </header>
                                    </div>
                                </section>
                            </CarouselItem>
                            <CarouselItem
                                className="ml-16 rounded-lg bg-[url('/certif/parcours/purpose.png')] h-full w-[200px] bg-no-repeat bg-cover bg-center">
                                <section
                                    className={"left-[1928px] absolute rounded-lg w-full bg-gradient-to-br from-black to-transparent h-full"}>
                                    <div className={"p-4"}>
                                        <header>
                                            <h1 className={"text-5xl py-36 pb-6 text-center font-bold"}>
                                                Increase your attractiveness on the job market
                                            </h1>
                                        </header>
                                    </div>
                                </section>
                            </CarouselItem>
                            <CarouselItem
                                className="ml-16 rounded-lg bg-[url('/certif/parcours/diriger.jpg')] h-full w-[200px] bg-no-repeat bg-cover bg-center">
                                <section
                                    className={"left-[2872px] absolute rounded-lg w-full bg-gradient-to-br from-black to-transparent h-full"}>
                                    <div className={"p-4"}>
                                        <header>
                                            <h1 className={"text-5xl py-36 pb-6 text-center font-bold"}>
                                                To be able to delve deeper into the subjects covered in training and other courses
                                            </h1>
                                        </header>
                                    </div>
                                </section>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNext className={"right-3 md:right-[-40px] text-black size-10"}/>
                        <CarouselPrevious className={"left-3 md:left-[-45px] text-black size-10"}/>
                    </Carousel>
                </section>
                <section id={"orga"} className={"w-full py-24 pb-40"}>
                    <header className={"w-full"}>
                        <p className={"text-2xl font-bold text-center bg-indigo-400 max-w-40 rounded-md mx-auto"}>Organisation</p>
                        <h1 className={"text-center text-xl md:text-5xl font-bold max-w-md md:max-w-3xl mx-auto my-5"}>
                            How did I manage to reconcile my personal time, my training and my work?
                        </h1>
                    </header>
                    <section
                        className={"w-full max-w-xs md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 my-28"}>
                        <div className={"p-4 w-full rounded-md bg-gray-700"}>
                            <h2 className={"text-5xl text-center pb-4"}>👩‍💻</h2>
                            <p className={"text-center text-2xl font-bold pb-4"}>Organizing my time</p>
                            <p className={"max-w-72 text-center text-lg mx-auto"}>
                                At vero eos and accusamus and iusto odio dignissimos ducimus which
                            </p>
                        </div>
                        <div className={"p-4 w-full rounded-md bg-gray-700"}>
                            <h2 className={"text-5xl text-center pb-4"}>🎯</h2>
                            <p className={"text-center text-2xl font-bold pb-4"}>Setting goals</p>
                            <p className={"max-w-72 text-center text-lg mx-auto"}>
                                Facere possimus, omnis voluptas assumenda est, omnis
                            </p>
                        </div>
                        <div className={"p-4 w-full rounded-md bg-gray-700"}>
                            <h2 className={"text-5xl text-center pb-4"}>⚒️</h2>
                            <p className={"text-center text-2xl font-bold pb-4"}>Organizing my tasks</p>
                            <p className={"max-w-72 text-center text-lg mx-auto"}>
                                Hic tenetur a sapiente delectus, ut aut reciendis voluptatibus
                            </p>
                        </div>
                    </section>
                </section>
                <section id={"certif"} className={"w-full py-24 pb-40"}>
                    <header className={"w-full"}>
                        <p className={"text-2xl font-bold text-center bg-red-400 max-w-40 rounded-md mx-auto"}>Certifications</p>
                        <h1 className={"text-center text-xl md:text-5xl font-bold max-w-md md:max-w-3xl mx-auto my-5"}>
                            What certifications have I chosen and what have they taught me?
                        </h1>
                    </header>
                    <section
                        className={"w-full max-w-xs md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 my-28"}>
                        <div
                            className={"transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 w-full rounded-md bg-gray-700 bg-[url('/certif/Dante.png')] bg-cover bg-center h-[200px]"}>
                        </div>
                        <div
                            className={"transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 w-full rounded-md bg-gray-700 bg-[url('/certif/ejpt.png')] bg-cover bg-center h-[200px]"}>
                        </div>
                        <div
                            className={"transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 w-full rounded-md bg-gray-700 bg-[url('/certif/junior.png')] bg-cover bg-center h-[200px]"}>
                        </div>
                        <div
                            className={"transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 w-full rounded-md bg-gray-700 bg-[url('/certif/comptia.png')] bg-cover bg-center h-[200px]"}>
                        </div>
                        <div
                            className={"transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 w-full rounded-md bg-gray-700 bg-[url('/certif/web.png')] bg-cover bg-center h-[200px]"}>
                        </div>
                        <div
                            className={"transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 w-full rounded-md bg-gray-700 bg-[url('/certif/intro.png')] bg-cover bg-center h-[200px]"}>
                        </div>
                        <div
                            className={"transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 w-full rounded-md bg-gray-700 bg-[url('/certif/pre.png')] bg-cover bg-center h-[200px]"}>
                        </div>
                        <div
                            className={"transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 w-full rounded-md bg-gray-700 bg-[url('/certif/complet.png')] bg-cover bg-center h-[200px]"}>
                        </div>
                    </section>
                </section>
                <section id={"conclusion"} className={"w-full py-24 pb-40"}>
                    <header className={"w-full"}>
                        <p className={"text-2xl font-bold text-center bg-red-400 max-w-40 rounded-md mx-auto"}>Conclusion</p>
                        <h1 className={"text-center text-xl md:text-5xl font-bold max-w-md md:max-w-3xl mx-auto my-5"}>
                            Conclusion
                        </h1>
                    </header>
                    <section
                        className={"w-full max-w-xs md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 my-28"}>
                        <div className={"p-4 w-full rounded-md bg-gray-700"}>
                            <h2 className={"text-5xl text-center pb-4 pt-10"}>🏆</h2>
                            <p className={"text-center text-2xl font-bold pb-4"}>A passion that drives me to excel</p>
                        </div>
                        <div className={"p-4 w-full rounded-md bg-gray-700"}>
                            <h2 className={"text-5xl text-center pb-4 pt-10"}>🏫</h2>
                            <p className={"text-center text-2xl font-bold pb-4"}>A schedule that encourages me to organize myself better</p>
                        </div>
                        <div className={"p-4 w-full rounded-md bg-gray-700"}>
                            <h2 className={"text-5xl text-center pb-4 pt-10"}>🧑‍💻</h2>
                            <p className={"text-center text-2xl font-bold pb-4"}>A profession that makes me dream</p>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}