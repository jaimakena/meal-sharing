import React, {useState} from "react";
import {NavLink, Link} from "react-router-dom";

function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink exact activeClassName="active" to="/">
                        Home |
                    </NavLink>
                    <NavLink activeClassName="active" to="/meals">
                        Meals |
                    </NavLink>
                </div>
            </nav>
        </>
    );
}
export default Header;
