import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const UserLocation = ({ userLocation, setShowMap }) => {
  const handleHideMap = () => {
    setShowMap(false);
  };

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/727/727606.png",
    iconSize: [40, 40],
  });

  return (
    <>
      {
        <section className="container position-relative map-section w-50 ">
          <div
            className=" d-flex icon justify-content-centericon position-absolute  cursor-pointer"
            onClick={() => {
              handleHideMap();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-x-square bg-danger"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <MapContainer center={userLocation} zoom={17}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={userLocation} icon={customIcon}></Marker>
          </MapContainer>
        </section>
      }
    </>
  );
};

export default UserLocation;
