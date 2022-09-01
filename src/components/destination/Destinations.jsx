import React, { useState } from "react";
import data from "../../data";
import Destination from "./Destination";

export default function Destinations() {
  const [active, setActive] = useState("Moon");

  const destination = data.destinations.filter((des) => active === des.name);


  const activeStyle = {
    color: "white",
    opacity: "1",
  };

  function changeActive(nextActive) {
    setActive(nextActive);
  }

  const navMenus = data.destinations.map((destination) => (
    <span
      style={active === destination.name ? activeStyle : null}
      key={destination.name}
      onClick={() => setActive(destination.name)}
    >
     
      {destination.name}
    </span>
  ));

  return (
    <section className="destination-container">
      <h2 className="sub-heading">
        <span className="num"> 01 </span> Pick Your Destination{" "}
      </h2>
      <article className="destination-info-container">
        <Destination data={destination} navMenus={navMenus} />
      </article>
    </section>
  );
}
