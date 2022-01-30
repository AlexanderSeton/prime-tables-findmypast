import "./styles/table_cell.css";
import React from "react";

export default function TableElement({ element }) {
    return(
        <td className="table-cell">
           {element}
        </td>
    );
}
