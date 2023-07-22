import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CollectionsIcon from "@mui/icons-material/Collections";
import LoginSeller from "../../src/Login/Loginseller";
import "./Admin.css";
// authentication
import { auth } from "../FirebaseInitialConfigCode";

function Admin() {
  const his = useHistory();

  // authentication
  const [check, setcheck] = useState(0);
  const [idv, setid] = useState("");
  auth.onAuthStateChanged((user) => {
    if (user) {
      // console.log("signed in");
      setcheck(1);
      // ...
    } else {
      console.log("not signed in");
      // User is signed out
      // ...
    }
  });

  const [values, setvalue] = useState({
    titlev: "",
    pricev: "",
    ratingv: "",
    imgurlv: "",
  });

  // function fetch_details() {
  async function fetch_api() {
    let res;
    if (
      values.titlev != "" &&
      values.pricev != 0 &&
      values.ratingv != "" &&
      values.imgurlv != ""
    ) {
      // backend api to place order from seller
      res = await fetch("/admin_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: values.titlev,
          price: values.pricev,
          rating: values.ratingv,
          imgurl: values.imgurlv,
        }),
      });

      await res
        .json()
        .then(async (ele) => {
          {
            console.log(ele);
            setid(ele._id);

            localStorage.setItem("Seller_Product_id", ele._id);
            alert("Your Product is saved :" + ele._id);
            setTimeout(() => {
              his.push("/Thankyou");
            }, 3000);
          }
        })
        .catch((e) => {
          alert("Order not Confirmed");
        });

      if (res == null) {
        alert("unsuccessful in Fixing your order...");
      }
    } else {
      alert("Some Fields are Empty");
    }
  }

  // }

  return check == 1 ? (
    <div id="main_register_page">
      <div id="signup">
        <h2 style={{ padding: "1rem" }}>Order Details </h2>
        <form method="post" action="">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <ProductionQuantityLimitsIcon />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Order Title and Order Details"
              style={{ height: "2rem", marginLeft: "1rem" }}
              // aria-label="Username"
              // aria-describedby="basic-addon1"
              onChange={(e) => {
                setvalue({ ...values, titlev: e.target.value });
              }}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <StarHalfIcon />
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Rating"
              defaultValue="0"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{
                height: "2rem",
                paddingLeft: "1rem",
                marginBottom: "1rem",
                marginLeft: "1rem",
              }}
              onChange={(e) => {
                setvalue({ ...values, ratingv: e.target.value });
              }}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <CollectionsIcon />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Paste the image url here"
              style={{ height: "2rem", marginLeft: "1rem" }}
              // aria-label="Username"
              // aria-describedby="basic-addon1"
              onChange={(e) => {
                setvalue({ ...values, imgurlv: e.target.value });
              }}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <AttachMoneyIcon />
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the price"
              style={{
                height: "2rem",
                paddingLeft: "1rem",
                marginLeft: "1rem",
              }}
              // aria-label="Username"
              // aria-describedby="basic-addon1"
              onChange={(e) => {
                setvalue({ ...values, pricev: e.target.value });
              }}
            />
          </div>
        </form>
        <button
          id="contact_button"
          onClick={() => {
            if (check == 1) fetch_api();
            else his.push("/loginseller");
          }}
        >
          <i className="far fa-paper-plane" /> Order Now
        </button>
      </div>

      <div className="id">
        <h3 style={{ color: "red", textAlign: "center" }}>
          Please Note Your Product No is: {idv}
        </h3>
      </div>
    </div>
  ) : (
    <LoginSeller />
  );
}

export default Admin;
