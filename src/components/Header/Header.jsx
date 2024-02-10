import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="text-5xl font-bold text-center py-4 mb-4 border-b border-b-gray-500">
            <Link to="/">DummyUsers</Link>
        </header>
    );
};

export default Header;
