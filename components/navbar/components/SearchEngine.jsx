import { Search } from "react-feather";
import styles from '../../../styles/Search.module.css'

const SearchEngine = () => {
    return (
        <div className={`${styles['w-444']} position-relative`}>
            <form className="d-flex" role="search">
                <input className="form-control flex-grow-1 w-100 px-3 py-2 rounded-16" type="search" placeholder="Cari disini" aria-label="Search" />
                <button className="btn position-absolute rounded-16" type="submit" style={{right:1}}>
                    <Search size={20} />
                </button>
            </form>
        </div> 
    )
}

export default SearchEngine;