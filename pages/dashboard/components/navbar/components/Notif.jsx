

const Notif = () => {
  return (
    <div className="d-flex flex-row justify-content-between dropdown-item p-1 p-md-4 p-lg-4 w-100" style={{cursor:"pointer"}}>
        <div className="img">
            <img src="https://via.placeholder.com/50" alt="..." className="br-10"/>
        </div>
        <div className="info d-flex flex-column">
            <p className="mb-1 text-muted" style={{fontSize:"12px !important"}}>Penawaran produk</p>
            <p className="mb-1 fw-500"> Jam Tangan Casio</p> 
            <p className="mb-1 fw-500"> Rp. 250.000 </p> 
            <p className="mb-1 fw-500"> Ditawar Rp. 200.000 </p> 
        </div>
        <div className="timestapm">
            <p className="text-muted" style={{fontSize:"12px !important"}}>20 Apr, 14:04</p>
        </div>
    </div>
  )
}

export default Notif