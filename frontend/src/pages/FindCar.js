import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CarList from '../components/findcar/carlist'
import FromOption from '../components/findcar/fromOption'
import Banner from '../components/homepage/Banner'

export default function FindCar() {

  const [dataCar, setDataCar] = useState({
    cars: []
  });


  useEffect(() => {
    getCars();
  }, []);

  const getCars = async (params = {}) => {
    const response = await axios.get(
      `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`, {
      params
    }
    );

    setDataCar(response.data);
  };

  const onFilter = (payload) => {
      getCars(payload)
  }

  return (
    <>
      <Banner />
      <FromOption onSubmit={onFilter} />
      <CarList data={dataCar} />
    </>
  )
}