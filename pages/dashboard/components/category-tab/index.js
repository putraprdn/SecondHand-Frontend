import { useState } from "react";
import ButtonCategory from "./components/ButtonCategory";

const CategoryTab = () => {
    const [butIndex, setButIndex] = useState(0);

    return (
        <div className="py-3 d-flex text-nowrap overflow-auto">
            <ButtonCategory buttonText={"Semua"} buttonMain={butIndex == 0 ? true : false} buttonValue={0} setButIndex={setButIndex} />
            <ButtonCategory buttonText={"Hobi"} buttonMain={butIndex == 1 ? true : false} buttonValue={1} setButIndex={setButIndex} />
            <ButtonCategory buttonText={"Kendaraan"} buttonMain={butIndex == 2 ? true : false} buttonValue={2} setButIndex={setButIndex} />
            <ButtonCategory buttonText={"Baju"} buttonMain={butIndex == 3 ? true : false} buttonValue={3} setButIndex={setButIndex} />
            <ButtonCategory buttonText={"Elektronik"} buttonMain={butIndex == 4 ? true : false} buttonValue={4} setButIndex={setButIndex} />
            <ButtonCategory buttonText={"Kesehatan"} buttonMain={butIndex == 5 ? true : false} buttonValue={5} setButIndex={setButIndex} />
        </div>
    )
}

export default CategoryTab;