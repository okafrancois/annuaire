import {useState} from "react";

const ListForm = (props) => {
    const {onSearchLaunch, loadingState} = props
    const [searchText, setSearchText] = useState("")

    const launchSearch = (event) => {
        event.preventDefault()
        if (searchText !== ""){
            onSearchLaunch(searchText.toLowerCase())
        }
    }

    const handleSearchTexteChange = event => {
        if (event.target.value !== null){
            setSearchText(event.target.value)
        }
    }

    return(
        <form className={"row"}>
            <div className="col-10">
                <input type="search" className="form-control" id="searchText" placeholder="Entrez un nom, un siret ou un siren" value={searchText} onChange={handleSearchTexteChange}/>
            </div>
            <div className="col-2">
                {loadingState && <button className="btn btn-primary w-100" disabled type="button">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                    <span className={"d-sm-none"}>Recherche en cours</span>
                </button>}
                {!loadingState && <button className="btn btn-primary w-100" type="button" onClick={launchSearch}>
                    Lancer
                </button>}
            </div>
        </form>
    )
}

export default ListForm