import List from "./components/List";
import App from "./App";

export const routes = [
    { path: "/", name: "Accueil", component: App },
    { path: "/resultats/text", name: "resultats", component: List },
];