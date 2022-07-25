import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav>
                <ul>
                    {/* HOME BUTTON */}
                    <li>
                        <a href="#resume"
                        onClick={() => handlePageChange("Resume")}
                        className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
                            Resume</a>
                    </li>
                    {/* ABOUT ME SECTION */}
                    <li>
                        <a href="#about"
                        onClick={() => handlePageChange("About")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                            About Me</a>
                    </li>
                    {/* MY WORK SECTION */}
                    <li>
                        <a href="#Work"
                        onClick={() => handlePageChange("Work")}
                        className={currentPage === "Work" ? "nav-link active" : "nav-link"}>
                            Work</a>
                    </li>
                    {/* CONTACT SECTION */}
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