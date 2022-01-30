import "./styles/table_row.css";
import React from "react";
import TableCell from "./TableCell.js"

export default function TableRow({ row }) {

    let tableCellItems = row.map((element, index) => {
        return <TableCell element={element} key={index} />
    })

    return(
        <tr className="row">
            {tableCellItems}
        </tr>
    );
}
