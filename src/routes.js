import Results from "./components/Results";
import App from "./App";

export const routes = [
    { path: "/", name: "Accueil", component: App },
    { path: "/resultats/text", name: "resultats", component: Results },
];