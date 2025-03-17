"use client"
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineDevices } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";

export default function CardSituation({array}) {

    function onClickCard(){

        let baseUrl = window.location.protocol + '//' + window.location.hostname;
        if (window.location.port) {
            // Add port if it's not the default port
            baseUrl += ':' + window.location.port;
        }

        // const url = window.location.href;

        if (!array.link) {
            toast.error("Documentation privée", {
                theme: "dark"
            });
        } else {
            if (array.link.toLowerCase().includes("http")) {
                window.open(array.link);
            } else {
                window.open(baseUrl + array.link);
            }

        }
    }

    return (
        <div className={"w-[310px] mt-10"}>
            <ToastContainer />
            <button onClick={onClickCard} className={"w-[310px] transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300"}>
                <header className={array.style}>
                </header>
                <article className={"bg-gray-600 h-full rounded-b-xl w-full"}>
                    <section className={"w-full max-w-[280px] mx-auto"}>
                        <h1 className={"text-center font-bold text-xl pt-2"}>{array.title}</h1>
                        <p className={"text-gray-200 w-full h-32 my-4 overflow-clip"}>
                            {array.description}
                        </p>
                        <div className={"w-full flex justify-between pb-3 text-lg"}>
                            <div className={"flex items-center"}>
                                <MdOutlineDevices className={"mr-2"}/>
                                <p>{array.category}</p>
                            </div>
                            <div className={"flex items-center"}>
                                <FaClockRotateLeft className={"mr-2"}/>
                                <p>{array.time}</p>
                            </div>
                        </div>
                    </section>
                </article>
            </button>
        </div>
    )
}