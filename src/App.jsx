import React, { useState, useEffect } from "react";

function App() {
  const [widthInEmp, setWidthInEm] = useState(0);
  const [heightInEmp, setHeightInEmp] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const emSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );

      setWidthInEm(window.innerWidth / emSize);
      setHeightInEmp(window.innerHeight / emSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      Width in em: {widthInEmp}, Height in em: {heightInEmp}
    </div>
  );
}
export default App;
