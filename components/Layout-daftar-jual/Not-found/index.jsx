import Image from "next/image"

const NotFound = ({content}) => {
  return (
    <div className='col-4 text-center me-auto ms-auto mt-5'>
        <div className="not-found">
            <Image src="/not_found.png" alt="not-found" width={276} height={195} />
            <h6> Belum ada produkmu yang {content} nih, sabar ya rejeki nggak kemana kok </h6>
        </div>
    </div>
  )
}

export default NotFound