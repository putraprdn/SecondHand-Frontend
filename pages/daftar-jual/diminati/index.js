import { LayoutDaftarJual, NotFound, CardProduct } from "../../../components"
import { useState } from "react"

const Diminati = () => {

  const [products, setProducts] = useState(null)

  return (
    <LayoutDaftarJual>
      <div className="row g-3">
          {!products ? <NotFound content={'diminati'}/> : products.map((item, index) => {<CardProduct key={index} product={item} />})}
      </div>
    </LayoutDaftarJual>
  )
}

export default Diminati