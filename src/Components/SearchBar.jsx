import React, { useState } from "react";

const SearchBar = ({
  onSearchTerm,
  onSetSearchTerm,
  onShowSearchResult,
  onSetShowSearchResult,
}) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchUserInput = (e) => {
    onSetSearchTerm({ ...onSearchTerm, [e.target.name]: e.target.value });
  };

  return (
    <section className="container search-bar-section  ">
      <div className="row flex align-items-center justify-content-center">
        <div className=" col-11">
          <input
            readOnly={true}
            className="px-3 py-2 w-100 search-bar "
            type="text"
            onClick={() => setShowSearch(!showSearch)}
            placeholder="جستجو"
          />
        </div>
        <div className=" col-1   icon d-flex justify-content-center py-2 ">
          <svg
            onClick={() => setShowSearch(!showSearch)}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </div>

      {showSearch && (
        <form className="row py-4 px-4 search-options justify-content-between text-center ">
          <div className="d-flex gap-2 mt-2 mt-lg-0  col-12 col-lg-3  justify-content-between justify-content-lg-center  ">
            <label className=" mt-1">نام : </label>
            <input
              value={onSearchTerm?.name}
              name="name"
              onChange={handleSearchUserInput}
              className="px-3 col-5"
              type="text"
            />
          </div>
          <div className="d-flex gap-2 mt-2 mt-lg-0 col-12 col-lg-3    justify-content-between justify-content-lg-center">
            <label className=" mt-1"> نام خانوادگی : </label>
            <input
              value={onSearchTerm?.fname}
              name="fname"
              onChange={handleSearchUserInput}
              className="px-3 col-5"
              type="text"
            />
          </div>
          <div className="d-flex gap-2 mt-2 mt-lg-0 col-12 col-lg-3    justify-content-between justify-content-lg-center ">
            <label className=" mt-1">کد ملی :</label>

            <input
              value={onSearchTerm?.pid}
              name="pid"
              onChange={handleSearchUserInput}
              className="px-3 col-5"
              type="text"
            />
          </div>
          <div className="col-2 mt-2 mt-lg-0">
            <button
              onClick={() => onSetShowSearchResult(!onShowSearchResult)}
              type="button"
              className="btn btn-primary px-4"
            >
              جستجو
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default SearchBar;
