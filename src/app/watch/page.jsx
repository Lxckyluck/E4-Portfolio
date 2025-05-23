import Link from "next/link";
import { CardContentListArticles } from "@/components/layout/situation/Content/CardContentListArticles";
import CardSituation from "@/components/layout/situation/cardSituation";

export default function WatchPage() {
  return (
    <div
      className={
        "w-full bg-gradient-to-b md:h-[3500px] h-[4500px] from-gray-900 to-blue-950"
      }
    >
      <section className={"max-w-6xl mx-auto w-full text-white pt-[150px]"}>
        <h2
          className={
            "text-6xl text-white font-bold text-center py-16 bg-[url('/Veille/fadeVeille.jpg')] rounded-xl max-w-4xl mx-auto bg-cover bg-no-repeat mb-12"
          }
        >
          Veille technologique
        </h2>
        <h3 className={"my-5 font-bold text-center text-2xl"}>
          En quoi consiste une veille technologique ?
        </h3>
        <h2
          className={
            "my-10 text-lg max-w-4xl mx-auto text-center p-4 bg-gray-500 rounded-lg italic"
          }
        >
          La veille technologique consiste à s’informer de façon systématique
          sur les techniques les plus récentes et surtout sur leur mise à
          disposition commerciale et ainsi rester informer sur les nouveautés.
        </h2>
      </section>
      <section>
        <h1 className={"text-2xl text-white text-center font-bold"}>
          Sujet de ma veille technologique
        </h1>
        <p
          className={
            "text-center text-white font-bold rounded-lg bg-gray-400 max-w-xs p-4 w-full mx-auto my-5 text-xl"
          }
        >
          L’authentification sécurisée dans les applications web : tendances et bonnes pratiques
        </p>
      </section>
      <section
        className={"my-10 w-full max-w-5xl mx-auto rounded-lg text-white"}
      >
        <div
          className={
            "w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 justify-items-center mb-10"
          }
        >
          {CardContentListArticles.map((item, index) => (
            <div key={index}>
              <CardSituation array={item} />
            </div>
          ))}
        </div>
      </section>
      <section
        className={
          "my-10 bg-gray-500 w-full md:max-w-5xl max-w-sm mx-auto rounded-lg h-[300px]"
        }
      >
        <h1 className={"text-4xl text-white text-center font-bold py-10"}>
          Source utilisé
        </h1>
        <div
          className={
            "grid grid-cols-4 grid-rows-2 gap-3 justify-items-stretch px-4 pb-5"
          }
        >
          <Link
            href={"https://www.cloudflare.com/fr-fr/"}
            className={
              "bg-[url('/Veille/cloudflare.png')] bg-cover bg-center p-4 px-8 rounded-lg h-[80px]"
            }
          ></Link>
          <Link
            href={"https://www.ionos.fr/"}
            className={
              "bg-[url('/Veille/IONOS.png')] bg-cover bg-center p-4 px-8 rounded-lg"
            }
          ></Link>
          <Link
            href={"https://www.oracle.com/fr/"}
            className={
              "bg-[url('/Veille/Oracle.png')] bg-cover bg-center p-4 px-8 rounded-lg"
            }
          ></Link>
          <Link
            href={"https://www.bcrypt.fr/"}
            className={
              "bg-[url('/Veille/bcrypt.jpg')] bg-cover bg-center p-4 px-8 rounded-lg"
            }
          ></Link>
        </div>
      </section>
    </div>
  );
}
