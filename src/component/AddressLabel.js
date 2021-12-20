import React from "react";

const AddressLabel = () => {
  const person = {
    fullName: "full Name",
    location: "123 Fake St.",
    state: "Boston, MA 02118",
  };
  return (
    <div className="address-info">
      <p>{person.fullName}</p>
      <p>{person.location}</p>
      <p>{person.state}</p>
    </div>
  );
};

export default AddressLabel;
