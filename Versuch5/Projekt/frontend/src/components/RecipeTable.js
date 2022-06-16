import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const RecipeTable = () => {
  const [rows, setRows] = useState(null);
  useEffect(() => {
    fetch("/getRecipes")
      .then((response) => response.json())
      .then((data) => setRows(data));
  }, []);
  if (rows && rows.length > 0) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {Object.keys(rows[0]).map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((e) => (
            <tr>
              {Object.values(e).map((value) => (
                <td>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  } else {
    return <></>;
  }
};

export default RecipeTable;
