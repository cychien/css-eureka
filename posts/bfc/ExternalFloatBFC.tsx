import * as React from "react";

function ExternalFloatBFC() {
  return (
    <div
      className="not-prose"
      style={{
        display: "flow-root",
        margin: "80px 0",
      }}
    >
      <div
        style={{
          padding: "24px",
          backgroundColor: "#fafaf9",
          boxShadow:
            "0 1px 3px 0 rgba(0 0 0 / 0.1), 0 1px 2px -1px rgba(0 0 0 / 0.1)",
          borderRadius: "8px",
        }}
      >
        <div
          className="float"
          style={{
            float: "left",
            height: "60px",
            width: "60px",
            backgroundColor: "#d6d3d1",
            borderRadius: "4px",
            marginRight: "16px",
            fontSize: "14px",
            padding: "4px",
          }}
        >
          Floated div
        </div>
        <p style={{ display: "flow-root" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </div>
    </div>
  );
}

export default ExternalFloatBFC;
