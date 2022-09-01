import React from "react";
import imgMoon from '../../assets/destination/image-moon.png'


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: '2',
            opacity: '0.25',
            margin: '1em 0',
        }}
    />
  );
  

export default function Destination({ data, navMenus }) {
  const { name, images, description, distance, travel } = data[0];

//   Image Path left to fix

  return (
    <>
      <div className="destination-img">
        <img src={imgMoon} />
      </div>
      <div className="destination-info">
        <div className="destination-nav">{ navMenus }</div>
        <div className="container">
          <h3 className="heading"> {name} </h3>
          <p className="para"> {description} </p>
          <ColoredLine color="#383B4B" />
          <div className="destination-footer-info">
            <div>
              <h4 className="sub-title"> avg distance </h4>
              <h2 className="title"> {distance} </h2>
            </div>
            <div>
              <h4 className="sub-title"> est. travel time</h4>
              <h2 className="title"> {travel} </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
