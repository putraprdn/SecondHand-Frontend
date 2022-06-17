import { ArrowLeft } from "react-feather"

const BackButton = () => {
    return (
        <div className="col-1">
            <button className="btn">
                <ArrowLeft size={20} />
            </button>
        </div>
    )
}

export default BackButton;