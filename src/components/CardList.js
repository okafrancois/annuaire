import "../styles/card-list.css"
import {Paginations} from "./Paginations";

export const CardList = (props) => {
    const {total_results, total_pages, page, etablissement} = props.result

    return (
        <div className="container mt-3">
            <h2>{total_results} {(total_results > 1) ? "résultats trouvés" : "résultat touvé"} pour "{props.currentSearch}"</h2>
                {(total_results > 1000) && <p className={"alert-warning p-1 rounded-1"}>😳 Ça fait beaucoup là. Essayez d'affiner votre recherche pour un résultat précis.</p>}
            <div className="row">
                {(props.result.total_results !== undefined) && etablissement.map(item => {
                    return(
                        <div className="card border-0 rounded-2 bg-light my-2  custom-shadow" key={item.id}>
                            <div className="card-body">
                                <h5 className="card-title">{item.nom_raison_sociale}</h5>
                                <p className="card-text">{item.libelle_activite_principale}</p>
                                <button className="btn btn-primary">Voir plus</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            {(total_pages >= 1) && <Paginations totalPages={total_pages} currentSearch={props.currentSearch} currentPage={page}/>}
        </div>
    )
}

