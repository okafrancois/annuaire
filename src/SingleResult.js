import {useParams} from "react-router-dom";
import SearchForm from "./components/SearchForm";
import {useEffect, useState} from "react";
import {Loader} from "./components/Loader";
const MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

export const SingleResult = () => {
    const [state, setState] = useState({loading: true, error: false, result: null, nothingFound: false})
    const {searchSiren} = useParams();

    useEffect(() => {
        (
            async () => {
                //set loading state
                setState(state => ({...state ,loading: true, error: false}))
                try{
                    //get response from api call
                    const response = await fetch(`https://entreprise.data.gouv.fr/api/sirene/v1/siren/${searchSiren}`)
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
    }, [searchSiren])

    return (
        <div className={"container-fluid"}>
            <h1 className={"text-center my-4"}>Annuaire des entreprises en France</h1>
            <SearchForm currentSearch={searchSiren} loadindState={state.loading}/>
            {(!state.error && state.result != null) && <ItemDetails details={state.result.siege_social}/>}
            <div className="row messages">
                {//display if there's an error
                    state.error && <div className="col-12 py-3">
                        <p className="text-danger">Oops, il y a eu une erreur. Essayez de relancer la recherche ou vérifiez votre connexion</p>
                    </div>}
                {//display result items only if there's a result that isn't an error and if the page is not loading
                    state.nothingFound && <p className={"text-center py-3"}>🤔 Nous n'avons rien trouvé qui ressemble à "{searchSiren}". Vérifiez l'orthographe ou changez de recherche.</p>
                }

                {//display if the page is loading
                    state.loading && <Loader/>}
            </div>
        </div>
    )
}

const ItemDetails = (props) => {
    const {siren, siret, libelle_activite_principale, date_creation, nom_raison_sociale, libelle_nature_juridique_entreprise, geo_adresse} = props.details

    const formatedDate = () => {
            const years = date_creation.slice(0, 4)
            const month = parseInt(date_creation.slice(4, 6), 10)
            const day = date_creation.slice(6, 8)
            return `${day} ${MONTHS[(month-1)]} ${years}`
    }

    return (
        <div className="item-details mt-3 h-100 bg-light p-3 rounded-3">
            <div className="titles">
                <h2 className={"item-name"}>{nom_raison_sociale}</h2>
                <p className={"item-siren"}>{siren}</p>
                <p className="item-date"><span className={"fw-bold"}>Date de création: </span>{formatedDate()}</p>
                <p className="item-siren"><span className={"fw-bold"}>Siren: </span>{siren}</p>
                <p className="item-siret"><span className={"fw-bold"}>Siret: </span>{siret}</p>
                <p className="item-statut"><span className={"fw-bold"}>Nature juridique: </span>{libelle_nature_juridique_entreprise}</p>
                <div className="item-description">
                    <p className={"fw-bold"}>Activité principale:</p>
                    <p>{libelle_activite_principale}</p>
                </div>
                <div className="item-adresse"><span className={"fw-bold"}>Siège social: </span>{geo_adresse}</div>
            </div>
        </div>
    )
}