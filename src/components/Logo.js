import React from "react";

const Logo = () => {
    return (
        <div className="logo">
            {/*Les images en balise IMG sont rangées dans le dossier public*/}
            <img src="./img/logo192.png" alt="Logo React" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;