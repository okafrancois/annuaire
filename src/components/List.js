import {Component} from "react";
import ListForm from "./ListFrom";

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentSearch: null,
            currentResult: null,
            searchLoading: false,
            searchError: null,
        }
    }

    handleSearchLaunch = (searchText) => {
        (
            async () => {
                this.setState({...this.state, searchLoading: true, searchError: null})
                try{
                    const response = await fetch(`https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${searchText}?per_page=10&page=1`)
                    const responseData = await response.json()
                    this.setState({currentSearch: searchText, currentResult: responseData, searchLoading: false, searchError: null})
                } catch (error) {
                    console.log(error)
                    this.setState({currentSearch: searchText, currentResult: null, searchLoading: false, searchError: error})
                }
            }
        )()
    }

    render() {
        return (
            <div className={"container-fluid mt-5"}>
                <div className="row">
                    <h1 className={"text-center mb-4"}>Annuaire des entreprises</h1>
                    <ListForm onSearchLaunch={this.handleSearchLaunch} loadingState={this.state.searchLoading}/>
                    {(this.state.currentResult == null) && <p className={"text-primary text-center fs-4"}>Retrouvez toutes les informations publiques concernant les entreprises françaises</p>}
                </div>
                {(this.state.currentResult != null) && <ResultsList currentResult={this.state.currentResult} currentSearch={this.state.currentSearch}/>}
            </div>
        );
    }
}

const ResultsList = (props) => {
    const {total_results, total_pages, per_page, page, etablissement} = props.currentResult
    const currentSearch = props.currentSearch
    return (
        <div className="container-fluid result-list">
            <div className="row">
                <p>{total_results} {(total_results > 1) ? "résultats trouvés" : "résultat touvé"} pour "{currentSearch}"</p>
            </div>
            <div className="row list">
                {
                    etablissement.map(item => {
                        return(
                            <div className="card border-0 rounded-2 bg-light my-1">
                                <div className="card-body">
                                    <h5 className="card-title">{item.nom_raison_sociale}</h5>
                                    <p className="card-text">{item.libelle_activite_principale}</p>
                                    <a href="/" className="btn btn-primary">Voir plus</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default List