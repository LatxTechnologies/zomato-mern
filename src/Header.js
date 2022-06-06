import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <nav>
                <input type="checkbox" id="check" />
                <label for="check"><i class="fas fa-bars"></i></label>
                <span><Link to="/"><i>Zomato</i></Link></span>
                <ul>
                    <li><Link to="/login">Sign In</Link></li>
                    <li><Link to="/register">Sign Up</Link></li>
                </ul>
            </nav>
        )
    }
}
export default Header;