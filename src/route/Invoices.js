//File invoices.js
import { useParams } from "react-router-dom";

export default function Invoices() {
    let params = useParams();
    return (
        <div style={{ padding: "1rem 0" }}>
            <h2>Invoice Detail</h2>
            <p>Invoice: {params.invoiceId}</p>
        </div>
    );
}