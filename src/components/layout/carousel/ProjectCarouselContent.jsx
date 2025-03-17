import {
    AlertDialog, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {MdArticle} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import {FaLink} from "react-icons/fa";

export default function ProjectCarouselContent({url, list}) {
    return (
        <div className="relative h-full w-full rounded-lg">
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-85 rounded-lg flex justify-center items-center">
                <div className="flex items-center">
                    <AlertDialog>
                        <AlertDialogTrigger
                            className={"items-center flex mr-3 hover:bg-gray-100 hover:text-black rounded-lg p-3 px-5 border-2 border-white"}>
                            <MdArticle className={"mr-2"}/>
                            <p>Article</p>
                        </AlertDialogTrigger>
                        <AlertDialogContent
                            className={"bg-primary border-0 max-w-sm md:max-w-lg bg-gradient-to-t from-gray-900 to-blue-850"}>
                            <AlertDialogHeader>
                                <AlertDialogDescription className={"text-white"}>
                                    <h1 className={"font-bold text-lg"}>Quick présentation</h1>
                                    <p className={"my-2"}>{list.texte}</p>
                                    <h1 className={"hidden md:block font-bold text-lg"}>Language(s)</h1>
                                    <div
                                        className={"hidden md:grid grid-cols-5 gap-2 max-w-xs my-5"}>
                                        {Object.values(list.language).map((avatar, index) => (
                                            <Image
                                                key={index}
                                                src={avatar}
                                                alt={`Avatar ${index}`}
                                                width={50}
                                                height={50}
                                                className="h-full w-full rounded-lg border-2 border-white p-2"
                                            />
                                        ))}
                                    </div>
                                    <h1 className={"hidden md:block font-bold text-lg"}>Tool(s)</h1>
                                    <div
                                        className={"hidden md:grid grid-cols-5 gap-2 max-w-xs my-5"}>
                                        {Object.values(list.outils).map((outil, index) => (
                                            <Image
                                                key={index}
                                                src={outil}
                                                alt={`Avatar ${index}`}
                                                width={50}
                                                height={50}
                                                className="h-full w-full rounded-lg border-2 border-white p-2"
                                            />
                                        ))}
                                    </div>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel
                                    className={"bg-red-600 text-white border-0"}>Close</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <Link href={url} target="_blank"
                          className={"flex items-center " +
                              "hover:bg-gray-100 hover:text-black rounded-lg p-3 px-5 border-2 border-white"}>
                        <FaLink className={"mr-2"}/>
                        <p>Github</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
