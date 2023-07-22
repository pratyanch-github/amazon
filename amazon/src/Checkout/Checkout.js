import BannerImg from "../assets/CheckoutBanner.jfif";
import Css from "../All.css";
import { useContext, useState } from "react";
import BasketProduct from "./ProductsinCheckout";
import { DataProvider } from "../../src/ProductComponent";
import { useHistory } from "react-router";
import { auth } from "../../src/FirebaseInitialConfigCode";
import Home from "../Login/Login";

function Banner(pro) {
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
  const history = useHistory();
  // const Data = useContext(DataProvider);
  // console.log(p)
  let [Totalnoofitem, setTotalnoofitem] = useState(0);
  // const fakeRenderValuefromChild=0;
  let [TotalPrice, setTotalPrice] = useState(0);
  const d = JSON.parse(localStorage.getItem("Data"));

  let k = 0;
  d.map((ele) => {
    k += parseInt(ele.Price);
  });

  setTimeout(() => {
    setTotalnoofitem(d.length);
  }, 0);
  // setTotalPrice(k)
  // const d = JSON.parse(localStorage.getItem("Data"));

  return checkuserlogged == 1 ? (
    <>
      <div id="CheckoutBanner">
        <div id="cartBanner">
          <img width="100%" height="90px" src={BannerImg} alt="" />
          <h1 style={{ textAlign: "center", margin: "1rem" }}>
            Your Shopping Basket
          </h1>
          <hr />
        </div>

        <div id="cart">
          <p>
            Subtotal ({Totalnoofitem} Items) : <b>$ {k}</b>
          </p>
          <span style={{ marginTop: "0rem" }}>
            <span>
              {" "}
              <input type="checkbox" />
              <h4 style={{ display: "inline", paddingLeft: "1rem" }}>
                Your order Contains a Gift
              </h4>{" "}
            </span>
          </span>
          {/* <br/> */}
          <button
            style={{
              backgroundColor: "rgb(242,169,71)",
              height: "2rem",
              borderRadius: "2rem",
              borderColor: "rgb(242,169,71)",
              // width: "10rem",
              marginTop: "1rem",
              width: "80%",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              history.push("/payment");
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {d.map((e, i) => {
        return (
          <BasketProduct
            // renderProp={setdelRender}

            CartImgurl={e.Img}
            CartText={e.Title}
            CartItemRate={e.rate}
            CartItemPrice={e.Price}
          />
        );
      })}

      {/* <h1>{pro.Data}</h1> */}
    </>
  ) : (
    <Home />
  );
}
export default Banner;
