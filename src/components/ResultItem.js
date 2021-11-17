export const ResultItem = (props) => {
    const {nom, activitePrincipale} = props

    return (
        <div className="card border-0 rounded-2 bg-light my-2  custom-shadow">
            <div className="card-body">
                <h5 className="card-title">{nom}</h5>
                <p className="card-text">{activitePrincipale}</p>
                {/** @TODO add single enterprise page and pass it enterprise siren trough urls params**/}
                <button className="btn btn-primary disabled">Voir plus</button>
            </div>
        </div>
    )

}

