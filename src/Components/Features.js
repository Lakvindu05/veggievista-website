import React from "react";
import "./Features.css"

export default function Features(){
    return(
        <div className="fetures-container">
            <h1>Features</h1>
            <div className="box-container">
                <div className="box">
                    <h2>Scan and identify fruits and vegetable</h2>
                    <span>identifies the scanned item and provide user recipies created based on that ingridents.</span>
                </div>
                <div className="box">
                    <h2>Recipes based on the ingredients</h2>
                    <span>provides recipes to the user based on the ingredients available to them.</span>
                </div>
                <div className="box">
                    <h2>Social platform</h2>
                    <span>provides a social platform for users to like, and comment on food-related content.</span>
                </div>
                <div className="box">
                    <h2>Search recipes</h2>
                    <span>provides a search tool allowing users to search recipes.</span>
                </div>
                <div className="box">
                    <h2>User Accounts</h2>
                    <span>allows users to create and log into user accounts.</span>
                </div>
            </div>
        </div>
    )
}