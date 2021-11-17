export const ResultItem = (props) => {
    const {nom, activitePrincipale} = props

    return (
        <div className="card border-0 col-sm-12 col-md-4">
            <div className="card-body rounded-2 bg-light custom-shadow  my-2 mx-2">
                <h5 className="card-title">{nom}</h5>
                <p className="card-text">{activitePrincipale}</p>
                {/** @TODO add single enterprise page and pass it enterprise siren trough urls params**/}
                <button className="btn btn-primary disabled">Voir plus</button>
            </div>
        </div>
    )

}

