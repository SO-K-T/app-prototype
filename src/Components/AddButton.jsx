import React from "react";

const AddButton = ({ showAddSection, setShowAddSection }) => {
  const HandleshowAddSection = (e) => {
    setShowAddSection(!showAddSection);
    e.preventDefault();
  };
  return (
    <div className=" container px-lg-5 mx-lg-5  m-4">
      <button
        onClick={HandleshowAddSection}
        type="button"
        className="btn btn-primary px-4  mx-lg-4"
      >
        افزودن
      </button>
    </div>
  );
};

export default AddButton;
