import { useState } from "react";

function Mouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Function to update mouse coordinates
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
        border: "1px solid black",
        position: "relative",
      }}
    >
      {/* Moving element */}
      <div
        style={{
          position: "absolute",
          top: position.y - 25, // Adjust to center
          left: position.x - 25, // Adjust to center
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
}

export default Mouse;
