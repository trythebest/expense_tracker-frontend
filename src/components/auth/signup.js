import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";



export default function Signup(){
    return(
        <div className="container">
            <div className="cards">
                {/* <div>
                    <img className="budget" src={budget} alt="budget-app"/>
                </div> */}
                <form>
                <h1>Signup</h1>
                <input type="text" placeholder="username" className="inp" />
                <input type="email" placeholder="Email" className="inp" />
                <input type="password" att placeholder="password" maxLength={"4"} className="inp" />
                <input type="password" placeholder=" confirm password" maxLength={"4"}  className="inp"/>
                <div className="buttons">
                <small style={{fontSize:"10px"}}>Already user? <Link to="/login">Login</Link></small>
                <button className="btn" type="submit">Sigup</button>
                </div>
                </form>
                
            </div>

        </div>

    )
}