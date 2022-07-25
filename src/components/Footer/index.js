import React from "react";
import githubImage from "../../assets/images/github-icon.png"
import linkedinImage from "../../assets/images/linkedin-icon.png"
import documentImage from "../../assets/images/document-icon.png"
import Resume from "../../assets/resume/Alexander-Lu-Resume.pdf"

function Footer() {
    return (
        <footer className="footer d-flex flex-row justify-content-center align-items-center">
            <a href="https://github.com/alu1868">
                <img src={githubImage} alt="Github Icon" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/alex-lu-361599228/">
                <img src={linkedinImage} alt="LinkedIn Icon" className="icon" />
            </a>
            <a href={Resume}>
                <img src={documentImage} alt="Generic Document Icon" className="icon" />
            </a>
        </footer>
    );
}

export default Footer;