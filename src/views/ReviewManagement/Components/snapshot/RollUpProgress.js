import React from "react";
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 12,
    // width: "120px",
    width: "6.5rem",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 5,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    // width: "50px",
    backgroundColor: bgcolor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    // color: "white",
    // fontWeight: "bold",
    display: "none",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>
          {`${completed}%`}
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
