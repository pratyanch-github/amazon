// import { getAuth, signOut } from "firebase/auth";
import Logo from "../assets/Logo.png";
// import Typed from 'typed.js';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RoomIcon from "@mui/icons-material/Room";
// import Css from "../All.css";
import { useEffect, useState } from "react";
import { auth } from "../FirebaseInitialConfigCode";
import { Link, useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
function Header() {
  const [TopName, setTopName] = useState("Hello Guest");
  const [toggleinoout, settoggleinoout] = useState("Sign In");
  // setInterval(() => {
  //   const d = JSON.parse(localStorage.getItem("Data"));

  //   setCartNo(d.length)
  // }, 0);


  
  auth.onAuthStateChanged((user) => {
    if (user) {
      // var uid = user.uid;
      // console.log(user);
      setTopName(user.displayName);
      settoggleinoout("Sign Out");
      // ...
    } else {
      setTopName("Hello Guest");
      settoggleinoout("Sign In");
      console.log("not signed in");
      // User is signed out
      // ...
    }
  });

  const Browsehistory = new useHistory();
  return (
    <>
      <div id="Main_Header">
        <Link to="/">
          <img src={Logo} alt=" No Icon" />
          <span>Seller</span>
        </Link>

        <div>
          <p className="typed">
            <i>{TopName}</i>
          </p>
          {/* <Link  to=""> */}
          <h5
            style={{ cursor: "pointer" }}
            onClick={async () => {
              if (toggleinoout == "Sign Out")
                await auth
                  .signOut()
                  .then(() => {
                    setTopName("Hello Guest");
                    settoggleinoout("Sign In");

                    // Sign-out successful.
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              if (toggleinoout == "Sign In") {
                // window.location.href='/login'
                await Browsehistory.push("/loginseller");
              }
            }}
          >
            {toggleinoout}
          </h5>
          {/* </Link> */}
        </div>
        <div>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            Go to Shopping
          </a>
        </div>
        <div>
          <a
            href="https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember"
            style={{ color: "white", textDecoration: "none" }}
          >
            <p>Join as</p>
            <h5>Prime Member</h5>
          </a>
        </div>
        <div>
          {/* <p>Join as</p> */}
          {/* <h5
            // onClick={async () => {
            //   const hist=  useHistory();
            //   await auth
            //     .signOut()
            //     .then(() => {
            //       hist.push("/login");
            //       // Sign-out successful.
            //     })
            //     .catch((error) => {
            //       window.alert(error);
            //       // An error happened.
            //     });
            // }}
            style={{ cursor: "pointer" }}
          >
            Sign out
          </h5> */}
        </div>
      </div>
    </>
  );
}

export default Header;
