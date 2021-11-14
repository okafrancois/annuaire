import {Component, useEffect, useState} from "react";
import ListForm from "./ListFrom";
import * as assert from "assert";

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentSearch: "",
            isResult: false
        }
    }


    //change the currentSeach value on listFrom component change
    handleSearchChange = (text) => {
        if (text !== ""){
            this.setState({
                currentSearch: text,
                isResult: true
            })
        }
    }

    render() {
        return (
            <div className={"container-fluid mt-5"}>
                <h1 className={"text-center mb-4"}>Annuaire des entreprises</h1>
                <ListForm onSearchChange={this.handleSearchChange}/>
                {!this.state.isResult && <p className={"text-primary text-center fs-4"}>Retrouvez toutes les informations publiques concernant les entreprises françaises</p>}
                {this.state.isResult && <ListResults currentSearch={this.state.currentSearch}/>}
            </div>
        );
    }
}

const useFetch = url => {
    //init a state with result, loading and error status
    const [state, setState] = useState({
        result: null,
        loading: true,
        error: false
    })

    useEffect(() => {
        (
            async () => {
                const response = await fetch(url)
                if (response.ok){
                    const responseData = await response.json()
                    setState({
                        result: responseData,
                        loading: false,
                        error: false,
                    })
                } else {
                    console.log(response.error)
                    setState({
                        result: response.error,
                        loading: false,
                        error: true,
                    })
                }
            }
        )()

    }, [url])

    return([state.result, state.loading, state.error])
}

const ListResults = (props) => {
    const currentSearch = props.currentSearch.toLowerCase();

    //Get results from useFecth custom hook
    const [result, loading, error] = useFetch(`https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${currentSearch}?per_page=10&page=1`)
    console.log(`Loading state: ${loading}`)
    console.log(result)
    console.log(`Error state: ${error}`)
    return(
        <div className="row">
            {loading && <div>Chargement...</div>}
            <div></div>
        </div>
    )
}

export default List