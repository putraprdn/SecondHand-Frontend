import { Search } from "react-feather";
// import '../../../../../styles/globals.css'

const SearchEngine = () => {
    return (
        <form className="d-flex align-self-center" role="search">
            <div className="d-flex form-control bg-light">
                <div className=" align-self-center">
                    <input className="border border-light bg-light txt-field" type="search" placeholder="Search" aria-label="Search" style={{ borderColor: "#f8f9fa", }} />
                </div>
                <div >
                    <Search size={20} />
                </div>
            </div>
            <div className="ms-auto ml-auto">
                <button className="btn btn-outline-success" type="submit" hidden>Search</button>
            </div>
        </form>
    )
}

export default SearchEngine;