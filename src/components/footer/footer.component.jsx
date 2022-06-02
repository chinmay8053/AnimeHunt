import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./footer.styles.scss";
function Footer() {
  return (
    <div className="footerCom">
      <h1>Anime Hunt</h1>
      <div className="logo">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}

export default Footer;
