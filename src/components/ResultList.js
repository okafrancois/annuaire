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

export default  ResultsList