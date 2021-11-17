import {useNavigate} from "react-router-dom";

export const ResultItem = (props) => {
    const navigate = useNavigate()
    const {nom, activitePrincipale, siren} = props

    return (
        <div className="card border-0 col-sm-12 col-md-4">
            <div className="card-body rounded-2 bg-light custom-shadow  my-2 mx-2">
                <h5 className="card-title">{nom}</h5>
                <p className="card-text">{activitePrincipale}</p>
                <button className="btn btn-primary" onClick={() => navigate(`/entreprise/${siren}`)}>Plus de détails</button>
            </div>
        </div>
    )

}

