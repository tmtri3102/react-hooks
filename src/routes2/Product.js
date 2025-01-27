import { useLocation , useParams } from "react-router-dom";

export default function Product() {
    // let {categoryId} = useParams ();
    const { state} = useLocation();
    return (
        <>
            {/*<h1>Product ID {categoryId}, {categoryId === "1" ? "Toyota" : categoryId === "2" ? "Honda" : "Not"}</h1>*/}
            <h1>{state.categoryId}: {state.categoryId === "1" ? "Toyota" : state.categoryId === "2" ? "Honda" : "Not"}</h1>
        </>
    )
}