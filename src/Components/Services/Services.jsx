import React from "react";
import "./Services.css";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Link} from "react-router-dom";
import tent from "../../Assets/images/tent_1.jpeg";
import dnsFlr from "../../Assets/images/dance floor.jpeg";
import catering from "../../Assets/images/catering_1.webp";
import ld from "../../Assets/images/lightDecoration.jpg";
import flrDeco from "../../Assets/images/flower_decoration.jpg";
import stgDeco from "../../Assets/images/stage_decoration.jpg";

const Services = () => {
  return (
    <div className="services">
      <div className="ourServices-text">
        <h1>
          Services <hr />
        </h1>
        <p>
          हम कैटरिंग की सभी प्रकार की सुविधा उपलब्ध कराते हैं इसके साथ ही हमारे
          पास वेटर, हलवाई, टेंट डेकोरेशन सर्विस,लाइट डेकोरेशन, साउंड और डांस
          फ्लोर, फ्लावर डेकोरेशन, स्टेज डेकोरेशन, हल्दी स्पेशल डेकोरेशन,
          फोटोग्राफी, डीजे, बारात बस आदि की भी सुविधा उपलब्ध है|
        </p>
      </div>
      <div className="ourServices">
        <div className="service">
          <div className="service-image">
            <img src={catering} alt="" />
          </div>
          <div className="service-title">
            <Link to="/catering">
              <p>Catering Service</p>{" "}
              <span>
                <FaSquareArrowUpRight />
              </span>
            </Link>{" "}
          </div>
        </div>
        <div className="service">
          <div className="service-image">
            <img src={tent} alt="" />
          </div>
          <div className="service-title"><Link to="/tentdeco">
          <p>Tent Decoration{" "}</p>
              <span>
                <FaSquareArrowUpRight />
              </span>
            </Link>{" "}</div>
        </div>
        <div className="service">
          <div className="service-image">
            <img src={dnsFlr} alt="" />
          </div>
          <div className="service-title">
          <Link to="/sandf">
          <p>Sound & Floor{" "}</p>
              <span>
                <FaSquareArrowUpRight />
              </span>
            </Link>{" "}
          </div>
        </div>
        <div className="service">
          <div className="service-image">
            <img src={flrDeco} alt="" />
          </div>
          <div className="service-title">
          <Link to="/flowerdeco">
          <p>Flower Decoration{" "}</p>
              <span>
                <FaSquareArrowUpRight />
              </span>
            </Link>{" "}
          </div>
        </div>
        <div className="service">
          <div className="service-image">
            <img src={stgDeco} alt="" />
          </div>
          <div className="service-title">
          <Link to="/stagedeco">
          <p>Stage Decoration{" "}</p>
              <span>
                <FaSquareArrowUpRight />
              </span>
            </Link>{" "}
          </div>
        </div>
        <div className="service">
          <div className="service-image">
            <img src={ld} alt="" />
          </div>
          <div className="service-title">
          <Link to="/lightdeco">
          <p>Light Decoration{" "}</p>
              <span>
                <FaSquareArrowUpRight />
              </span>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
