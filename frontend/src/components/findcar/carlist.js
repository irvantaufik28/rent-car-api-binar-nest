import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/homepage.css";
import "../styles/findcar.css";

export default function FromInput() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const result = await axios.get(
      `https://bootcamp-rent-cars.herokuapp.com/customer/car`
    );
   const response = result.data.slice(0, 3);
    setCars(response);
  };

  const seaechCar = (e) => {
    e.prevenDefault();
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="from-input">
            <form className="row g-3">
              <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">
                  Nama Mobil
                </label>
                <input
                  type="nama mobil"
                  className="form-control"
                  id="inputNamaMobil"
                  placeholder="ketik nama/type mobil"
                />
              </div>
              <div className="col-md-2">
              <label htmlFor="inputState" className="form-label">
                Category
              </label>
              <select id="inputState" className="form-select">
                <option value="">Masukan Kapasitas Mobil</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputState" className="form-label">
                Harga
              </label>
              <select id="inputState" className="form-select">
                <option value="">Masukan Harga Per Hari</option>
                <option value="300000">300000</option>
                <option value="500000">500000</option>
                <option value="600000">600000</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputState" className="form-label">
                Status
              </label>
              <select id="inputState" className="form-select">
                <option value="">Pilih Status Mobil</option>
                <option value="free">free</option>
                <option value="disewa">disewa</option>
              </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputState" className="form-label">
                  Status
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Disewa</option>
                  <option>free</option>
                </select>
              </div>

              <div className="col-md-2">
                <button type="submit" className="btn btn-primary">
                  cari mobil
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="row">
          {cars.map((car)=> (
            <div className="col-md-4">
              <div className="card-car">
              <img
                    src={car.image}
                    width={250}
                    height={250}
                    alt={car.name}
                  />
                <div className="card-body">
                  <p className="card-title">{car.name}</p>
                  <p className="card-title">Rp {car.price} / Hari</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium voluptas dicta, eligendi cum tempora.
                  </p>
                </div>
              </div>
            </div>
            ))}
            </div>
        </div>
      </div>
    </>
  );
}
