import { useState } from "react";
import ButtonCategory from "./components/ButtonCategory";

const CategoryTab = ({ categories }) => {
    const [butIndex, setButIndex] = useState(-1);

    return (
        <div className="py-3 d-flex text-nowrap overflow-auto">
            <ButtonCategory buttonText={"Semua"} buttonMain={butIndex == -1 ? true : false} buttonValue={-1} setButIndex={setButIndex} />

            {
                categories.map((category, index) => {
                    return (
                        <ButtonCategory buttonText={category.name} buttonMain={butIndex == category.id ? true : false} buttonValue={category.id} setButIndex={setButIndex} />
                    )
                })
            }
        </div>
    )
}

export default CategoryTab;