import React, { useState, useEffect } from 'react';
import "./Download.css"

import image1 from "../Assets/Images/veggivistaSS1.png"
import image2 from "../Assets/Images/veggivistaSS2.png"
import image3 from "../Assets/Images/veggivistaSS3.png"
import image4 from "../Assets/Images/veggivistaSS4.png"
import image5 from "../Assets/Images/veggivistaSS5.png"
import image6 from "../Assets/Images/veggivistaSS6.png"
import image7 from "../Assets/Images/veggivistaSS7.png"

export default function Download() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image1, image2, image3, image4, image5, image6, image7];
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId); 
    }, [images.length]);
    
    return (
        <div className="download-container" id='download'>
            <div className="image-slider">
                <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
            </div>
            <div className="download-panel">
                <h1>Download now and try out now</h1>
                <a href="https://drive.google.com/drive/folders/17UcewKpz9Jzm3zzwaGFns7oti3P7YJLt?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <button className="download-btn">Download app</button>
                </a>
            </div>
        </div>
    );
}
