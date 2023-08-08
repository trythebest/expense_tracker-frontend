import "./home.css";

export default function History({ data }) {
    console.log(data);

    return (
        <div className="history">
            <div className="body">
                <h5>History</h5>
                <hr />
                {data.map((data) => (
                    <div className="cards" style={{ borderRight: data.type === "Income" ? "5px solid #41CC71" : "5px solid #f7261f" }}>
                        <p>{data.name}</p>
                        <p>${data.amount}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}