import {useNavigate} from "react-router-dom";
import {useState} from "react";

const SearchForm = (props) => {
    const navigate = useNavigate()
    const [state, setState] = useState(props.currentSearch)
    const loadingState = props.loadindState

    const handleTextChange = event => {
        setState(event.target.value)
    }

    return(
        <form className={"row"} onSubmit={() => navigate(`/resultats/${state}/1`)}>
            <div className="col-sm-12 col-md-9 my-1">
                <input type="search" className="form-control" id="searchText" placeholder="Entrez un nom, un siret ou un siren" value={state} onChange={handleTextChange}/>
            </div>
            <div className="col-sm-12 col-md-3 my-1">
                {loadingState && <button className="btn btn-primary w-100" disabled type="button">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                    <span className={"d-sm-none"}>Recherche en cours</span>
                </button>}
                {!loadingState && <button className="btn btn-primary w-100" type="button" onClick={() => navigate(`/resultats/${state}/1`)}>
                    Lancer
                </button>}
            </div>
        </form>
    )
}


export default SearchForm