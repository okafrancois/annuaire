import {useParams} from "react-router-dom";
import SearchForm from "./components/SearchForm";
import {useEffect, useState} from "react";
import {CardList} from "./components/CardList";
import {Paginations} from "./components/Paginations";

const ResultsPage = () => {
    const [state, setState] = useState({loading: true, error: false, result: null})
    const {searchText, currentPage} = useParams();

    useEffect(() => {
        (
            async () => {
                // @TODO handle 404 status in fetch request
                //set loading state
                setState(state => ({...state ,loading: true, error: false}))
                try{
                    //get response from api call
                    const response = await fetch(`https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${searchText}?per_page=10&page=${currentPage}`)
                    const responseData = await response.json()
                    //set result state with response datas and disable loading state
                    setState(state => ({...state ,loading: false, error: false, result: responseData}))
                } catch (error) {
                    // set error data and disable loading state
                    console.error(error)
                    setState(state => ({...state ,loading: false, error: true, result: error}))
                }
            }
        )()
    }, [currentPage, searchText])

    return (
        <div className={"row mt-2"}>
            <h1 className={"text-center my-4"}>Annuaire des entreprises en France</h1>
            <SearchForm currentSearch={searchText} loadindState={state.loading}/>
            <div className="row">
                {//display if there's an error
                    state.error && <div className="col-12 py-3">
                    <p className="text-danger">Oops, il y a eu une erreur. Essayez de relancer la recherche ou vérifiez votre connexion</p>
                </div>}

                {//display if the page is loading
                    state.loading && <div className="col-12 my-5 d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-primary" role="status"/>
                    <span className="sr-only">Chargement...</span>
                </div>}

                {//display result items only if there's a result that isn't an error and if the page is not loading
                    (state.result != null && !state.loading && !state.error) && <div className="container mt-3">
                        <h2>{state.result.total_results} {(state.result.total_results > 1) ? "résultats trouvés" : "résultat touvé"} pour "{searchText}"</h2>
                        {(state.result.total_results > 1000) && <p className={"alert-warning p-1 rounded-1"}>😳 Ça fait beaucoup là. Essayez d'affiner votre recherche pour un résultat précis.</p>}
                        <div className="row">
                            <CardList result={state.result}/>
                        </div>
                        {(state.result.total_pages >= 1) && <Paginations totalPages={state.result.total_pages} currentSearch={searchText} currentPage={currentPage}/>}
                    </div>}
            </div>
        </div>
    )
}

export default ResultsPage