import React from 'react'
export default function  carDetail (props)  {
  return (

    <div className="main">
      <div className="container">
        <div className="row">
       
            <div className="col-md-4">
              <div className="card-car">
                <div className="image-car">
                  <img
                    src={props.data.image}
                    width={250}
                    height={250}
                    alt={props.data.name}
                  />
                </div>
                <div className="card-body">
                  <p className="card-title">{props.data.name}</p>
                  <p className="card-title">Rp {props.data.price} / Hari</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium voluptas dicta, eligendi cum tempora.
                  </p>
                 

                </div>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
  
}


