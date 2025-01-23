import {useParams} from "react-router-dom";
export default function Product() {
    let {categoryId} = useParams();
    return (
        <>
            <h1>Product ID {categoryId}, {categoryId === "1" ? "Toyota" : categoryId === "2"? "Honda" : "Not"}</h1>

        </>
    )
}