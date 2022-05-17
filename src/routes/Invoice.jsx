import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router'
import { deleteInvoice, getInvoice } from '../constants/data';

const Invoice = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceID, 10));

    const handleDelete = () =>  {
        deleteInvoice(invoice.number);
        navigate("/invoices" + location.search)
    }

    return (
        <main style={{ padding: '1rem' }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            {/* <p>
                <button onClick={handleDelete}>Delete</button>
            </p> */}
        </main>
    )
}

export default Invoice