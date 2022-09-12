import React from "react";

import Header from "./Header";
import "./App.css";

function App() {
    return (
        <div>
            <Header />
            <div className="component-body-container">
                <button className="custom-btn add-btn">Add</button>

                <div className="grid-container heading-container">
                    <span className="grid-item name-heading">Name</span>
                    <span className="grid-item phone-heading">Phone</span>
                </div>
                <div className="grid-container ">
                    <span className="grid-item ">Shilpa</span>
                    <span className="grid-item ">8888888888</span>
                </div>
                <div className="grid-container ">
                    <span className="grid-item ">Srishti</span>
                    <span className="grid-item ">9999999999</span>
                </div>



            </div>
        </div>
    );
}

export default App;
