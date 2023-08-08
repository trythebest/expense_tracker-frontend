import React, { useEffect, useState } from "react";
import "./home.css";



export default function Home({ data }) {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const Calculatebalance = () => {
        let inc = 0;
        let exp = 0;

        data.map((data) => {
            data.type === "Expense" ? (exp = exp + parseInt(data.amount)) : (inc = inc + parseInt(data.amount));
        })
        setExpense(exp);
        setIncome(inc);

    }
    useEffect(() => {
        Calculatebalance();
    }, [data])

    const Balance = income - expense;

    const mystyle = {
        color: Balance >= 0 ? "#41CC71" : "#f7261f"
    }

    return (
        <div className="home">
            <div className="body">
                <h2>Expense Tracker</h2>
                <div className="balance">
                    <h5>Your Balance</h5>
                    <h3 style={mystyle}>${Balance}</h3>
                </div>
                <div className="in-ex">
                    <div>
                        <h5>INCOME</h5>
                        <p style={{ color: "#41CC71" }}>${income}</p>
                    </div>
                    <div>
                        <h5>EXPENSE</h5>
                        <p style={{ color: "#f7261f" }}>${expense}</p>
                    </div>
                </div>
            </div>


        </div>

    )
}