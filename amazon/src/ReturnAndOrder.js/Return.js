import BannerImg from "../assets/CheckoutBanner.jfif";
import Css from "../All.css";
import { useContext, useState } from "react";
import Productsinreturnandorder from "../Checkout/ProductsinReturnandOrder";
import { DataProvider } from "../../src/ProductComponent";
import { useHistory } from "react-router";
import { auth } from "../../src/FirebaseInitialConfigCode";
import Home from "../Login/Login";

function Banner(pro) {
  const datev = new Date();

  const [checkuserlogged, setcheckuserlogged] = useState(0);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setcheckuserlogged(1);
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const history = useHistory();

  // console.log(p)
  let [n, setn] = useState(datev.getDate());

  let [Totalnoofitem, setTotalnoofitem] = useState(0);
  let [TotalPrice, setTotalPrice] = useState(0);
  const d = JSON.parse(localStorage.getItem("Data"));

  let k = 0;
  d.map((ele) => {
    k += parseInt(ele.Price);
  });

  setTimeout(() => {
    setTotalnoofitem(d.length);
    if (n + 10 > 30) setn(2);
  }, 0);

  return checkuserlogged == 1 ? (
    <>
      <div id="CheckoutBanner">
        <div id="cartBanner2">
          <img width="100%" height="90px" src={BannerImg} alt="" />
          <h1 style={{ textAlign: "center", margin: "1rem" }}>
            Your Return and Orders
          </h1>
          <hr />
        </div>
      </div>

      {d.map((e, i) => {
        return (
          <>
            <Productsinreturnandorder
              // renderProp={setdelRender}

              CartImgurl={e.Img}
              CartText={e.Title}
              Dateandtime={n + i}
            />
          </>
        );
      })}
    </>
  ) : (
    <Home />
  );
}
export default Banner;
