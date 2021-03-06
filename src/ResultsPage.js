import {useParams} from "react-router-dom";
import SearchForm from "./components/SearchForm";
import {useEffect, useState} from "react";
import {Paginations} from "./components/Paginations";
import {ResultItem} from "./components/ResultItem";
import {Loader} from "./components/Loader";

const ResultsPage = () => {
    const [state, setState] = useState({loading: true, error: false, result: null, nothingFound: false})
    const {searchText, currentPage} = useParams();

    useEffect(() => {
        (
            async () => {
                //set loading state
                setState(state => ({...state ,loading: true, error: false}))
                try{
                    //get response from api call
                    const response = await fetch(`https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${searchText}?per_page=12&page=${currentPage}`)
                    if (response.ok && response.status !== 404){
                        const responseData = await response.json()
                        //set result state with response datas and disable loading state
                        setState(state => ({...state ,loading: false, error: false, result: responseData, nothingFound: false}))
                    }
                    if (response.status === 404){
                        const responseData = await response.json()
                        console.error(responseData)
                        //set result state with response datas and disable loading state
                        setState(state => ({...state ,loading: false, error: false, result: null, nothingFound: true}))
                    }
                } catch (error) {
                    // set error data and disable loading state
                    console.error(error)
                    setState(state => ({...state ,loading: false, error: true, result: error, nothingFound: false}))
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
                    <p className="text-danger">Oops, il y a eu une erreur. Essayez de relancer la recherche ou v??rifiez votre connexion</p>
                </div>}

                {//display result items only if there's a result that isn't an error and if the page is not loading
                    state.nothingFound && <p className={"text-center py-3"}>???? Nous n'avons rien trouv?? qui ressemble ?? "{searchText}". V??rifiez l'orthographe ou changez de recherche.</p>
                }

                {//display if the page is loading
                    state.loading && <Loader/>}

                {//display result items only if there's a result that isn't an error and if the page is not loading
                    (state.result != null && !state.loading && !state.error) && <div className="container mt-3">
                        <h2>{state.result.total_results} {(state.result.total_results > 1) ? "r??sultats trouv??s" : "r??sultat touv??"} pour "{searchText}"</h2>
                        {(state.result.total_results > 1000) && <p className={"alert-warning p-1 rounded-1"}>???? ??a fait beaucoup l??. Essayez d'affiner votre recherche pour un r??sultat pr??cis.</p>}
                        <div className="row">
                            {
                                state.result.etablissement.map(item => (
                                    <ResultItem key={item.id} nom={item.nom_raison_sociale} activitePrincipale={item.libelle_activite_principale} siren={item.siren}/>
                                ))
                            }
                        </div>
                        {(state.result.total_pages >= 1) && <Paginations totalPages={state.result.total_pages} currentSearch={searchText} currentPage={currentPage}/>}
                    </div>}
            </div>
        </div>
    )
}

export default ResultsPage