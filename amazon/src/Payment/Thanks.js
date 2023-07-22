import "./Pay.css";
import { useEffect, useState } from "react";
import BasketProduct from "../Checkout/ProductsinCheckout";
import { useHistory } from "react-router";
import { auth } from "../FirebaseInitialConfigCode";
import Home from "../Login/Login";
// import "../fontawesome-f/css/all.css";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
function Thank(params) {
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
  const [checkuserlogged, setcheckuserlogged] = useState(0);
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setcheckuserlogged(1);
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  let [n, setn] = useState(datev.getDate());
  let [Name, setName] = useState("");
  let [City, setCity] = useState("");
  let [StateIN, setStateIN] = useState("");
  let [Pin, setPin] = useState("");
  let [Address, setAddress] = useState("");
  const d = JSON.parse(localStorage.getItem("Data"));

  useEffect(() => {
    // const del = JSON.parse(localStorage.getItem("Delivery"));

    setName(localStorage.getItem("Name"));
    setCity(localStorage.getItem("City"));
    setStateIN(localStorage.getItem("Statename"));
    setPin(localStorage.getItem("Pin"));
    setAddress(localStorage.getItem("Address"));

    if (n > 15) setn(2);
  }, []);
  return checkuserlogged ? (
    <>
      <h1 style={{ textAlign: "center" }}>
        Your Orders were Successfully Placed.
        <i>Thank you for Shopping with Us</i>
      </h1>

      <div className="container" style={{ alignSelf: "start", margin: "2rem" }}>
        <h2 style={{ textAlign: "center", padding: "1rem" }}>
          <span> {d.length} Items will be Delivered</span>
        </h2>
        <span>
          <b>Delivery Address :</b>
        </span>{" "}
        <div style={{ padding: ".5rem" }}> {Name}</div>
        <div style={{ padding: ".5rem" }}>
          {StateIN} {City}
        </div>
        <div style={{ padding: ".5rem" }}>{Address}</div>
        <div style={{ padding: ".5rem" }}> {Pin}</div>
        <span>
          <b>Shipping Address :</b>
        </span>{" "}
        <div style={{ padding: ".5rem" }}>{Name}</div>
        <div style={{ padding: ".5rem" }}>
          {StateIN} {City}
        </div>
        <div style={{ padding: ".5rem" }}>{Address}</div>
        <div style={{ padding: ".5rem" }}> {Pin}</div>
        <div
          style={{
            // width: "30rem",
            backgroundColor: "white",
            // height: "25vh",
            // overflowY: "scroll",
            //   border: "2px solid red",
          }}
        >
          {d.map((e, i) => {
            {
              /* total += parseInt(e.Price); */
            }
            return (
              <div
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "start",
                  padding: "1rem",
                }}
              >
                <img
                  style={{ width: "9rem", height: "9rem", margin: "2rem" }}
                  src={e.Img}
                  alt=""
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ width: "80%", paddingTop: "2rem" }}>
                    {" "}
                    {e.Title}{" "}
                  </h3>
                  <h3>$ {e.Price}</h3>
                  <h2 style={{ color: "green", paddingTop: "1rem" }}>
                    Your Product will be delivered by {n + i}th{" "}
                    {month[datev.getMonth()]}{" "}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div
          className="container"
          style={{
            height: "min-content",
            alignSelf: "start",
            margin: "2rem",
          }}
        ></div>
      </div>
    </>
  ) : (
    <Home />
  );
}

export default Thank;
