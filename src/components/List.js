import {Component} from "react";
import ListForm from "./ListFrom";
import ResultsList from "./ResultList";

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
        //using an auto called function to handle async function
        (
            async () => {
                //set loading state
                this.setState({...this.state, searchLoading: true, searchError: null})
                try{
                    //get response from api call
                    const response = await fetch(`https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${searchText}?per_page=10&page=1`)
                    const responseData = await response.json()
                    //set result in with response datas and disable loading state
                    this.setState({currentSearch: searchText, currentResult: responseData, searchLoading: false, searchError: null})
                } catch (error) {
                    // set error data and disable loading state
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

export default List