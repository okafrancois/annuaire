import {Component} from "react";

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentSearch: "",
            isResults: false
        }
    }

    render() {
        return (
            <div className={"container-fluid mt-5"}>
                <h1 className={"text-center mb-4"}>Annuaire des entreprises</h1>
                {!this.state.isResults && <p className={"text-primary text-center fs-4"}>Retrouvez toutes les informations publiques concernant les entreprises françaises</p>}
            </div>
        );
    }
}

export default List