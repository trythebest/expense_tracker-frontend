import React from "react";
import "../Home/home.css";
import { useState } from "react";

export default function AddTransaction({ data, setData }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const add = () => {

        const newData = {
            name,
            type,
            amount
        }
        console.log(newData);
        setData([...data, newData]);
    }

    return (

        <div className="add-transaction">
            <div className="container">
                <h5>Add New Transaction</h5>
                <hr />
                <div className="inputs">

                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="description" value={name} />
                    <select id="Type" onChange={(e) => setType(e.target.value)} style={{ border: "1px solid #ddd", height: "50px", borderRadius: "5px" }}>
                        <option value={"Type"}>Select Type</option>
                        <option value={"Income"}>INCOME</option>
                        <option value={"Expense"}>EXPENSE</option>
                    </select>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Amount" value={amount} />
                    <button onClick={add}>ADD</button>


                </div>
            </div>
        </div>
    )
}