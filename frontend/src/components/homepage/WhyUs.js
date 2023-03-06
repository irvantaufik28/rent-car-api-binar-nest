import React from 'react';
import '../styles/whyus.css'
import icon_24hrs from '../../assets/icon/icon_24hrs.svg'
import icon_complete from '../../assets/icon/icon_complete.svg'
import icon_price from '../../assets/icon/icon_price.svg'
import icon_professional from '../../assets/icon/icon_professional.svg'

export default function WhyUs() {
    return (
        <>
            <div className="container">
                <div className='title-why-us'>
                    <h1>Why Us?</h1>
                    <p>Mengapa harus pilih Binar Car Rental</p>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <img src={icon_complete} alt="icon_complete" />
                        <h3>Mobil Lengkap</h3>
                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>


                    <div className="col-md-3">
                        <img src={icon_price} alt="icon_price" />
                        <h3>Harga Murah</h3>
                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                    <div className="col-md-3">
                        <img src={icon_24hrs} alt="icon_24hrs" />
                        <h3>Layanan 24 jam</h3>
                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>

                    <div className="col-md-3">
                        <img src={icon_professional} alt="icon_professional" />
                        <h3>Sopir Profesional</h3>
                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>


                </div>
            </div>
        </>
    );
}
