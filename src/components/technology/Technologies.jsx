import React, { useState, useEffect } from 'react'
import data from '../../data'
import Technology from './Technology'

export default function Technologies() {
  const [active, setActive] = useState(0)

  const technologies = data.technology

  const technology = technologies[active]

  function changeActive(nextActive) {
    setActive(nextActive);
  }

//   let count = 0
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // active state is always zero
//       if( count !== technologies.length - 1){
//         count++
//         setActive( prevActive => prevActive + 1 )
//       } else{
//         count = 0
//         setActive(0)
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

  const activeStyle = {
    color: "black",
    opacity: "1",
    backgroundColor: 'white'
  };


  const navMenus = technologies.map((technology) => (
    <span
      style={active === technologies.indexOf(technology) ? activeStyle : null}
      key={technology.name}
      onClick={() => {
        setActive( technologies.indexOf(technology) )
      }}
      className='technology-nav-items'
    >
        { technologies.indexOf(technology) + 1 }
    </span>
  ));
  return (
    <section className="technology-container">
      <h2 className="sub-heading">
        <span className="num"> 03 </span> Pick Your Technology 
      </h2>
      <article className="technology-info-container">
        <Technology data={technology} navMenus={navMenus}/>
      </article>
    </section>
  )
}
