import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Styles from "../styles/homepage.module.css";
import hero from "../../assets/img/hero.png";

export default function Header() {
  return (
    <>
      <div>
        <Container className={Styles.container}>
        <div className={Styles.wrapper}> 
          <Row>
            <Col className={Styles.left_content}>
              <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
              <h4>Selamat datang di Binar Car Rental. Kami Menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h4>
            </Col>
            <Col className={Styles.rigth_content}>
              <img src={hero} alt="heroImage" />
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
