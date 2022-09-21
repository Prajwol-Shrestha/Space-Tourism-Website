import React from 'react'


export default function Technology( { data, navMenus } ) {
  const { name, images, description } = data;

    return (
      <>
        <div className="technology-nav">{ navMenus }</div>
        <div className="technology-img">
          <img src={ images.landscape } />
        </div>
        <div className="technology-info">
          <div className="container">
          <p className="sub-heading"> the terminology </p>
            <h3 className="heading"> {name} </h3>
            <p className="para"> {description} </p>

          </div>
        </div>
      </>
    );
}



