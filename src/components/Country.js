import React from "react";

const Country = ({country}) => {
    return (
        <div className="country-container">
            <span>{country.flag}</span>
        </div>
    );
};

export default Country;