import {useState} from "react";

const ListForm = (props) => {
    const {onSearchChange} = props
    const [searchText, setSearchText] = useState("")

    const launchSearch = (e) => {
        e.preventDefault()
        if (searchText !== ""){
            console.log(searchText)
            onSearchChange(searchText)
        }
    }

    const handleSearchTexteChange = e => {
        if (e.target.value !== null){
            setSearchText(e.target.value)
        }
    }

    return(
        <form className={"row"}>
            <div className="col-10">
                <input type="search" className="form-control" id="searchText" placeholder="Entrez un nom, un siret ou un siren" value={searchText} onChange={handleSearchTexteChange}/>
            </div>
            <div className="col-2">
                <button className="btn btn-primary mb-3 w-100" onClick={launchSearch}>Lancer</button>
            </div>
        </form>
    )
}

export default ListForm