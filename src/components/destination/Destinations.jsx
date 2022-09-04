import React, { useState, useEffect } from "react";
import data from "../../data";
import Destination from "./Destination";


export default function Destinations() {
  const [active, setActive] = useState(0);

  const destinations = data.destinations

  // const destination = destinations.filter((des) => active === des.name);

  const destination = destinations[active]

  // let count = 0
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // active state is always zero
  //     if( count !== destinations.length - 1){
  //       count++
  //       setActive( prevActive => prevActive + 1 )
  //     } else{
  //       count = 0
  //       setActive(0)
  //     }
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const activeStyle = {
    color: "white",
    opacity: "1",
    borderBottom: '2px solid white'
  };

  function changeActive(nextActive) {
    setActive(nextActive);
  }


  const navMenus = destinations.map((destination) => (
    <span
      style={active === destinations.indexOf(destination) ? activeStyle : null}
      key={destination.name}
      onClick={() => {
        // count = destinations.indexOf(destination)
        setActive( destinations.indexOf(destination) )
      }}
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
