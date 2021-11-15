import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import ResultItem from "./components/ResultItem";


const App = () => {
    return(
        <div className="App container-fluid">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="resultats/:searchText" element={<List />} />
                <Route path="entreprise/:siren" element={<ResultItem />} />
                <Route
                    path="*"
                    element={
                        <div className={"row d-flex h-100 align-items-center"} style={{ padding: "1rem" }}>
                            <h1 className={"text-center"}>Erreur 404, Page non trouvé </h1>
                        </div>
                    }
                />
            </Routes>
        </div>
    )
}


export default App;
