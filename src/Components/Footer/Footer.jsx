import React from 'react';
import "./footer.css"
import fb_icon from "../../Assets/icon/facebook_icon.png"
import ig_icon from "../../Assets/icon/instagram_icon.png"
import wa_icon from "../../Assets/icon/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <h1>cns events</h1>
      <h1>follow us:</h1>
      <div className="social">
        <a target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=100079093736825&mibextid=ZbWKwL"><img src={fb_icon} alt="facebook" /></a>
        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/eventscns/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><img src={ig_icon} alt="instagram" /></a>
        <a target='_blank' rel="noreferrer" href="https://wa.me/919001593567"><img src={wa_icon} alt="whatsapp" /></a>
      </div>
    </div>
  );
}

export default Footer;
