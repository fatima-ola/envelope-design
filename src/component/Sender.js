import React from "react";

const Sender = ({ fromPerson }) => {
  const { fullName, location, state } = fromPerson;
  return (
    <div className="sender-wrapper">
      <p>{fullName}</p>
      <p>{location}</p>
      <p>{state}</p>
    </div>
  );
};

export default Sender;
