import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [state, setState] = useState({searchText: ""})
    const navigate = useNavigate()

    const handleSearchTexteChange = event => {
        const searchValue = event.target.value
        if (searchValue !== null){
            setState({searchText: searchValue})
        }
    }

    return (
        <div className={"row"}>
            <h1 className={"text-center my-4"}>Annuaire des entreprises en France</h1>
            <form className={"row mx-0"} onSubmit={(event) => {
                //prevent the submit event from triggering the page reload
                event.preventDefault()
                ; navigate(`/resultats/${state}/1`)}
            }>
                <div className="col-sm-12 col-md-9 my-1">
                    <input type="search" className="form-control" id="searchText" placeholder="Entrez un nom, un siret ou un siren" value={state.searchText} onChange={handleSearchTexteChange}/>
                </div>
                <div className="col-sm-12 col-md-3 my-1">
                    <button className="btn btn-primary w-100" type="button" onClick={() => navigate(`/resultats/${state.searchText}/1`)}>
                        Lancer
                    </button>
                </div>
            </form>
            <p className={"text-primary text-center fs-4 my-3"}>Retrouvez toutes les informations publiques concernant les entreprises françaises</p>
        </div>
    )
}

export default Home