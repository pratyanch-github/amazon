// import '../App.css'
import { Link } from "react-router-dom";
import { auth } from "../FirebaseInitialConfigCode";
import { useState, useEffect } from "react";
import Admin from "../Admin/Admin";
function T() {
  const [check, setcheck] = useState(0);
  const [prod_id, setprod_id] = useState("");

  useEffect(() => {
    setprod_id(localStorage.getItem("Seller_Product_id"));
  }, []);

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("signed in");
      setcheck(1);

      // ...
    } else {
      console.log("not signed in");
      // User is signed out
      // ...
    }
  });
  return check == 1 ? (
    <div className="main_body">
      <div className="item item2">
        <h1 style={{ color: "green" }}>
          Your Product is Placed with id {prod_id}
        </h1>
        <h1>
          Successful{" "}
          <i style={{ color: "green" }} className="fas fa-check-double" />
        </h1>

        <a href="/admin">Back to Home </a>
      </div>

      <div className="body">
        <div className="bg1" />
        <div className="bg2" />
      </div>
    </div>
  ) : (
    <Admin />
  );
}

export default T;
