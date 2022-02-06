import "./styles/table_cell.css";
import React from "react";
import { Button, Popup } from "semantic-ui-react";

export default function TableElement({ element, rowIndex, cellIndex, getPrimeFactors }) {
    return(
        <td className="table-cell">
            {element}
            {rowIndex != 0 && cellIndex != 0 ?
                <Popup trigger={<Button className="info-button">?</Button>} position="top center">
                    <p className="pop-up-text">
                        {getPrimeFactors(rowIndex, cellIndex)[0] + " x " + getPrimeFactors(rowIndex, cellIndex)[1]}
                    </p>
                </Popup>
            : null}
        </td>
    );
}
