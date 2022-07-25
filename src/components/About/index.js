import React from "react";
import self from "../../assets/images/self-portrait.jpg"

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
                    <h3>Technologies</h3>
                </div>
                <div>
                    <ul>
                        <li>
                            <h3>JavaScript</h3>
                        </li>

                        <li>
                            <h3>Node JS</h3>
                        </li>

                        <li>
                            <h3>MONGO DB</h3>
                        </li>

                        <li>
                            <h3>MySQL</h3>
                        </li>

                        <li>
                            <h3>HTML + CSS</h3>
                        </li>

                        <li>
                            <h3>React JS</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About