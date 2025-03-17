import { ScrollArea } from "@/components/ui/scroll-area";
import { FaDev, FaHeadSideVirus, FaProjectDiagram } from "react-icons/fa";
import {
  MdAdminPanelSettings,
  MdDeviceHub,
  MdDevices,
  MdOutlineCellTower,
} from "react-icons/md";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { GrDeploy, GrTechnology } from "react-icons/gr";
import { PiTreeStructure } from "react-icons/pi";
import { IoIosCellular } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { GiCaptainHatProfile } from "react-icons/gi";
import { BiSolidAnalyse } from "react-icons/bi";
import { LiaSchoolSolid } from "react-icons/lia";
import { TbChefHat, TbDeviceDesktopCog } from "react-icons/tb";

export default function BtsPage() {
  return (
    <div
      className={
        "mx-auto w-full bg-gradient-to-b md:h-[1100px] h-[1800px] from-gray-900 to-blue-950 pb-3"
      }
    >
      <article
        className={
          "pt-28 text-white w-full max-w-6xl mx-auto h-[800px] animate-fade"
        }
      >
        <header className={"text-center"}>
          <p className={"text-6xl font-bold"}>BTS SIO</p>
          <h3
            className={
              "bg-gray-700 text-white rounded-lg max-w-4xl mx-auto px-6 py-4 mt-4"
            }
          >
            <p className={"text-white font-bold text-2xl pb-4"}>
              Qu&apos;est-ce que le BTS SIO ?
            </p>
            Le Brevet de Technicien Supérieur aux Services Informatiques aux
            Organisations, s&apos;adresse à ceux qui souhaitent se former en
            deux ans aux métiers d&apos;administrateur réseau ou de développeur.
            Pour par la suite intégrer directement le marché du travail ou
            continuer des études, dans le domaine de l&apos;informatique.
          </h3>
        </header>
        <section className={""}>
          <h1 className={"text-center text-6xl font-bold mt-16"}>
            <span
              className={
                "bg-gradient-to-r from-cyan-500 to-emerald-300 bg-clip-text text-transparent"
              }
            >
              Deux
            </span>{" "}
            options
          </h1>
          <div className={"h-[600px]"}>
            <section
              className={
                "md:grid md:grid-cols-2 w-full max-w-5xl justify-around mx-auto pt-10"
              }
            >
              <div className="group [perspective:1000px]">
                <div className="relative duration-700 transition-all text-white [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="[backface-visibility:hidden] absolute w-full h-full inset-0 [transform:rotateY(0deg)]">
                    <div
                      className={
                        "w-full bg-gray-700 h-[450px] mx-auto max-w-sm md:max-w-md rounded-xl"
                      }
                    >
                      <div className={"text-center font-bold text-7xl pt-32"}>
                        <p className={"pb-3"}>👩‍💻</p>
                        <p>SLAM</p>
                      </div>
                    </div>
                  </div>
                  <div className="[backface-visibility:hidden] absolute w-full mx-auto h-full inset-0 [transform:rotateY(180deg)]">
                    <div
                      className={
                        "w-full bg-gray-700 h-[450px] mx-auto max-w-sm md:max-w-md rounded-xl"
                      }
                    >
                      <div className={"text-center pt-5"}>
                        <p className={"font-bold text-3xl"}>SLAM</p>
                        <p className={"text-xl text-gray-400 italic"}>
                          Solutions Logicielles et Applications Métier
                        </p>
                        <div className={"pt-10"}>
                          <div
                            className={
                              "bg-gray-800 max-w-[380px] mx-auto rounded-lg"
                            }
                          >
                            <ScrollArea className="h-[200px] w-full mx-auto rounded-md pb-2">
                              <p
                                className={
                                  "text-lg max-w-[350px] mx-auto p-2 py-5"
                                }
                              >
                                L’option SLAM est destinée aux étudiants qui
                                s’orientent vers les métiers liés à la
                                conception et la maintenance de programmes
                                applicatifs. Grâce à des cours spécifiques, les
                                diplômés seront capables de gérer un parc
                                informatique ou d’administrer un réseau au sein
                                d’une entreprise. Ils pourront également gérer
                                l’intégration, la sécurisation et la
                                configuration des serveurs, mais aussi des
                                postes clients et des équipements
                                d’interconnexion.
                              </p>
                            </ScrollArea>
                          </div>
                        </div>
                        <div>
                          <AlertDialog>
                            <AlertDialogTrigger
                              className={
                                "cursor-pointer hover:to-indigo-400 transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 mt-7 font-bold rounded-md bg-gradient-to-r from-blue-600 to-green-500 max-w-[250px] py-2 px-4 mx-auto"
                              }
                            >
                              Débouchés de l&apos;option SLAM
                            </AlertDialogTrigger>
                            <AlertDialogContent
                              className={
                                "bg-gray-700 border-0 py-3 pt-5 md:max-w-md max-w-sm rounded-lg"
                              }
                            >
                              <AlertDialogHeader>
                                <AlertDialogTitle
                                  className={
                                    "text-white font-bold rounded-md bg-gradient-to-r from-blue-600 to-green-500 max-w-md mx-auto px-3 py-2"
                                  }
                                >
                                  Débouchés de l&apos;option SLAM
                                </AlertDialogTitle>
                                <AlertDialogDescription
                                  className={"text-white"}
                                >
                                  <div className={"max-w-sm mx-auto w-full"}>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <MdDevices className={"size-5 mr-3"} />
                                      <p>
                                        Développeur d&apos;applications
                                        informatiques
                                      </p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <FaDev className={"size-5 mr-3"} />
                                      <p>Développeur informatique</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <BiSolidAnalyse
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Analyste d&apos;applications</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <FaProjectDiagram
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Chargé d&apos;études informatiques</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <LiaSchoolSolid
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Informaticien d&apos;études</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <TbChefHat className={"size-5 mr-3"} />
                                      <p>Chef de projet</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <FaProjectDiagram
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Programmeur analyste</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <TbDeviceDesktopCog
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Programmeur d&apos;applications</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <FaHeadSideVirus
                                        className={"size-5 mr-3"}
                                      />
                                      <p>
                                        Responsable des services applicatifs
                                      </p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <MdDeviceHub className={"size-5 mr-3"} />
                                      <p>
                                        Technicien d&apos;études informatiques
                                      </p>
                                    </div>
                                  </div>
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel
                                  className={
                                    "hover:bg-red-500 border-0 hover:text-white"
                                  }
                                >
                                  Retour
                                </AlertDialogCancel>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group [perspective:1000px] mt-[500px] md:mt-[0px]">
                <div className="relative duration-700 transition-all [transform-style:preserve-3d] text-white hover:[transform:rotateY(180deg)]">
                  <div className="[backface-visibility:hidden] absolute w-full h-full inset-0 [transform:rotateY(0deg)]">
                    <div
                      className={
                        "w-full bg-gray-700 h-[450px] mx-auto max-w-sm md:max-w-md rounded-xl"
                      }
                    >
                      <div className={"text-center font-bold text-7xl pt-32"}>
                        <p className={"pb-3"}>👷</p>
                        <p>SISR</p>
                      </div>
                    </div>
                  </div>
                  <div className="[backface-visibility:hidden] absolute w-full mx-auto h-full inset-0 [transform:rotateY(180deg)]">
                    <div
                      className={
                        "w-full bg-gray-700 h-[450px] mx-auto max-w-sm md:max-w-md rounded-xl"
                      }
                    >
                      <div className={"text-center pt-5"}>
                        <p className={"font-bold text-3xl"}>SISR</p>
                        <p className={"text-xl text-gray-400 italic"}>
                          Solutions d’infrastructure, systèmes et réseaux
                        </p>
                        <div className={"pt-10"}>
                          <div
                            className={
                              "bg-gray-800 max-w-[380px] mx-auto rounded-lg"
                            }
                          >
                            <ScrollArea className="h-[200px] w-full mx-auto rounded-md pb-2">
                              <p
                                className={
                                  "text-lg max-w-[350px] mx-auto p-2 py-5"
                                }
                              >
                                L’option SISR est destinée aux étudiants qui
                                s’orientent vers les métiers liés à la
                                conception et la maintenance d’infrastructures
                                réseaux. Assurer la sécurité, la maintenance et
                                l’installation des réseaux et des équipements
                                informatiques font partie des principales
                                missions des futurs administrateurs, techniciens
                                ou pilotes d’exploitation. Des cours plus
                                généraux viendront compléter la formation et
                                apporter des compétences plus généralistes,
                                permettant ainsi aux diplômés d’être
                                opérationnels dans n’importe quelle entreprise.
                              </p>
                            </ScrollArea>
                          </div>
                        </div>
                        <div>
                          <AlertDialog>
                            <AlertDialogTrigger
                              className={
                                "cursor-pointer hover:to-red-500 transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 mt-7 font-bold rounded-md bg-gradient-to-r from-blue-600 to-orange-500 max-w-[250px] py-2 px-4 mx-auto"
                              }
                            >
                              Débouchés de l&apos;option SISR
                            </AlertDialogTrigger>
                            <AlertDialogContent
                              className={
                                "bg-gray-700 border-0 py-3 md:max-w-md max-w-sm rounded-lg"
                              }
                            >
                              <AlertDialogHeader>
                                <AlertDialogTitle
                                  className={
                                    "text-white font-bold rounded-md bg-gradient-to-r from-blue-600 to-orange-500 max-w-md mx-auto px-3 py-2"
                                  }
                                >
                                  Débouchés de l&apos;option SISR
                                </AlertDialogTitle>
                                <AlertDialogDescription
                                  className={"text-white"}
                                >
                                  <div className={"max-w-sm mx-auto w-full"}>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <GrTechnology className={"size-5 mr-3"} />
                                      <p>Technicien de production</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <PiTreeStructure
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Technicien d&apos;infrastructure</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <MdOutlineCellTower
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Technicien réseau et télécoms</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <IoIosCellular
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Technicien systèmes et réseaux</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <MdAdminPanelSettings
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Administrateur systèmes et réseaux</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <RiAdminFill className={"size-5 mr-3"} />
                                      <p>Support systèmes et réseaux</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <GiCaptainHatProfile
                                        className={"size-5 mr-3"}
                                      />
                                      <p>Pilote d’exploitation</p>
                                    </div>
                                    <div
                                      className={
                                        "rounded bg-gray-800 py-2 my-2 text-center flex items-center justify-center"
                                      }
                                    >
                                      <GrDeploy className={"size-5 mr-3"} />
                                      <p>
                                        Informaticien support et déploiement
                                      </p>
                                    </div>
                                  </div>
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel
                                  className={
                                    "hover:bg-red-500 border-0 hover:text-white"
                                  }
                                >
                                  Retour
                                </AlertDialogCancel>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <p
              className={
                "text-gray-400 italic mt-[1000px] md:mt-[470px] text-center"
              }
            >
              {" "}
              <span className={"font-bold"}>Source: </span>onisep
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
