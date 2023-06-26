import { useState } from "react";
import Table from "./Table";
function App() {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);
  const [displayTable, setDisplayTable] = useState(false);
  const handleRowsAndCols = (e) => {
    e.preventDefault();
    setDisplayTable(true);
  };
  return (
    <>
      <form onSubmit={handleRowsAndCols}>
        <input
          type="number"
          placeholder="rows"
          required
          min="1"
          value={rows}
          onChange={(e) => {
            setRows(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="cols"
          required
          min="1"
          value={cols}
          onChange={(e) => {
            setCols(e.target.value);
          }}
        />
        <button type="submit">Go</button>
      </form>

      {displayTable && <Table row={rows} col={cols} />}
    </>
  );
}

export default App;
