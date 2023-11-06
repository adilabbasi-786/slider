import React, { useEffect, useState } from "react";
import pic1 from "./img/imge1.jpg";
import pic2 from "./img/pic1.jpg";
import pic3 from "./img/pic2.jpg";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./CrouselSlider.css";
import { URL } from "./Utils";
function CrouselSlider() {
  const [showInvestment, setShowInvestment] = useState(true);
  const [showRevenue, setShowRevenue] = useState(false);
  const [activeText, setActiveText] = useState("investment");
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(`${URL}/api/sliders?populate=*`);
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  const toggleInvestment = () => {
    setShowInvestment(true);
    setShowRevenue(false);
    setActiveText("investment");
  };

  const toggleRevenue = () => {
    setShowInvestment(false);
    setShowRevenue(true);
    setActiveText("revenue");
  };
  return (
    <div>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src={pic1}
          alt="..."
          style={{ height: "600px" }}
        >
          <div>
            <h2
              style={{
                fontFamily: "bold",
                fontSize: "55px",
                margin: "50px",
                color: "#f1c607bb",
              }}
            >
              Investment
            </h2>
          </div>
          <div className="subtitle">
            <h3
              onClick={toggleInvestment}
              style={{
                cursor: "pointer",
                color: activeText === "investment" ? "#f1c607bb" : "#ffffff",
              }}
            >
              How much does it cost
            </h3>{" "}
            |{" "}
            <h3
              onClick={toggleRevenue}
              style={{
                cursor: "pointer",
                color: activeText === "revenue" ? "#f1c607bb" : "#ffffff",
              }}
            >
              how much can i make
            </h3>
          </div>
          {showInvestment && (
            <div className="maininvest">
              {data.map((item) => (
                <div className="invest1">
                  <img
                    src={`${URL}${item?.attributes?.logo?.data?.attributes?.url}`}
                    alt="hello"
                  />
                  <p>{item?.attributes?.payment}</p>
                  <h3>{item?.attributes?.title}</h3>
                </div>
              ))}
            </div>
          )}
          {showRevenue && (
            <div className="revenue">
              <h4>Average unit sale 2022</h4>
              <h2>$456548300</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                dolorum.
              </p>
            </div>
          )}
        </MDBCarouselItem>

        {/* <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={pic2}
          alt="..."
          style={{ height: "600px" }}
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={pic3}
          alt="..."
          style={{ height: "600px" }}
        >
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselItem> */}
      </MDBCarousel>
    </div>
  );
}

export default CrouselSlider;
