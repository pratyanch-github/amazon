import { useState, useEffect } from "react";
function Product(p) {
  const datev = new Date();
  const [month, setmonth] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  // let [fakerender, setfakerender] = useState(Math.random());
  return (
    <>
      <div
        style={{
          display: "flex",
          // textAlign: "center",
          // width: "30%",
          fontSize: "1rem",
          backgroundColor: "white",
          // height: "max-content",
          justifyContent: "start",
          margin: "1rem",
          padding: "1rem",
        }}
      >
        <img
          style={{ width: "9rem", height: "9rem", margin: "2rem" }}
          src={p.CartImgurl}
          alt=""
        />
        <div
          style={{ display: "flex", flexDirection: "column", fontSize: "1rem" }}
        >
          {/* <div style={{ width: "60%", paddingLeft: "2rem" }}> */}
          <h2 style={{ width: "80%", paddingTop: "2rem" }}>{p.CartText}</h2>

          <h2 style={{ color: "green",paddingTop:"1rem" }}>
            Your Product will be delivered by {p.Dateandtime}th{" "}
            {month[datev.getMonth()]}{" "}
          </h2>

          {/* </div> */}
        </div>
      </div>
      <hr />
    </>
  );
}
export default Product;
