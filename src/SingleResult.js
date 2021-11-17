import {useParams} from "react-router-dom";
import SearchForm from "./components/SearchForm";
import {useEffect, useState} from "react";
import {Paginations} from "./components/Paginations";
import {ResultItem} from "./components/ResultItem";
import {Loader} from "./components/Loader";

export const SingleResult = () => {
    const [state, setState] = useState({loading: true, error: false, result: null, nothingFound: false})
    const {searchText} = useParams();

    useEffect(() => {
        (
            async () => {
                //set loading state
                setState(state => ({...state ,loading: true, error: false}))
                try{
                    //get response from api call
                    const response = await fetch(`https://entreprise.data.gouv.fr/api/sirene/v1/siren/${searchText}`)
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
    }, [searchText])

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
                    state.loading && <Loader/>}
            </div>
        </div>
    )
}
