import React from 'react'
import ColoredLine from '../ColoredLine';



export default function Crew( { data, navMenus } ) {
  const { name, images, role, bio } = data;

  
    return (
      <>
        <div className="crew-img">
          <img src={images.png} style={{ width: name === 'Mark Shuttleworth' && '45%'}}/>
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



