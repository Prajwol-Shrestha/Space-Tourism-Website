import React, { useState, useEffect } from 'react'
import Crew from './Crew'
import data from '../../data'
import {BsCircle} from 'react-icons/bs'

export default function Crews() {
  const [active, setActive] = useState(0)

  const crews = data.crew

  const crew = crews[active]

  function changeActive(nextActive) {
    setActive(nextActive);
  }

  // let count = 0
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // active state is always zero
  //     if( count !== crews.length - 2){
  //       setActive( prevActive => prevActive + 1 )
  //       count++
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
  };


  const navMenus = crews.map((crew) => (
    <span
      style={active === crews.indexOf(crew) ? activeStyle : null}
      key={crew.name}
      onClick={() => {
        // count = crews.indexOf(crew)
        setActive( crews.indexOf(crew) )
      }}
    >
      <BsCircle fill='white'/>
    </span>
  ));


  const style = {
    position: 'absolute',
    top: '20vh'
  }
  return (
      <>
        <section className="crew-container">
          <h2 className="sub-heading container" style={style}>
            <span className="num"> 02 </span> Pick Your Crew 
          </h2>
          <article className="crew-info-container">
            <Crew data={crew} navMenus={navMenus}/>
          </article>
        </section>
    
      </> 
    )
}
