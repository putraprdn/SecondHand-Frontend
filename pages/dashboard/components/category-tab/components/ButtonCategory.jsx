import { Search } from "react-feather";

const ButtonCategory = ({ buttonText, buttonMain, buttonValue, setButIndex }) => {
    return (
        <button className={"btn " + (buttonMain == true ? "btn-primary text-white shadow " : "btn-secondary text-black") + " d-flex " + (buttonValue == -1 ? "" : "ms-3")} onClick={() => setButIndex(buttonValue)}>
            <Search size={20} className="align-self-center" />
            <div className="align-self-center text-capitalize ms-2">{buttonText}</div>
        </button>
    )
}

export default ButtonCategory;