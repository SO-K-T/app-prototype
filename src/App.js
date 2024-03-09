import { useState } from "react";
import AddButton from "./Components/AddButton";
import SearchBar from "./Components/SearchBar";
import Table from "./Components/Table";
import AddSection from "./Components/AddSection";
import Map from "./Components/UserLocation";
import UserChart from "./Components/UserChart";

function App() {
  const [showAddSection, setShowAddSection] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [toggleChart, setToggleChart] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    name: "",
    fname: "",
    pid: "",
    location: [],
    charData: {},
  });

  const [searchTerm, SetSearchTerm] = useState({
    name: "",
    fname: "",
    pid: "",
  });

  const [usersData, setUserData] = useState([
    {
      id: "۱",
      name: "علی",
      fname: "مجرد",
      pid: "۳۴۹۰۲۲۳۳۳۲",
      location: [35.7293, 51.3606],
      charData: { data: [1, 2, 3], label: ["۷۹/۱", "۸۰/۱", "۸۱/۱"] },
    },
    {
      id: "۲",
      name: "سمیه",
      fname: "سیرجانی",
      pid: "۳۴۹۰۱۱۱۳۴۲ ",
      location: [35.73, 51.357],
      charData: { data: [1, 1, 1], label: ["۸۲/۱", "۸۳/۱", "۸۴/۱"] },
    },
    {
      id: "۳",
      name: "احمد",
      fname: "جلالی",
      pid: "۳۴۹۰۱۱۲۱۳۴",
      location: [35.73, 51.364],
      charData: { data: [3, 2, 1], label: ["۸۵/۱", "۸۶/۱", "۸۷/۱"] },
    },
    {
      id: "۴",
      name: "علی",
      fname: "بوشهری",
      pid: "۳۴۹۰۱۴۴۴۳۰",
      location: [35.7293, 51.3606],
      charData: { data: [2, 2, 2], label: ["۸۸/۱", "۸۹/۱", "۹۰/۱"] },
    },
  ]);



  return (
    <main className="pb-5">
      <SearchBar
        onSearchTerm={searchTerm}
        onSetSearchTerm={SetSearchTerm}
        onShowSearchResult={showSearchResult}
        onSetShowSearchResult={setShowSearchResult}
      />
      <AddButton
        showAddSection={showAddSection}
        setShowAddSection={setShowAddSection}
      />
      <Table
        setSelectedUser={setSelectedUser}
        usersData={usersData}
        setUserData={setUserData}
        onSearchTerm={searchTerm}
        onShowSearchResult={showSearchResult}
        onSetShowMap={setShowMap}
        onShowMap={showMap}
        onToggleChart={toggleChart}
        onSetToggleChart={setToggleChart}
      />
      {showAddSection && (
        <AddSection
          showAddSection={showAddSection}
          setShowAddSection={setShowAddSection}
          usersData={usersData}
          setUserData={setUserData}
        />
      )}

      {showMap && (
        <Map
          userLocation={selectedUser[0].location}
          setShowMap={setShowMap}
          showMap={showMap}
        />
      )}

      {toggleChart && (
        <UserChart usersData={selectedUser} onSetToggleChart={setToggleChart} />
      )}
    </main>
  );
}

export default App;
