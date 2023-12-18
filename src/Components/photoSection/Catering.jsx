import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './catering.css';
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
const Catering = ({ data,title }) => {
  return (
    <div className="imageGallery">
      <div className="service-header">
        <Link to="/" className="service-header-home">
          <h5><IoHome />HOME</h5>
          </Link>
        <h2>{title}</h2>
        <h5>
          Services
        {/* dropdown options */}
          
        </h5>
        </div>
      
      <ImageGallery 
      style={{width:'90%',height:'80%',margin:'auto'}}
      items={data} infinite={true}/>
    </div>
  );
};

export default Catering;
