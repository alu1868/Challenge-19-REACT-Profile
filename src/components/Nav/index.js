import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#home"
                        onClick={() => handlePageChange("home")}
                        className={currentPage === "home" ? "nav-link active" : "nav-link"}>
                            Home</a>
                    </li>
                    <li>
                        <a href="#about"
                        onClick={() => handlePageChange("About")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                            About Me</a>
                    </li>
                    <li>
                        <a href="#work"
                        onClick={() => handlePageChange("Work")}
                        className={currentPage === "Work" ? "nav-link active" : "nav-link"}>
                            Work</a>
                    </li>
                    <li>
                        <a href="#contact"
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                            Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav