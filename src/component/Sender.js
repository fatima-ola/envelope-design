import React from "react";

const Sender = ({ fromPerson }) => {
  return (
    <div className="sender-wrapper">
      <p>{fromPerson.fullName}</p>
      <p>{fromPerson.location}</p>
      <p>{fromPerson.state}</p>
    </div>
  );
};

export default Sender;
