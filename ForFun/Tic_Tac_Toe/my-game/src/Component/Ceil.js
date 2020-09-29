import React from "react";

const Ceil = (props) => {
  const { value, handleOnClick } = props;
  return (
    <div className="ceil" onClick={handleOnClick}>
      <span>{value}</span>
    </div>
  );
};

export default Ceil;
