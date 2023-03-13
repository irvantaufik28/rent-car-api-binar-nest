import "../styles/homepage.css";
import "../styles/findcar.css";
import { useState } from "react";

export default function FromOption(props) {

  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    car_status: ''

  })

  return (
    <>
    
      <div className="container seacrh-car">
        <form className="table-option" onSubmit={(e) => {
          e.preventDefault()
          props.onSubmit(form)
        }}>
          <div className="grid-input">
            <label htmlFor="inputEmail4" className="form-label">
              Nama Mobil
            </label>
            <input
              type="nama mobil"
              className="form-control"
              id="inputNamaMobil"
              placeholder="ketik nama/type mobil"
              onChange={e => setForm({
                ...form,
                ...{
                  name: e.target.value
                }
              })}
            />
          </div>
          <div className="grid-input">
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
          <div className="grid-input">
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
          <div className="grid-input">
            <label htmlFor="inputState" className="form-label">
              Status
            </label>
            <select id="inputState" className="form-select">
              <option value="">Pilih Status Mobil</option>
              <option value="free">free</option>
              <option value="disewa">disewa</option>
            </select>
          </div>

          <div className="grid-input">
            <button type="submit" className="btn btn-primary">
              cari mobil
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

FromOption.defaultProps = {    
  onSubmit: () => {}
}
