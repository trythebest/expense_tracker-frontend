import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";




export default function Login(){
    return(
        <div className="container">
            <div className="cards">
                {/* <div>
                    <img className="budget" src={budget} alt="budget-app"/>
                </div> */}
                <form>
                <h1>Login</h1>
                <input type="text" placeholder="username" className="inp" />
                <input type="password" placeholder="password"  className="inp"/>
                <div className="buttons">
                <small style={{fontSize:"10px"}}>New user? <Link to="/Signup">Signup</Link></small>
                <button className="btn" type="submit">Sigin</button>
                </div>
                </form>
                
            </div>

        </div>

    )
}