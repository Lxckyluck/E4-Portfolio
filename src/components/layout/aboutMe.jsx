"use client";
import Image from "next/image";
import { FaSchool } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { TfiLoop } from "react-icons/tfi";
import { GiSpiderWeb } from "react-icons/gi";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="mx-auto w-full bg-gradient-to-t h-full from-gray-900 to-blue-950 pb-3">
      <div className={"max-w-7xl mx-auto"}>
        <h1
          id={"about-me"}
          className={
            "py-2 mx-auto text-6xl font-bold text-center rounded bg-gradient-to-r from-green-400 to-primary max-w-sm text-white"
          }
        >
          Whoami
        </h1>
        <div
          className={
            "max-w-sm md:max-w-xl mx-auto w-full my-5 rounded-lg bg-gray-700"
          }
        >
          <div
            className={
              "max-w-xs md:max-w-lg mx-auto w-full py-7 block md:flex items-center"
            }
          >
            <Avatar className={"size-36 hidden md:flex"}>
              <AvatarImage src="/aboutMe/photo.jpg" />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
            <div className={"w-full md:ml-5"}>
              <h1 className={"text-2xl text-center font-bold text-white"}>
                Lucas DENIS
              </h1>
              <p className={"text-gray-300 text-center italic text-sm mb-2"}>
                Étudiant / développeur Junior
              </p>
              <div
                className={
                  "mx-auto w-full max-w-20 text-center mb-3 flex justify-between"
                }
              >
                <Link target="_blank" href={"https://github.com/"}>
                  <Image
                    className={"rounded-md bg-red-500"}
                    src={"/logoTechnoTools/github.png"}
                    alt={"github"}
                    width={"35"}
                    height={"35"}
                  ></Image>
                </Link>
                <Link target="_blank" href={"https://www.linkedin.com/"}>
                  <Image
                    className={"rounded-md bg-red-800"}
                    src={"/logoTechnoTools/Linkedin.png"}
                    alt={"linkedin"}
                    width={"35"}
                    height={"35"}
                  ></Image>
                </Link>
              </div>
              <section
                className={
                  "grid grid-cols-2 gap-2 max-w-96 mx-auto w-full text-white"
                }
              >
                <div
                  className={
                    "flex items-center max-w-56 mx-auto w-full hover:bg-gray-600 bg-gray-500 p-2 rounded-md"
                  }
                >
                  <FaBirthdayCake className={"mr-2"} />
                  <p>20 ans</p>
                </div>
                <div
                  className={
                    "flex items-center max-w-56 mx-auto w-full bg-gray-500 hover:bg-gray-600 p-2 rounded-md"
                  }
                >
                  <FaLocationDot className={"mr-2"} />
                  <p>Marseille</p>
                </div>
              </section>
              <section className={"mx-auto max-w-40"}>
                <AlertDialog>
                  <AlertDialogTrigger
                    className={
                      "bg-blue-950 text-blue-400 border border-blue-400 " +
                      "border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4\n" +
                      "hover:border-b active:opacity-75 outline-none duration-300 group mt-4 w-full"
                    }
                  >
                    <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Voir le CV
                  </AlertDialogTrigger>
                  <AlertDialogContent
                    className={
                      "bg-primary border-0 max-w-sm md:max-w-lg bg-gradient-to-t from-gray-900 to-blue-850 rounded-md"
                    }
                  >
                    <AlertDialogHeader>
                      <AlertDialogDescription>
                        <iframe
                          src="/cv/Lucas DENIS - CV.pdf"
                          className={"w-full h-[400px] md:h-[600px] rounded-md"}
                        ></iframe>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter
                      className={"items-center grid grid-cols-2 gap-6"}
                    >
                      <AlertDialogCancel
                        className={
                          "items-center bg-red-600 text-white border-0 my-0"
                        }
                      >
                        Fermer
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </section>
            </div>
          </div>
        </div>
        <section className={"md:flex text-white my-7"}>
          <div className={"w-full mx-auto max-w-2xl h-full"}>
            <div
              className={
                "w-full max-w-sm mx-auto bg-gray-700 rounded-md h-[750px] py-4 transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300"
              }
            >
              <Image
                src={"/aboutMe/LOGO-NEXTECH.jpg"}
                alt={"school"}
                width={"100"}
                height={"100"}
                className={"mx-auto rounded-md my-5 py-4"}
              ></Image>
              <h1 className={"text-center text-2xl font-bold"}>
                Étudiant au BTS SIO{" "}
                <Link
                  href={""}
                  className={
                    "hover:text-white text-lg px-2 bg-gradient-to-r from-blue-400 to-green-500 rounded-lg\n" +
                    "py-2 mr-2 text-white font-bold transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 hover:to-indigo-300"
                  }
                >
                  Option SLAM
                </Link>
              </h1>
              <p className={"text-center text-lg my-3 max-w-xs mx-auto w-full"}>
                J&apos;ai effectué mes deux années de BTS au campus de Next
                Pertuis. Durant ces deux années j&apos;ai pu énormément
                apprendre grâce à des projets que j&apos;ai fait. Notamment
                grâce au projet FastSushi qui combine plusieurs types de stack
                dans un seul projet. Ce projet a aussi été le premier projet où
                je travaillais en groupe en utilisant Github & Trello.
              </p>
            </div>
          </div>
          <div className={"w-full mx-auto max-w-2xl h-full"}>
            <div
              className={
                "w-full max-w-sm mx-auto bg-gray-700 rounded-md h-[750px] py-4 transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300"
              }
            >
              <Image
                src={"/aboutMe/OTV.jpg"}
                alt={"company"}
                width={"100"}
                height={"100"}
                className={"mx-auto rounded-md my-5 py-4"}
              ></Image>
              <h1 className={"text-center text-2xl font-bold"}>
                Alternant Support & Solution chez
                <Link
                  href={""}
                  className={
                    "ml-2 hover:text-white text-lg p-5 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg\n" +
                    "py-2 mr-2 text-white font-bold transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 hover:to-indigo-300"
                  }
                >
                  OTV-SUD
                </Link>
              </h1>
              <p className={"text-center text-lg my-3 max-w-xs mx-auto w-full"}>
                Durant mes deux années de BTS en alternance, j&apos;ai pu occupé
                le poste d&apos;Alternant Support & Solution. Mes missions
                consistaient principalement à soutenir les projets de mon maitre
                d&apos;apprentissage mais j&apos;ai eu tout de même la
                possibilité de faire quelques projets par moi-même durant ces
                deux années.
              </p>
            </div>
          </div>
          <div className={"w-full mx-auto max-w-2xl h-full"}>
            <div
              className={
                "w-full max-w-sm mx-auto bg-gray-700 rounded-md h-[750px] py-4 transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300"
              }
            >
              <Image
                src={"/aboutMe/hobbies.png"}
                alt={"hobbies"}
                width={"100"}
                height={"100"}
                className={"mx-auto rounded-md my-5 py-4"}
              ></Image>
              <h1 className={"text-center text-2xl font-bold"}>
                Passioné de
                <Link
                  href={""}
                  className={
                    "hover:text-white text-lg p-3 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-500 rounded-lg\n" +
                    "py-2 ml-2 text-white font-bold transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 hover:to-indigo-300"
                  }
                >
                  Cyber-Sécurité
                </Link>
              </h1>
              <p className={"text-center text-lg my-3 max-w-xs mx-auto w-full"}>
                Bien que la spécialité choisie dans mon cursus soit la
                programmation, je suis fortement intéressé par le côté
                cybersécurité qui, pour moi, est plus passionnant et offre plus
                de débouchés.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
