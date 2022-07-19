const LoadingBox = () => {
    return (
        <div className="col-2">
            <div className="btn position-relative border border-2 border-dark br-10" style={{ width: "90px", height: "90px" }}>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="col-2">Loading...</div>
                </div>
            </div>
        </div>
    )
}

export default LoadingBox;