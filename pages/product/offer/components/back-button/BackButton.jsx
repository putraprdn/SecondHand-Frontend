import Router from "next/router"
import { ArrowLeft } from "react-feather"

const BackButton = () => {

    const backPage = () => {
        Router.push('/daftar-jual/list')
    }

    return (
        <div className="col-1">
            <button className="btn" onClick={() => backPage()}>
                <ArrowLeft size={20} />
            </button>
        </div>
    )
}

export default BackButton;