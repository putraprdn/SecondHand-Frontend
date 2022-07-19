import Logo from "./components/logo";
import SearchEngine from "./components/SearchEngine";
import LoginButton from "./components/LoginButton";
import IconButton from "./components/Icon";
import { useEffect, useState } from "react";

const NavBar = ({ setSearch, setRefetch }) => {

    const [isLoggedIn, setIsLoggedIn] = useState([]);

    useEffect(function () {
        const token = localStorage.getItem('token')
        setIsLoggedIn(token)
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm p-3 mb-lg-5 mb-3 bg-body rounded">
            <div className="container">
                <div className="navbar-brand align-self-center" href="#">
                    <Logo />
                </div>
                <SearchEngine setSearch={setSearch} setRefetch={setRefetch} />
                <ul className="navbar-nav ms-md-auto flex-sm-row">
                    {!isLoggedIn ?
                        <li className="nav-item">
                            <LoginButton />
                        </li>
                        :
                        <IconButton />
                    }

                </ul>
            </div>
        </nav >
    )
}

export default NavBar;