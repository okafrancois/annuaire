import "../styles/card-list.css"
import {useEffect, useRef} from "react";

export const CardList = (props) => {
    const {total_results, total_pages, page, etablissement} = props.result
    const itemRef = useRef()

    useEffect(()=>{
    }, [props])

    const items = etablissement.map(item => (
            <div ref={itemRef} className="card border-0 rounded-2 bg-light my-2  custom-shadow" key={item.id}>
                <div className="card-body">
                    <h5 className="card-title">{item.nom_raison_sociale}</h5>
                    <p className="card-text">{item.libelle_activite_principale}</p>
                    <button className="btn btn-primary">Voir plus</button>
                </div>
            </div>
        )
    )

    return items

}

