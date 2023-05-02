import React from "react";

// components
import SplitFlap from "../SplitFlap/SplitFlap";

export default function Grid() {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(20, 1fr)`,
    gridTemplateRows: `repeat(15, 1fr)`,
    gap: "1px",
  };

  const cells = [];

  for (let rowIndex = 0; rowIndex < 15; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 20; columnIndex++) {
      cells.push(<SplitFlap key={`${rowIndex}-${columnIndex}`} />);
    }
  }

  return <div style={gridStyle}>{cells}</div>;
}
