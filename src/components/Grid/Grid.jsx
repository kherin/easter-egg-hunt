import React, { useEffect, useState } from "react";

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

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 20; j++) {
      cells.push(<SplitFlap key={`${i}-${j}`} />);
    }
  }

  return <div style={gridStyle}>{cells}</div>;
}
