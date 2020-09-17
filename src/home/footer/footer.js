import React from "react";
import "./footer.css";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="row">
          <div class="col s4">
            <img class="btn-logo-footer" src="../images/logo/icon4.png" />
            <img class="btn-logo-footer-star" src="../images/logo/icon2.png" />
            <img
              class="btn-logo-footer-star"
              style={{
                transform: "translate(-38px, 2px)rotate(25deg)",
              }}
              src="../images/logo/icon2.png"
            />
          </div>
          <div class="col s12 footer-div">
            <span class="footer-span">
              <span>&#169;</span> 2020,Aryan Corp., All rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
