import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        À propos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;