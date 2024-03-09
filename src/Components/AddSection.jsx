import React, { useState } from "react";

const AddSection = ({ setShowAddSection, usersData, setUserData }) => {
  const [addFormInput, SetAddFormInput] = useState({
    name: "",
    fname: "",
    pid: "",
  });
  const [errorNotification, setErrorNotification] = useState();

  const handleAddFormInput = (e) => {
    SetAddFormInput({ ...addFormInput, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (addFormInput.name && addFormInput.fname && addFormInput.pid) {
      const newUser = {
        id: usersData.length + 1,
        name: addFormInput.name,
        fname: addFormInput.fname,
        pid: addFormInput.pid,
      };
      setUserData([...usersData, newUser]);
      SetAddFormInput({ name: "", fname: "", pid: "" });
    } else {
      setErrorNotification(
        <div
          className="alert alert-danger alert-dismissible fade show notification"
          role="alert"
        >
          لطفا تمامی فیلد ها را پر کنید!!!
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
      );
    }
  };
  return (
    <>
      <section className="container " id="addSection">
        <div className="row ">
          <div className=" col-11">
            <input
              readOnly={true}
              className="px-3 py-2 w-100 search-bar "
              type="text"
              placeholder="افزودن"
            />
          </div>
          <div
            onClick={() => setShowAddSection(false)}
            className=" col-1 bg-danger  icon d-flex justify-content-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="45"
              fill="white"
              className="bi bi-x-square"
              viewBox="0 0 16  16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </div>
        <form className="row py-4 px-4 search-options justify-content-between  ">
          <div className="d-flex gap-2 mt-2 mt-lg-0  col-12 col-lg-3  justify-content-between justify-content-lg-center ">
            <label className=" mt-1">نام : </label>
            <input
              value={addFormInput?.name}
              name="name"
              onChange={handleAddFormInput}
              className="px-3 col-6"
              type="text"
            />
          </div>
          <div className="d-flex gap-2 mt-2 mt-lg-0 col-12 col-lg-3    justify-content-between justify-content-lg-center">
            <label className=" mt-1"> نام خانوادگی : </label>
            <input
              value={addFormInput?.fname}
              name="fname"
              onChange={handleAddFormInput}
              className="px-3 col-6"
              type="text"
            />
          </div>
          <div className="d-flex gap-2 mt-2 mt-lg-0 col-12 col-lg-3   justify-content-between justify-content-lg-center ">
            <label className=" mt-1">کد ملی :</label>

            <input
              value={addFormInput?.pid}
              name="pid"
              onChange={handleAddFormInput}
              className="px-3 col-6"
              type="text"
            />
          </div>
          <div className="col-6 col-lg-1 mt-2 mt-lg-0">
            <button
              onClick={handleAddUser}
              type="button"
              className="btn btn-primary px-4"
            >
              افزودن
            </button>
          </div>
          <div className="col-6 col-lg-1 mt-2 mt-lg-0">
            <button
              onClick={() => setShowAddSection(false)}
              type="button"
              className="btn btn-danger px-4"
            >
              بستن
            </button>
          </div>
        </form>
        {errorNotification}
      </section>
    </>
  );
};

export default AddSection;
