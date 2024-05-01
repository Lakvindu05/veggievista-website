import React from "react";
import "./Container.css"
import containerImage from "../Images/container-image.png"

export default function Container(){
    return(
        <div className="Container">
            <div className="textArea">
                <h1>veggie vista</h1>
                <p>This innovative food-recipes-based application aims to revolutionize the way cooks approach meal planning and preparation. We try to empower our users to reduce food waste and promote healthy eating by suggesting food recipes based on the ingredients they already have on hand.</p>
            </div>
            <div className="imageBox">
                <img src={containerImage} alt="Container-image" />
            </div>
        </div>
    )
}