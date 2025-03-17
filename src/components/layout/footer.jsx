import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto h-full bg-black">
      <div className="mx-auto w-full max-w-6xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ">
            <a
              href="/"
              className="flex items-center transition ease-in-out hover:-translate-x-0 hover:scale-110 duration-300"
            >
              <Image
                width={"50"}
                height={"100"}
                src={"/aboutMe/photo.jpg"}
                className="h-12 me-3 rounded-md"
                alt="Talace Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Lucas DENIS
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Information
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/btssio" className="hover:underline">
                    BTS SIO
                  </a>
                </li>
              </ul>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/situations" className="hover:underline">
                    Situations professionel
                  </a>
                </li>
              </ul>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/certifications" className="hover:underline ">
                    Certifications
                  </a>
                </li>
              </ul>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/watch" className="hover:underline ">
                    Veille technologique
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Mes réseaux
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/ThisIsLuckyluck"
                    className="hover:underline "
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/lucas-denis-143825297/"
                    className="hover:underline "
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/ThisIsLuckyluck"
              className="text-white hover:text-gray-300 dark:hover:text-white ms-5"
              target="_blank"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-denis-143825297/"
              className="text-white hover:text-gray-300 dark:hover:text-white ms-5"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
