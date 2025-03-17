"use client";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Sling as Hamburger } from "hamburger-react";
import { navbarList } from "@/components/layout/navbarList";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Contact from "@/components/layout/contact";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Header() {
  function toastEmail() {
    let emailInput = document.getElementById("email");

    if (!emailInput.value.trim()) {
      toast.error("Please provide an email address.", {
        theme: "dark",
      });
    } else {
      toast.success("Email send with success.", {
        theme: "dark",
      });
    }
  }

  return (
    <div className={""}>
      <ToastContainer />
      <div
        className={
          "mx-auto fixed top-0 left-0 right-0 z-50 py-12 bg-opacity-75 backdrop-blur-md"
        }
      >
        <div className="max-w-7xl mx-auto fixed top-3 left-0 right-0 z-50 py-4 px-6 flex items-center justify-between">
          <Link className="font-bold text-2xl flex items-center" href={"/"}>
            <p className={"pr-2 text-primary hover:text-white"}>Lucas</p>
            <span className="text-white hover:text-primary">DENIS</span>
          </Link>
          <nav className="gap-8 font-semibold text-sm items-center text-white hidden md:flex">
            <Link
              href={"/"}
              className={
                "hover:text-primary transition ease-in-out hover:-translate-x-0 hover:scale-125 duration-300"
              }
            >
              Accueil
            </Link>
            <Link
              href={"/btssio"}
              className={
                "hover:text-primary transition ease-in-out hover:-translate-x-0 hover:scale-125 duration-300"
              }
            >
              BTS SIO
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={"/situations"}>
                    <NavigationMenuTrigger className="hover:text-white text-sm p-5 bg-gradient-to-r from-blue-500 to-green-400">
                      Situations professionel
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="min-w-[300px] h-fit">
                    {navbarList.map((item, index) => (
                      <NavigationMenuLink
                        key={index}
                        href={item.href}
                        style={{ backgroundImage: `url('${item.path}')` }}
                        className={`bg-cover border-t-0 bg-opacity-50 grid gap-3 p-4 w-[300px] md:grid-cols-2 h-[100px]`}
                      >
                        <div className={"w-full min-w-96"}>
                          <h1 className="text-white text-2xl hover:text-primary">
                            {item.title}
                          </h1>
                          <p className="text-gray-200 font-thin text-md">
                            {item.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              className={
                "hover:text-primary transition ease-in-out hover:-translate-x-0 hover:scale-125 duration-300"
              }
              href={"/certifications"}
            >
              Certifications
            </Link>
            <Link
              className={
                "hover:text-primary transition ease-in-out hover:-translate-x-0 hover:scale-125 duration-300"
              }
              href={"/watch"}
            >
              Veille technologique
            </Link>
          </nav>
          <div className={"flex items-center"}>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={
                  "hover:border-0 border-0 focus:outline-none flex md:hidden px-2"
                }
              >
                <Hamburger size={30} color="#FFFFFF" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className={"md:hidden"}>
                <DropdownMenuLabel
                  className={"text-center bg-primary rounded-md text-white"}
                >
                  Menu
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={"/"}>
                  <DropdownMenuItem
                    className={"hover:bg-primary hover:text-white"}
                  >
                    Accueil
                  </DropdownMenuItem>
                </Link>
                <Link href={"/btssio"}>
                  <DropdownMenuItem
                    className={"hover:bg-primary hover:text-white"}
                  >
                    BTS SIO
                  </DropdownMenuItem>
                </Link>
                <Link href={"/situations"}>
                  <DropdownMenuItem
                    className={"hover:bg-primary hover:text-white"}
                  >
                    Situations professionel
                  </DropdownMenuItem>
                </Link>
                <Link href={"/certifications"}>
                  <DropdownMenuItem
                    className={"hover:bg-primary hover:text-white"}
                  >
                    Certifications
                  </DropdownMenuItem>
                </Link>
                <Link href={"/watch"}>
                  <DropdownMenuItem
                    className={"hover:bg-primary hover:text-white"}
                  >
                    Veille technologique
                  </DropdownMenuItem>
                </Link>
                <AlertDialog>
                  <AlertDialogTrigger className={"px-2 text-sm"}>
                    Contact
                  </AlertDialogTrigger>
                  <AlertDialogContent
                    className={
                      "bg-primary border-0 max-w-sm md:max-w-lg bg-gradient-to-t from-gray-900 to-blue-850"
                    }
                  >
                    <AlertDialogHeader>
                      <AlertDialogDescription>
                        <Contact />
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        className={"bg-blue-600 text-white border-0 mx-auto"}
                      >
                        <button onClick={toastEmail}>Envoyez</button>
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <AlertDialog>
            <AlertDialogTrigger
              className={
                "hidden md:flex hover:text-white text-lg p-5 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg\n" +
                "py-2 text-white font-bold transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300 hover:to-indigo-300"
              }
            >
              Contact
            </AlertDialogTrigger>
            <AlertDialogContent
              className={
                "bg-primary border-0 max-w-sm md:max-w-lg bg-gradient-to-t from-gray-900 to-blue-850"
              }
            >
              <AlertDialogHeader>
                <AlertDialogDescription>
                  <Contact />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  className={"bg-blue-600 text-white border-0 mx-auto"}
                >
                  <button onClick={toastEmail}>Envoyez</button>
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
