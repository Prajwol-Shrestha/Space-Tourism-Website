import React from 'react'
import imgCrew from '../../assets/crew/image-victor-glover.png'
import ColoredLine from '../ColoredLine';



export default function Crew( { data, navMenus } ) {
  const { name, images, role, bio } = data;

  //   Image Path left to fix
  
    return (
      <>
        <div className="crew-img">
          <img src={imgCrew} />
          <ColoredLine color="#383B4B" margin='0'/>
        </div>
        <div className="crew-info">
          <div className="crew-nav">{ navMenus }</div>
          <div className="container">
          <h3 className="heading role"> {role} </h3>
            <h3 className="heading name"> {name} </h3>
            <p className="para"> {bio} </p>

          </div>
        </div>
      </>
    );
}



