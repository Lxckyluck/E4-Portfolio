export const CardContentListArticles = [
    {
        title: "Attaque sur UUID",
        link: "https://danaepp.com/attacking-predictable-guids-when-hacking-apis",
        style: "w-full rounded-t-xl  bg-[url('/Veille/uuid.png')] bg-center bg-cover h-56",
        description: "Une attaque sur les UUID peut se produire lorsqu'ils sont générés de manière prévisible, ainsi un attaquant peut prédire les UUID par un système et exploiter à des fins malveillantes." +
            "",
        category: "Web server",
        time: "2 min",
    },
    {
        title: "Directory Traversal sur React",
        link: "https://security.snyk.io/vuln/SNYK-JS-LADLEREACT-6513785",
        style: "w-full rounded-t-xl bg-[url('/Veille/react.png')] bg-center bg-cover h-56",
        description: "L'attaque par Traversal de Répertoire vise à accéder à des fichiers et répertoires en dehors du chemin prévu, exploitant des séquences \"../\" ou des chemins absolus." +
            "",
        category: "Web client",
        time: "2 min",
    },
    {
        title: "RCE sur le runtime JS deno",
        style: "w-full rounded-t-xl bg-[url('/Veille/deno.jpg')] bg-center bg-cover h-56",
        link: "https://security.snyk.io/vuln/SNYK-RUST-DENORUNTIME-3373053",
        description: "La RCE, ou Exécution de Code à Distance, est une attaque où un attaquant parvient à exécuter du code sur un système distant sans autorisation. ",
        category: "Web server",
        time: "3 min",
    },
    {
        title: "CSRF sur jupyterhub notebook",
        style: "w-full rounded-t-xl  bg-[url('/Veille/csrf.png')] bg-center bg-cover h-56",
        link: "https://cwe.mitre.org/data/definitions/352.html",
        description: "La CSRF est une attaque où un utilisateur authentifié est trompé pour effectuer des actions non voulues sur un site web.",
        category: "Web server",
        time: "1 min",
    }
]