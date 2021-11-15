import {useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
    const [state, setState] = useState({searchText: ""})
    const handleSearchTexteChange = event => {
        const searchValue = event.target.value
        if (searchValue !== null){
            setState({searchText: searchValue})
        }
    }

    return (
        <div className={"row"}>
            <h1 className={"text-center my-4"}>Annuaire des entreprises en France</h1>
            <form className={"row"}>
                <div className="col-10">
                    <input type="search" className="form-control" id="searchText" placeholder="Entrez un nom, un siret ou un siren" value={state.searchText} onChange={handleSearchTexteChange}/>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary w-100" type="button">
                        <Link to={`/resultats/${state.searchText}`}>Lancer</Link>
                    </button>
                </div>
            </form>
            <p className={"text-primary text-center fs-4 my-3"}>Retrouvez toutes les informations publiques concernant les entreprises françaises</p>
        </div>
    )
}

export default Home