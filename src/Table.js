import { useState } from "react";
import React from "react";
import "./style.css";
function Table(props) {
  const [color, setColor] = useState("#000000");
  const row = props.row;
  const col = props.col;
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < row; i++) {
    arr1[i] = i + 1;
  }
  for (let j = 0; j < col; j++) {
    arr2[j] = j + 1;
  }

  return (
    <>
      <div>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          style={{ marginRight: "10px" }}
        />
        <label>Color Picker</label>
        <table>
          <tbody>
            {arr1.map((i) => {
              return (
                <tr key={i}>
                  {arr2.map((j) => {
                    return i === j ? (
                      <td key={j} style={{ backgroundColor: color }}></td>
                    ) : (
                      <td key={j}></td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
