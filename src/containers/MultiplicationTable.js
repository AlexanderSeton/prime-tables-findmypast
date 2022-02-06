import "./styles/multiplication_table.css";
import React, { useEffect, useState } from "react";
import generateNaturalNumbers from "../models/natural_numbers_generator";
import seiveOfEratosthenes from "../models/prime_sieve";
import generateMultiplicationTable from "../models/multiplication_table";
import TableRow from "../components/TableRow";

export default function Table({ numberPrimes }) {

    const [multiplicationTable, setMultiplicationTable] = useState([]);

    useEffect(() => {
        createMultiplicationTable(numberPrimes);
    }, [numberPrimes])

    const createMultiplicationTable = function(numberPrimes) {
        const naturalNumberRange = generateNaturalNumbers(numberPrimes);
        const primes = seiveOfEratosthenes(naturalNumberRange, numberPrimes);
        const multiplicationTable = generateMultiplicationTable(primes);
        setMultiplicationTable(multiplicationTable);
    }

    const getPrimeFactors = function(rowIndex, cellIndex) {
        const output = [];
        output.push(multiplicationTable[rowIndex][0]);
        output.push(multiplicationTable[0][cellIndex]);
        return output;
    }

    const tableRows = multiplicationTable.map((row, index) => {
        return <TableRow row={row} rowIndex={index} getPrimeFactors={getPrimeFactors} key={index} />
    })

    return(
        <div className="multiplication-table">
            <div className="multiplication-table-wrapper">
                {multiplicationTable !== undefined ? 
                    <table className="table">
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                : null}
            </div>
        </div>
    );
}
