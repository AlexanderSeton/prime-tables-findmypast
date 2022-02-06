import "./styles/application_container.css";
import React, { useState } from "react";
import Form from "../components/Form";
import MultiplicationTable from "./MultiplicationTable.js";

export default function ApplicationContainer() {

    const [userInput, setUserInput] = useState("");
    const [numberPrimes, setNumberPrimes] = useState();

    const handleUserInput = function(event) {
        setUserInput(event.target.value);
    }

    const handleFormSubmit = function(event) {
        event.preventDefault();
        if (
            userInput == "" ||
            userInput == "0"
        ) {
            alert("Please enter a whole number greater than 0");
            setUserInput("");
        } else {
            setNumberPrimes(parseInt(userInput));
        }
    }

    return(
        <div className="application-container">
            <h1 id="title">Prime Multiplication Table</h1>
            <p className="description">This application takes in a numeric input N, then outputs a multiplication table of N prime numbers</p>
            <Form userInput={userInput} handleUserInput={handleUserInput} handleFormSubmit={handleFormSubmit} />
            {numberPrimes !== undefined ?
                <p className="tool-tip-instructions">Hover over the question mark (?) to view the numbers prime factors</p>
            : null}
            {numberPrimes !== undefined ? 
                <MultiplicationTable numberPrimes={numberPrimes} /> 
            : null}
        </div>
    );
}
