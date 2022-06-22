import BackButton from "./components/back-button/BackButton";
import NavBar from "./components/navbar"
import ProductForm from "./components/product-form/ProductForm";

const AddProduct = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row justify-content-center">
                    <BackButton />
                    <ProductForm />
                </div>
            </div>
        </div>
    )
}

export default AddProduct;