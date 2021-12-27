import React from "react";

const Receiver = ({ toPerson }) => {
  const { fullName, location, state } = toPerson;
  return (
    <div className="receive">
      <p>{fullName}</p>
      <p>{location}</p>
      <p>{state}</p>
    </div>
  );
};

export default Receiver;
