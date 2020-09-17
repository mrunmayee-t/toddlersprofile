import React from "react";
import Header from "./header/header";
import "./home.css";
import Footer from "../home/footer/footer";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="row">
          <div class="col s12 header-title-div">
            <h1 class="col s12  header-title-text">I 'm Aryan </h1>{" "}
            <h3 class="col s12 header-sub-title-text">
              {" "}
              A little bundle of joy!{" "}
            </h3>{" "}
          </div>{" "}
          <div class="col s12 header-image-div">
            <img
              class="header-image"
              src="../images/7ee496be-e5de-40d7-97ba-98b2220512bd.JPG"
            />
          </div>{" "}
        </div>{" "}
        <div class="row">
          <div class="col s12 middle-div">
            <h1 class="col s12 middle-text-title"> Hi. </h1>{" "}
            <p class="col s6 middle-text-para">
              {" "}
              I am tiniest in my whole family.I came into this world on 18 th
              August 2020. I was supposed to come a little later in September
              but, I was so eager to see my lovely parents. My mom and dad were
              so happy to see me.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div class="row border-bottom-div"></div>
        <div class="row">
          <div class="col s12 middle-div">
            <h1 class="col s12 middle-text-title" style={{ marginTop: "4%" }}>
              {" "}
              What can i do.{" "}
            </h1>{" "}
            <div class="col s12">
              <div
                class="col s6"
                style={{ textAlign: "center", marginTop: "3%" }}
              >
                <img
                  class="header-img"
                  style={{ marginLeft: "25%" }}
                  src="../images/IMG-0770.jpg"
                />
              </div>
              <div class="col s6" style={{ textAlign: "center" }}>
                <span class="col s12 middle-text-span">
                  Sleep when you want.
                </span>
                <div class="col s12">
                  <p class="middle-text-para-inner">
                    I like to keep it simple. My goal is to focus on my sleep,
                    my lunch and dinner and crying when I need my mom dad near
                    me.
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12" style={{ marginTop: "6%" }}>
              <div class="col s6" style={{ textAlign: "center" }}>
                <span class="col s12 middle-text-span-1">
                  Smile when you need.
                </span>
                <div class="col s12" style={{ marginLeft: "34%" }}>
                  <p class="middle-text-para-inner">
                    I am a happy baby, so I know how to bring smile on your
                    faces. I love spreading happiness.
                  </p>
                </div>
              </div>
              <div class="col s6" style={{ textAlign: "center" }}>
                <img
                  class="header-img"
                  style={{ marginLeft: "-45%" }}
                  src="../images/a1.jpg"
                />
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <div class="row border-bottom-div"></div>
        <div class="row">
          <div class="col s12 middle-div">
            <h1 class="col s12 middle-text-title" style={{ marginTop: "5%" }}>
              {" "}
              I can help.{" "}
            </h1>{" "}
            <span class="col s12 middle-text-span-title">
              I'm currently available for freelance work.
            </span>
            <p class="col s6 middle-text-para" style={{ marginTop: "1%" }}>
              {" "}
              If you have a problem that you want to get rid of, think you need
              my help, with my smile and laugh, then get in touch.{" "}
            </p>{" "}
          </div>
          <div class="col s12" style={{ textAlign: "center" }}>
            <button class="btn-msg-me">
              <img class="btn-logo" src="../images/logo/logo1.png" />
              Message me
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
