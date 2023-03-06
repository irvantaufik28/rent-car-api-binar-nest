import React from "react";
import hero from  "../../assets/img/hero.png"
import '../styles/header.css'

export default function Header() {
  return (
    <>
      <div className="main-banner position-relative">
        <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center mt-5">
            <div className="hero_description">
              <h1 className="title">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="decription">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <button className="button_banner">Mulai Sewa Mobil</button>
            </div>
          </div>
          <div className="image_hero">
              <img className="img-fluid " src={hero} alt="hero" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
