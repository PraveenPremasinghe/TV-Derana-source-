// Import Files
import React from "react";
import Contactusbanner from "../Components/Header/contactusbg.png";
import Contactusimage from "../Components/Header/contactusimage.png";
import "../Style/Contactus.css";
import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer/Footer.jsx";
import Header3 from "../Components/Header-03/Header-3.jsx";

function Contactus() {
  return (
    <div>
      {/* import Header Component to Contact us Page */}
      <Header3 />

      <div className="Mainbannerdiv">
        <img src={Contactusbanner} width="100%" />

        <div className="Mainbannerdivcard">
          <div className="mainbannertitle">
            Discover the <br />
            best news in <br />
            world
          </div>

          <div className="mainbannertitlesub">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's standard
          </div>
        </div>
      </div>

      <div className="MaincategoryContainer2">
        <div className="main">
          <div className="maincategory_title">Premium Entertainment Channel</div>
        </div>
        <hr className="hrclass" />

        <div className="row Channel">
          <div className="col-sm-6 Channelimg">
            <img src={Contactusimage} width="100%" />
          </div>
          <div className="col-sm-6 ChannelDetails">
            <h3>Derana TV</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem IpsumLorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </div>
        </div>

        <div className="main" style={{ paddingTop: "60px" }}>
          <div className="maincategory_title">Contact Us </div>
        </div>
        <hr className="hrclass" />
      </div>

      <div className="contactusmain">
        <div className="contactus-form">
          <div className="contactus-header">
            <div className="flex-container">
              <div className="flex-items1">
                <div className="flex-container1">
                  <div className="flex-items1 icon">
                    <Icon icon="ci:location" color="#f8f8f8" height="40" />
                  </div>
                  <div className="flex-items1">
                    320 ,<br />
                    T.B Jayamawatha,
                    <br />
                    Colombo 10.
                  </div>
                </div>
              </div>
              <div className="flex-items1">
                <div className="flex-container1">
                  <div className="flex-items1 icon">
                    <Icon
                      icon="carbon:phone-voice-filled"
                      color="#f8f8f8"
                      height="40"
                    />
                  </div>
                  <div className="flex-items1">
                    (+94) 155-300800 <br /> (+94) 155-300800
                  </div>
                </div>
              </div>
              <div className="flex-items1">
                <div className="flex-container1">
                  <div className="flex-items1 icon">
                    <Icon
                      icon="ic:baseline-alternate-email"
                      color="#f8f8f8"
                      height="40"
                    />
                  </div>
                  <div className="flex-items1">Pubudu@derana.lk</div>
                </div>
              </div>
            </div>
          </div>

          <div className="getin">get in touch</div>

          <div className="row">
            <div className="col-sm-6">
              <div className="feedbackform">
                <div className="material-textfield">
                  <input placeholder="Enter" type="text" />
                  <label>First name</label>
                </div>

                <div className="material-textfield">
                  <input placeholder="Enter" type="email" />
                  <label>Email</label>
                </div>

                <div className="material-textfield">
                  <input
                    placeholder="Enter"
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                  <label>Phone number</label>
                </div>

                <div className="material-textfield">
                  <textarea
                    placeholder="Message"
                    type="text"
                    rows="8"
                    cols="50"
                  />
                </div>

                <div className="messagebutton">
                  <button className="messagebtn">Send Message</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="maplocation">
                <div className="responsive-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7240674488053!2d79.85788561455897!3d6.9235516949975295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25913cac2f959%3A0x718664ff29f08a9f!2sTV%20Derana!5e0!3m2!1sen!2slk!4v1657813909206!5m2!1sen!2slk"
                    width="100%"
                    height="auto"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* import Footer Component to Contact us Page */}
      <Footer />
    </div>
  );
}

export default Contactus;
