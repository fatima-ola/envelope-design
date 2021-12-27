import React from "react";
import Sender from "./Sender";
import Receiver from "./Receiver";
import Stamp from "./Stamp";
import { fromPerson, toPerson } from "../data";

const Envelope = () => {
  return (
    <div className="outer-box">
      <div className="wrapper">
        <div className="sender">
          <Sender fromPerson={fromPerson} />
          <Stamp />
        </div>
        <Receiver toPerson={toPerson} />
      </div>
    </div>
  );
};

export default Envelope;
