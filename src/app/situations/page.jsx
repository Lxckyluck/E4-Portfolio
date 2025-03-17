"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdOutlineWork } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaArrowDown } from "react-icons/fa";
import CardSituation from "@/components/layout/situation/cardSituation";
import { CardContentListSchool } from "@/components/layout/situation/Content/CardContentListSchool";
import { CardContentListWork } from "@/components/layout/situation/Content/CardContentListWork";

export default function SituationPage() {
  const OnClickButtonSituation = () => {
    const SituationSection = document.getElementById("situation");
    SituationSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={"w-full bg-gradient-to-b h-full from-gray-900 to-blue-950"}>
      <section
        className={"max-w-6xl mx-auto w-full text-white pt-[150px] h-full"}
      >
        <div>
          <h2
            className={
              "text-6xl text-white font-bold text-center py-16 bg-[url('/situation/bg.png')] rounded-xl max-w-4xl mx-auto h-full bg-cover bg-no-repeat mb-12"
            }
          >
            Situations professionel
          </h2>
          <section className={"flex max-w-xl mx-auto"}>
            <div className={"max-w-64 mx-auto w-full"}>
              <AlertDialog>
                <AlertDialogTrigger
                  className={
                    "bg-blue-950 text-blue-300 border border-blue-400 " +
                    "border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4\n" +
                    "hover:border-b active:opacity-75 outline-none duration-300 group mt-4 w-full"
                  }
                >
                  <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Summary table
                </AlertDialogTrigger>
                <AlertDialogContent
                  className={
                    "bg-primary border-0 max-w-sm md:max-w-4xl bg-gradient-to-t from-gray-900 to-blue-850 rounded-lg"
                  }
                >
                  <AlertDialogHeader>
                    <AlertDialogDescription>
                      <iframe
                        src="/realisation/your_assets.pdf"
                        className={"w-full h-[400px] md:h-[600px]"}
                      ></iframe>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <a
                      href="/assets/your-asset-page"
                      target="_blank"
                      className={
                        "my-0 text-white items-center text-center from-blue-700 to-sky-400 p-[6px] px-3 rounded-md bg-gradient-to-r hover:to-sky-600"
                      }
                    >
                      Show more
                    </a>
                    <AlertDialogCancel
                      className={"bg-red-600 text-white border-0"}
                    >
                      Close
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className={"max-w-64 mx-auto w-full"}>
              <AlertDialog>
                <AlertDialogTrigger
                  className={
                    "bg-blue-950 text-blue-300 border border-blue-400 " +
                    "border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4\n" +
                    "hover:border-b active:opacity-75 outline-none duration-300 group mt-4 w-full"
                  }
                >
                  <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Skill descriptions
                </AlertDialogTrigger>
                <AlertDialogContent
                  className={
                    "bg-primary border-0 max-w-sm md:max-w-4xl bg-gradient-to-t from-gray-900 to-blue-850"
                  }
                >
                  <AlertDialogHeader>
                    <AlertDialogDescription>
                      <iframe
                        src="/realisation/your_assets.pdf"
                        className={"w-full h-[400px] md:h-[600px]"}
                      ></iframe>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel
                      className={"bg-red-600 text-white border-0"}
                    >
                      Close
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </section>
          <p
            className={
              "text-center max-w-3xl mx-auto w-full italic py-5 text-gray-100"
            }
          >
            Les situations professionnelles sont des projets réalisés au cours
            de mes deux années de BTS. Elles sont associées aux compétences à
            acquérir durant la formation. Un tableau récapitulatif permet de
            lister toutes les compétences acquises. Chaque contexte contient
            plusieurs activités et des documents liés aux productions associées.
          </p>
          <div className={"w-full max-w-52 mt-20 mx-auto"}>
            <button
              onClick={OnClickButtonSituation}
              className="animate-bounce text-white text-xl font-bold mx-auto"
            >
              <div
                className={
                  "w-full flex items-center p-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-400"
                }
              >
                <p className={"mr-2"}>Mes situations</p>
                <FaArrowDown />
              </div>
            </button>
          </div>
        </div>
        <h1
          id={"situation"}
          className={
            "text-5xl text-white font-bold text-center mb-8 mt-10 pt-32"
          }
        >
          Situations
        </h1>
        <Tabs defaultValue="account" className="w-full mx-auto">
          <section className={"w-full max-w-[380px] mx-auto"}>
            <TabsList className={"bg-gray-700 text-white w-full py-10 px-4"}>
              <TabsTrigger
                value="account"
                className="flex text-xl p-3 text-gray-400 px-4 data-[state=active]:to-blue-950
                            data-[state=active]:bg-green-300 "
              >
                <MdOutlineWork className={"mr-2 size-5"} />
                <p>En entreprise</p>
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="flex text-xl p-3 text-gray-400 px-4 data-[state=active]:to-blue-950
                            data-[state=active]:bg-green-300 "
              >
                <IoSchoolSharp className={"mr-2 size-5"} />
                <p>Au CFA</p>
              </TabsTrigger>
            </TabsList>
          </section>
          <TabsContent
            value="account"
            className={
              "w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 justify-items-center my-10"
            }
          >
            {CardContentListWork.map((item, index) => (
              <div key={index}>
                <CardSituation array={item} />
              </div>
            ))}
          </TabsContent>
          <TabsContent
            value="password"
            className={
              "relative w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 justify-items-center bottom-10"
            }
          >
            {CardContentListSchool.map((item, index) => (
              <div key={index}>
                <CardSituation array={item} />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
