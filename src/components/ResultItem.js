import {useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import gsap from "gsap"

export const onEnter = node => {
    gsap.from(
        node,
        0.7,
        {
            y: 100,
            delay: 0.3,
            ease: "back",
            opacity: 0,
            stagger: {
                amount: 0.8
            }
        }
    )
}

export const ResultItem = (props) => {
    const blockRef = useRef()
    const navigate = useNavigate()
    const {nom, activitePrincipale, siren} = props

    useEffect(() => (
        onEnter(blockRef.current)
    ))

    return (
        <div ref={blockRef} className="card border-0 col-sm-12 col-md-4">
            <div className="card-body rounded-2 bg-light custom-shadow  my-2 mx-2">
                <h5 className="card-title">{nom}</h5>
                <p className="card-text">{activitePrincipale}</p>
                <button className="btn btn-primary" onClick={() => navigate(`/entreprise/${siren}`)}>Plus de détails</button>
            </div>
        </div>
    )

}

