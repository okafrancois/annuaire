import './styles/App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import ResultsPage from "./ResultsPage";


const App = () => {
    return(
        <div className="App">
            <header className={"container-fluid px-0"}>
                <nav className="px-2 navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                    <Link to={"/"} className={"navbar-brand"}>Annuaire d'entreprises</Link>
                    <span className="navbar-tex"> Toutes les données publics des entreprises en France</span>
                </nav>
            </header>
            <main className={"container"}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="resultats/:searchText/:currentPage" element={<ResultsPage />} />
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </main>
        </div>
    )
}

const NotFoundPage = () => (
    <div className={"row d-flex h-100 align-items-center"} style={{ padding: "1rem" }}>
        <h1 className={"text-center"}>Erreur 404, Page non trouvé </h1>
        <button className={"btn btn-primary"}>
            <Link to={"/"}>Retour à la page d'acceuil</Link>
        </button>
    </div>
)


export default App;
