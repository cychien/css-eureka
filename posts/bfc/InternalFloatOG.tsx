import * as React from "react";

function InternalFloatOG() {
  return (
    <div
      className="not-prose"
      style={{ display: "flow-root", margin: "80px 0" }}
    >
      <div
        className="parent"
        style={{ backgroundColor: "#bbf7d0", border: "2px solid #22c55e" }}
      >
        <div
          className="float"
          style={{
            height: "100px",
            float: "left",
            backgroundColor: "#fed7aa",
            border: "2px solid #f97316",
          }}
        >
          I am a floated box!
        </div>
        <p>I am content inside the container.</p>
      </div>
    </div>
  );
}

export default InternalFloatOG;
