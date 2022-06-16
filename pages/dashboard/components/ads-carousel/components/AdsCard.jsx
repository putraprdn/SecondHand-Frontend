
const AdsCard = ({ adsTitle, adsDescription, adsImage }) => {
    return (
        <div className="card text-white card-img shadow-lg" >
            <img src={adsImage} className="card-img" />
            <div className="card-img-overlay">
                <h5 className="card-title">{adsTitle}</h5>
                <p className="card-text">{adsDescription}</p>
                {/* <p className="card-text">Last updated 3 mins ago</p> */}
            </div>
        </div>

    )
}

export default AdsCard;