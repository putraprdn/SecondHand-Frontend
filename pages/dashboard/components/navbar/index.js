import Logo from "./components/logo";
import SearchEngine from "./components/SearchEngine";
import LoginButton from "./components/LoginButton";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm p-3 mb-5 bg-body rounded">
            <div className="container">
                <div className="d-flex">
                    <a className="navbar-brand align-self-center" href="#">
                        <Logo />
                    </a>
                    <SearchEngine />
                </div>
                <LoginButton />
            </div>
        </nav >
    )
}

export default NavBar;