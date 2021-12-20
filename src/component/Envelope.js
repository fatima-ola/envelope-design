import React from "react";
import Sender from "./Sender";
import Receiver from "./Receiver";
import Stamp from "./Stamp";

const Envelope = () => {
  const fromPerson = {
    fullName: "Mr Sender",
    location: "123 Fake St.",
    state: "Boston, MA 02118",
  };

  const toPerson = {
    fullName: " Mrs. Receiver",
    location: " 123 Fake St.",
    state: " San Francisco, CA 94101",
  };
  return (
    <div className="outer-box">
      <div className="wrapper">
        <div className="sender">
          <Sender fromPerson={fromPerson} />
          <Stamp />
        </div>
        <Receiver toPerson={toPerson}  />
      </div>
    </div>
  );
};

export default Envelope;
