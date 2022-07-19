import ProductCard from "./components/ProductCard";

const ProductList = ({ product, categories, butIndex, search }) => {

    const productData = butIndex == -1 ? product : product.filter(item => item.categoryId == butIndex)

    return (
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-1">
            {//https://dummyimage.com/300x200/000000/fff.png
                productData.filter(data => data.categoryId != 226).map((product, index) => {
                    return (
                        <ProductCard
                            key={product.id}
                            productImage={product.images.length > 0 ? product.images[0].image : "https://dummyimage.com/300x200/000000/fff.png"}
                            productName={
                                product.name} productCategory={
                                    categories.filter(category => category.id === product.categoryId).map((category, _) => {
                                        return category.name
                                    })
                                }
                            productPrice={product.price} />
                    )
                })
            }
        </div>

    )
}

export default ProductList;