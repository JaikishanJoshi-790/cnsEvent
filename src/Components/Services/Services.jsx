import React from 'react';
import './Services.css'
import tent from "../../Assets/tent_1.jpeg"
import dnsFlr from "../../Assets/dance floor.jpeg"
import catering from '../../Assets/catering_1.webp'
import photography from '../../Assets/photography.jpeg'
import flrDeco from "../../Assets/flower_decoration.jpg"
import stgDeco from "../../Assets/stage_decoration.jpg"

const Services = () => {
  return (
    <div className='services'>
     <div className="ourServices-text">
        <h1>Services <hr /></h1>
        <p>हम कैटरिंग की सभी प्रकार की सुविधा उपलब्ध कराते हैं इसके साथ ही हमारे पास वेटर, हलवाई, टेंट डेकोरेशन सर्विस, साउंड और डांस फ्लोर, फ्लावर डेकोरेशन, स्टेज डेकोरेशन, हल्दी स्पेशल डेकोरेशन, फोटोग्राफी, डीजे, बारात बस आदि की भी सुविधा उपलब्ध है|
            </p>
     </div>
     <div className="ourServices">
        <div className="service">
            <div className="service-image">
                <img src={catering} alt="" />
            </div>
            <div className="service-title">Catering Service</div>
        </div>
        <div className="service">
            <div className="service-image">
                <img src={tent} alt="" />
            </div>
            <div className="service-title">Tent Service</div>
        </div>
        <div className="service">
            <div className="service-image">
                <img src={dnsFlr} alt="" />
            </div>
            <div className="service-title">Sound and Floor</div>
        </div>
        <div className="service">
            <div className="service-image">
                <img src={flrDeco} alt="" />
            </div>
            <div className="service-title">Flower Decoration</div>
        </div>
        <div className="service">
            <div className="service-image">
                <img src={stgDeco} alt="" />
            </div>
            <div className="service-title">Stage Decoration</div>
        </div>
        <div className="service">
            <div className="service-image">
                <img src={photography} alt="" />
            </div>
            <div className="service-title">Photography</div>
        </div>
        
     </div>
    </div>
  );
}

export default Services;
