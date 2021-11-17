import SearchForm from "./components/SearchForm";

const Home = () => {
    return (
        <div className={"row"}>
            <h1 className={"text-center my-4"}>Annuaire des entreprises en France</h1>
            <SearchForm/>
            <p className={"text-primary text-center fs-4 my-3"}>Retrouvez toutes les informations publiques concernant les entreprises françaises</p>
        </div>
    )
}

export default Home