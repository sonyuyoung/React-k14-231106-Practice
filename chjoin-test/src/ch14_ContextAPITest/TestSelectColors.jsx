import React from "react";
const colors = ["red", "orange", "blue", "indigo", "violet", "aqua", "navy"];

const TestSelectColors = () => {
  return (
    <div>
      <h2>색상 선택하기</h2>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default TestSelectColors;
