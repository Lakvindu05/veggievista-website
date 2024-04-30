import React from "react";
import "../Components/Team.css"

import team1 from "../Assets/Images/team-1.jpg"
import team2 from "../Assets/Images/team-2.PNG"
import team3 from "../Assets/Images/team-3.JPG"
import team4 from "../Assets/Images/team-4.jpg"
import team5 from "../Assets/Images/team-5.jpeg"
import github from "../Assets/Images/github.png"
import linkedin from "../Assets/Images/linkedin.png"


export default function Team(){
    return(
        <div className="container">
            <h1>Meet Our Team</h1>
            <div className="team-container">
                
                <div className="team-member">
                    <img src={team1} alt="member 1" />
                    <h3>Lakvindu Siriwardena</h3>
                    <div className="contact-us">
                        <a href="https://github.com/Lakvindu05" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/lakvindu-siriwardena/" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={linkedin} alt="" />
                        </a>
                    </div>
                </div>

                <div className="team-member">
                    <img src={team2} alt="member 2" />
                    <h3>Akindu Sandeev</h3>
                    <div className="contact-us">
                        <a href="https://github.com/akindusandeev" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/akindu-sandeev-665295287/" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={linkedin} alt="" />
                        </a>
                    </div>
                </div>

                <div className="team-member">
                    <img src={team3} alt="member 3" />
                    <h3>Sanjula Sunath</h3>
                    <div className="contact-us">
                        <a href="https://github.com/Sanjula03" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/sanjula-sunath-7b6607247/" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={linkedin} alt="" />
                        </a>
                    </div>
                </div>

                <div className="team-member">
                    <img src={team4} alt="member 4" />
                    <h3>Sasanka Bandara</h3>
                    <div className="contact-us">
                        <a href="https://github.com/Sasankamadura" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/sasanka-bandara-800224267/" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={linkedin} alt="" />
                        </a>
                    </div>
                </div>

                <div className="team-member">
                    <img src={team5} alt="member 5" />
                    <h3>Chavindu Chandrasekara</h3>
                    <div className="contact-us">
                        <a href="https://github.com/chavinduc" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/chavindu-chandrasekara/" target="_blank" rel="noopener noreferrer">
                            <img className="logos" src={linkedin} alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
