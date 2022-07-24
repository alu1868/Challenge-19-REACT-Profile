import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return(
        <header>
            <nav>
                <ul>
                    {/* Home Section */}
                    <li>
                        <a href="#Home">Home</a>
                    </li>

                    {/* About Section */}
                    <li>
                        <a href="#About">About Me</a>
                    </li>

                    {/* Work Section */}
                    <li>
                        <a href="#Work">Work</a>
                    </li>

                    {/* Contact Section */}
                    <li>
                        <a href="#Contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav