import React from "react";
import "./header.css";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="container">
          <div class="row">
            <nav class="header-nav">
              <div class="nav-wrapper">
                <img
                  alt="logo"
                  src="../images/logo/logo.png"
                  class="main-logo"
                />
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li>
                    <a class="col s4 logo-div">
                      <span class="tooltiptext">about me</span>
                      <img class="menu-logo" src="../images/logo/icon1.png" />
                    </a>
                  </li>
                  <li>
                    <a class="col s4 logo-div">
                      <span class="tooltiptext">work</span>
                      <img class="menu-logo" src="../images/logo/icon6.png" />
                    </a>
                  </li>
                  <li>
                    <a class="col s4 logo-div">
                      {" "}
                      <span class="tooltiptext">Notes</span>
                      <img class="menu-logo" src="../images/logo/icon5.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
