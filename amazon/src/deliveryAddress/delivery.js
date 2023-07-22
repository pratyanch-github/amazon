import "../Payment/Pay.css";
// import "../fontawesome-f/css/all.css";
import { auth } from "../FirebaseInitialConfigCode";
import { useState, useEffect } from "react";
import BasketProduct from "../Checkout/ProductsinCheckout";
import { useHistory } from "react-router";
function Pay() {
  const history = useHistory();
  let [all, setall] = useState([]);
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [city, setCity] = useState("");
  let [pin, setPin] = useState("");
  let [statename, setStatename] = useState("");
  const [defemail, setdefemail] = useState("Sign In to enter the email");

  auth.onAuthStateChanged((user) => {
    if (user) {
      setdefemail(user.email);
      // localStorage.removeItem("Delivery");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //   const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  //*test
  // useEffect(() => {

  // initialize_local();
  // console.log(delv);
  // }, [delv])

  // working code for bug fix
  // function initialize(e)
  // {
  //   setdelv([...delv, delv.push({ Name: e.target.value })]);
  // }

  return (
    <>
      {/* <form action="/action_page.php"> */}
      {/* <div className="row"> */}
      <div className="" style={{ width: "80%", margin: "auto" }}>
        <h1>Billing Address</h1>
        <br />
        <label for="fname">Full Name</label>
        <input
          // required="true"
          type="text"
          id="fname"
          name="firstname"
          placeholder="John  Doe"
          onChangeCapture={(e) => {
            // setdelv([...delv, delv.push({ Name: e.target.value })]);
            e.preventDefault();
            setName(e.target.value);
            localStorage.removeItem("Name");
            localStorage.setItem("Name", e.target.value);
          //  initialize_local("Name", name);
          }}
        />
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          disabled
          name="email"
          placeholder={defemail}
        />
        <label for="adr">
          <i className="fa fa-address-card-o"></i> Address
        </label>
        <input
          type="text"
          id="adr"
          name="address"
          placeholder="542 W. 15th Street"
         onBlurCapture={(e) => {
          e.preventDefault();
            setName(e.target.value);
            localStorage.removeItem("Address");
            localStorage.setItem("Address", e.target.value);
          }}
        />
        <label for="city">
          <i className="fa fa-institution"></i> City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="New York"
         onBlurCapture={(e) => {
          e.preventDefault();
            setName(e.target.value);
            localStorage.removeItem("City");
            localStorage.setItem("City", e.target.value);
          }}
        />

        <div className="row">
          <div className="col-50">
            <label for="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="NY"
             onBlurCapture={(e) => {
              e.preventDefault();
            setName(e.target.value);
            localStorage.removeItem("Statename");
            localStorage.setItem("Statename", e.target.value);
              }}
            />
          </div>
          <div className="col-50">
            <label for="zip">Pin Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="560004"
             onBlurCapture={(e) => {
              e.preventDefault();
            setName(e.target.value);
            localStorage.removeItem("Pin");
            localStorage.setItem("Pin", e.target.value);
              }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            // initialize_local();
            // localStorage.setItem("Delivery", []);
            // localStorage.removeItem("Delivery");
            // localStorage.setItem("Delivery", JSON.stringify(delv));
            history.push("/payment");
          }}
          style={{
            cursor: "pointer",
            backgroundColor: "rgb(242,169,71)",
            width: "35%",
            height: "2rem",
            textAlign: "center",
            margin: "2rem",
            marginLeft: "30%",
          }}
        >
          <b>Save Address</b>
        </button>
      </div>

      {/* <div className="col-50"> */}
    </>
  );
}

export default Pay;
