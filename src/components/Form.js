import "./styles/form.css";
import React from "react";

export default function Form({ userInput, handleUserInput, handleFormSubmit }) {
    return(
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                <label>Enter a number: </label>
                <input type="text" pattern="[0-9]*" value={userInput} onChange={handleUserInput} id="input-box" placeholder="number..." />
                <button type="submit" id="submit-button">Submit</button>
            </form>
        </div>
    );
}
