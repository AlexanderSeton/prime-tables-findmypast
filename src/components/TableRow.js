import "./styles/table_row.css";
import React from "react";
import TableCell from "./TableCell.js"

export default function TableRow({ row, rowIndex, getPrimeFactors }) {

    const tableCellItems = row.map((element, index) => {
        return <TableCell element={element} rowIndex={rowIndex} cellIndex={index} getPrimeFactors={getPrimeFactors} key={index} />
    })

    return(
        <tr className="row">
            {tableCellItems}
        </tr>
    );
}
