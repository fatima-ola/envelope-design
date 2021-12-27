import React from "react";

const AddressLabel = ({ fromPerson }) => {
  const { fullName, location, state } = fromPerson;

  return (
    <div className="address-info">
      <p>{fullName}</p>
      <p>{location}</p>
      <p>{state}</p>
    </div>
  );
};

export default AddressLabel;
