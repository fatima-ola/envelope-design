import React from "react";

const Receiver = ({ toPerson }) => {
  return (
    <div className="receive">
      <p>{toPerson.fullName}</p>
      <p>{toPerson.location}</p>
      <p>{toPerson.state}</p>
    </div>
  );
};

export default Receiver;
