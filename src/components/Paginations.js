import {useNavigate} from "react-router-dom";

export const Paginations = (props) => {
    const navigate = useNavigate()
    const currentPage = props.currentPage
    let totalPages = props.totalPages
    const currentSearch = props.currentSearch

    let pages = [];
    for (let i = 1; i <= (totalPages); i++) {
        if (totalPages > 10){
            //limit the maximum pages to 10 to avoid incredible number of paginations
            totalPages = 10
        }
        const item =  <li key={`page-${i}`} className={`page-item ${(i - currentPage === 0) ? "active" : "" }`}>
            <button className="page-link" onClick={() => navigate(`/resultats/${currentSearch}/${i}`)}>{i}</button>
        </li>
        pages.push(item)
    }

    return(
        <nav className={"row my-3"}>
            <ul className="pagination flex-wrap justify-content-center">
                <li className={`page-item ${currentPage - 1 === 0 ? "disabled" : "" }`}>
                    <button className="page-link" onClick={() => navigate(`/resultats/${currentSearch}/${(currentPage * 1) - 1}`)}>Précédent</button>
                </li>
                {pages}
                <li className={`page-item ${currentPage - totalPages === 0 ? "disabled" : "" }`}>
                    <button className="page-link" onClick={() => navigate(`/resultats/${currentSearch}/${(currentPage * 1) + 1}`)}>Suivant</button>
                </li>
            </ul>
        </nav>
    )

}