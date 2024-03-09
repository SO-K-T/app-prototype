import React, { useEffect, useRef, useState } from "react";

const Table = ({
  setSelectedUser,
  usersData,
  setUserData,
  onSearchTerm,
  onShowSearchResult,
  onSetShowMap,
  onShowMap,
  onSetToggleChart,
  onToggleChart, 
}) => {
  const [editId, setEditId] = useState(false);
  const outsideClick = useRef(false);

  const filteredData = onShowSearchResult
    ? usersData?.filter(
        (item) =>
          item.name.toLowerCase().includes(onSearchTerm.name?.toLowerCase()) &&
          item.fname
            .toLowerCase()
            .includes(onSearchTerm.fname?.toLowerCase()) &&
          item.pid.includes(onSearchTerm.pid)
      )
    : usersData;
  const [errorNotification, setErrorNotification] = useState();

  useEffect(() => {
    if (!editId) return;

    let selectedItem = document.querySelectorAll(`[id='${editId}']`);
    setErrorNotification(
      <div
        className="alert alert-warning alert-dismissible fade show notification"
        role="alert"
      >
        شمار در حالت ویرایش هستید. برای خروج از این حالت، خارج از جدول کلیک
        کنید!
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
    selectedItem[0].focus();
  }, [editId]);

  const handleDeleteUser = (targetId) => {
    let newUserData = usersData.filter((user) => user.id !== targetId);
    setUserData(newUserData);
  };

  const handleUserLocation = (targetId) => {
    let selectedUser = usersData?.filter((user) => user.id === targetId);
    setSelectedUser(selectedUser);
    onSetShowMap(!onShowMap);
  };

  const handleBarChart = (targetId) => {
    let selectedUser = usersData?.filter((user) => user.id === targetId);
    setSelectedUser(selectedUser);
    onSetToggleChart(!onToggleChart);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        outsideClick.current &&
        !outsideClick.current.contains(event.target)
      ) {
        setErrorNotification("");
        setEditId(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleEdit = (id, updatedData) => {
    if (!editId || editId !== id) return;
    const updatedList = usersData.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );

    setUserData(updatedList);
  };

  return (
    <section className="container ">
      <table ref={outsideClick} className="table text-center text-align-center">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">نام </th>
            <th scope="col">نام خانوادگی </th>
            <th scope="col">کد ملی</th>
            <th scope="col">عملیات ها</th>
          </tr>
        </thead>
        <tbody>
          {filteredData &&
            filteredData?.map((user, indx) => (
              <tr
                key={indx}
                className={`${editId === user.id ? "editing" : ""} sad`}
              >
                <th scope="row">{user.id}</th>
                <td
                  id={user.id}
                  contentEditable={editId === user.id}
                  suppressContentEditableWarning={true}
                  onBlur={(e) =>
                    handleEdit(user.id, { name: e.target.innerText })
                  }
                >
                  {user.name}
                </td>
                <td
                  id={user.id}
                  contentEditable={editId === user.id}
                  suppressContentEditableWarning={true}
                  onBlur={(e) =>
                    handleEdit(user.id, { name: e.target.innerText })
                  }
                >
                  {user.fname}
                </td>
                <td
                  id={user.id}
                  contentEditable={editId === user.id}
                  suppressContentEditableWarning={true}
                  onBlur={(e) =>
                    handleEdit(user.id, { name: e.target.innerText })
                  }
                >
                  {user.pid}
                </td>
                {/*  */}
                <td>
                  <ul className="row table-icons list-unstyled mt-3  text-center text-align-center ">
                    <li className="col-2 d-flex justify-content-center align-items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    </li>
                    <li
                      className="col-2 d-flex justify-content-center align-items-center "
                      onClick={() => setEditId(user.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-pencil-square d-flex justify-content-center align-items-center"
                        viewBox="0 0 20 20"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </li>

                    <li
                      className="col-2 d-flex justify-content-center align-items-center "
                      onClick={() => {
                        handleDeleteUser(user.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="red"
                        className="bi bi-x-circle"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </li>
                    <li className="col-2 "></li>
                    <li
                      className="col-2 d-flex justify-content-center align-items-center "
                      onClick={() => {
                        handleUserLocation(user.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="#fcc404"
                        className="bi bi-geo-alt-fill"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>
                    </li>
                    <li
                      className="col-2 d-flex justify-content-center align-items-center"
                      onClick={() => {
                        handleBarChart(user.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="#094fe6"
                        className="bi bi-bar-chart-line-fill"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z" />
                      </svg>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {errorNotification}
    </section>
  );
};

export default Table;
