import Navigation from "../components/Navigation";
import React from "react";
import Logo from "../components/Logo";

const NotFound = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1 style={notFoundStyle}>Erreur 404</h1>
        </div>
    );
}

let notFoundStyle = { textAlign: "center", margin: "100px" }

export default NotFound;