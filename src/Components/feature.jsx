import React from 'react';
import './feature.css';
import img1 from './Images/s21.webp';
import img2 from './Images/SA70.jpg';
import img3 from './Images/Oppo.png.webp';
import img4 from './Images/Redmi.jpg';
import img5 from './Images/i8.jpg';
import img6 from './Images/i12pro.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Features() {
    return (
        <div className="alpha">

    <section className="gadget-menu">
        <div className="container">
            <h1 className="text-center">Mobile Phones</h1>
                <div className="gadget-menu-box">
                    <div className="gadget-menu-img">
                        <img src={img1} alt="Mobile" className="img-responsive img-curve"/>
                    </div>
                    <div className="gadget-menu-desc">
                        <h4>Samsung Galaxy S21 plus</h4>
                        <p className="gadget-price">₹ 69,900.00</p>
                        <p className="gadget-detail">
                        8 GB RAM|256 GB ROM , 17.06 cm(6.7 inch)full HD+ Display. 64MP+12MP+12MP|
                        10MP Front Camera. 4800 mAh Lithium-ion Battery. 2100 Processor.                        </p>
                        <br/>
                    <div className="text-right">
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                    </div>
                </div>

                <div className="gadget-menu-box">
                    <div className="gadget-menu-img">
                        <img src={img2} alt="Mobile" className="img-responsive img-curve"/>
                    </div>
                    
                    <div className="gadget-menu-desc">
                        <h4>Samsung Galaxy A70 </h4>
                        <p className="gadget-price">₹ 23,990.00</p>
                        <p className="gadget-detail">
                        6 GB RAM|128 GB ROM , 17.02 cm(6.7 inch)full HD+ Display. 32MP+5MP+8MP|
                        32MP Front Camera. 4500 mAh Lithium-ion Battery. Qualcomm Snapdragon 675 Processor.                        </p>
                        <br/>
                    <div className="text-right">
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                </div>
                </div>

                <div className="gadget-menu-box">
                    <div className="gadget-menu-img">
                        <img src={img3} alt="Mobile" className="img-responsive img-curve"/>
                    </div>

                    <div className="gadget-menu-desc">
                        <h4>Oppo F19 pro </h4>
                        <p className="gadget-price">₹ 25,990.00</p>
                        <p className="gadget-detail">
                        8 GB RAM|256 GB ROM , 16.33 cm(6.43 inch)full HD+ Display. 48MP+8MP+2MP+2MP|
                        16MP Front Camera. 4310 mAh Battery. Media Tek Heli0 P95 Processor.                        </p>
                        <br/>
                    <div className="text-right">
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                    </div>
                </div>

                <div className="gadget-menu-box">
                    <div className="gadget-menu-img">
                        <img src={img4} alt="Mobile" className="img-responsive img-curve"/>
                    </div>

                    <div className="gadget-menu-desc">
                        <h4>Redmi note 8 pro</h4>
                        <p className="gadget-price">₹16,990</p>
                        <p className="gadget-detail">
                        8 GB RAM|128 GB ROM , 16.59 cm(6.53 inch)full HD+ Display. 64MP+8MP+2MP+2MP|
                        20MP Front Camera. 4500 mAh Li-polymer Battery. Media Tek Helio G908 Processor.                        </p>
                        <br/>
                    <div className="text-right">
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                    </div>
                </div>

                <div className="gadget-menu-box">
                    <div className="gadget-menu-img">
                        <img src={img5} alt="Mobile" className="img-responsive img-curve"/>
                    </div>
                    <div className="gadget-menu-desc">
                        <h4>iPhone 8 plus</h4>
                        <p className="gadget-price">₹89,899</p>
                        <p className="gadget-detail">
                        256 GB ROM , 13.96 cm(5.5 inch)Retinal HD+ Display. 12MP+12MP|
                        7MP Front Camera. A11 Bionic Chip with 64-bit Architecture, Neural Engine,Embedded M11 Motion Coprocessor Processor.</p>
                        <br/>
                    <div className="text-right">
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                    </div>
                </div>

                <div className="gadget-menu-box">
                    <div className="gadget-menu-img">
                        <img src={img6} alt="Mobile" className="img-responsive img-curve"/>
                    </div>
                    <div className="gadget-menu-desc">
                        <h4>Apple iPhone 12 pro</h4>
                        <p className="gadget-price">₹99,970</p>
                        <p className="gadget-detail">
                        6.1-inch (15.5 cm diagonal) Super Retina XDR display
                        Ceramic Shield, tougher than any smartphone glass
                        A14 Bionic chip, the fastest chip ever in a smartphone.iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more </p>
                        <br/>
                    <div className="text-right">
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                    </div>
                </div>

            <div className="clearfix"></div>
    </div>
    </section>
    </div>
    )
}