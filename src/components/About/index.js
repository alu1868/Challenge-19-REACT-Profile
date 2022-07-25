import React from "react";
import self from "../../assets/images/self-portrait.jpg"
import Resume from "../../assets/resume/Alexander-Lu-Resume.pdf"
import documentImage from "../../assets/images/document-icon-large.png"



function About() {

    return (
        <div>
            {/* Title Banner */}
            <div>
                <h2>ABOUT ME</h2>
            </div>

            {/* About Me Content */}
            <div>
                {/* INSERT IMAGE */}
                <img src={self} alt="Alexander Lu"></img>
                <p>Born and raised in the great city of Houston, I worked as an electrician under my father’s business serving the bustling local Chinese community. As demand and projects grew more complex, I began to utilize programs such as AutoCAD and Sketchup and began my journey into design. Eventually I landed a position as a designer and land surveyor at a solar company in Austin, retrofitting homes and businesses around central Texas for a more green future. Now I approach new challenges. Through the recommendation of friends I enrolled in the University of Texas Coding Bootcamp. Now equipped with fresh new skills, I’m ready to take on a new digital frontier.</p>
            </div>

            {/* Technologies */}
            <div>
                <div>
                    <h3>Checkout My Resume Below!</h3>
                </div>
                <div>
                    <a href={Resume}>
                        <img src={documentImage} alt="Generic Document Icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About