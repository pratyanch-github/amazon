// import { getAuth, sendEmailVerification } from "firebase/auth";
import Firebase from "firebase";
import firebase from "firebase/app";
import { useState } from "react";
import { auth } from "../FirebaseInitialConfigCode";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";

import CSS from "../All.css";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
function Login(params) {
  const [errorCode, seterrorCode] = useState("");
  const [Createdmssg, setCreatedmssg] = useState("");
  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  const Browserhistory = useHistory();
  // sudo npm install -g firebase-tools
  async function Signup() {
    // firebase authentiaction

    await auth
      .signInWithEmailAndPassword(Email, Pwd)
      .then((ok) => {
        console.log(ok);
        Browserhistory.push("/admin");
      })
      .catch((e) => {
        seterrorCode(e.code);
        // console.log(e)
      });
  }

  //google login
  async function GoogleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        Browserhistory.push("/admin");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }


  
  async function Register() {
    // creation of new user
    await auth
      .createUserWithEmailAndPassword(Email, Pwd)
      .then((ok) => {
        if (ok) {
          console.log(ok);
          setCreatedmssg("User SuccessFully Created !");
        }
      })
      .catch((e) => {
        // console.log(e.message)
        seterrorCode(e.message);
      });
  }
  return (
    <div style={{ width: "30rem", margin: "auto", fontFamily: "roboto" }}>
      <div className="d-flex flex-row justify-content-center">
        <div className="row">
          <div className="col-md">
            <img
              className="img_1"
              style={{ marginLeft: "11rem", width: "10rem", height: "5rem" }}
              src="https://play-lh.googleusercontent.com/SuZ9ZLgd7A8J9Xiem8rr0whx3cY6GaSk0MxGQGL1KDw4YyedIxNQCOdAr4SkO73QfJ0"
              alt="Amazon Logo"
            />
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center">
        <div className="row">
          <div className="col-md">
            <form>
              <div className="sign-in" style={{ textAlign: "center" }}>
                Seller Sign In
              </div>
              <div style={{ marginBottom: "1rem", marginLeft: "25%" }}>
                <GoogleButton
                  onClick={() => {
                    GoogleLogin();
                  }}
                />
              </div>
              <div style={{ color: "red", textAlign: "center" }}>
                {errorCode}
              </div>
              <div style={{ color: "Green", textAlign: "center" }}>
                {Createdmssg}
              </div>
              <div className="form-group">
                <label id="words_1" for="exampleInputEmail1">
                  Email ( Phone for mobile accounts)
                </label>
                {/* <br /> */}
                <input
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "2.3rem",
                    marginTop: ".5rem",
                    marginBottom: ".5rem",
                  }}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="  Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label id="words_2" for="exampleInputPassword1">
                  Password{" "}
                  <span style={{ marginLeft: "15rem" }}>
                    <span
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                      }}
                      // to=""
                      onClick={async (e) => {
                        // import { getAuth, sendPasswordResetEmail } from "firebase/auth";

                        // const auth = getAuth();
                        auth
                          .sendPasswordResetEmail(Email)
                          .then((ok) => {
                            setCreatedmssg("Link Sent !");
                            // Password reset email sent!
                            // ..
                          })
                          .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            seterrorCode(errorMessage);
                            // ..
                          });
                      }}
                    >
                      Forgot your password?
                    </span>
                  </span>{" "}
                </label>
                <input
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "2.3rem",
                    marginTop: ".5rem",
                    marginBottom: ".5rem",
                  }}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="  Password"
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                />
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{
                      // marginLeft: "2rem",
                      height: "2.3rem",
                      backgroundColor: "rgb(255,153,0)",
                      cursor: "pointer",
                    }}
                    id="sign-in"
                    onClick={() => {
                      Signup();
                    }}
                  >
                    Sign In
                  </button>
                  <p className="keep-sign-in">
                    {" "}
                    <input
                      style={{
                        position: "relative",
                        top: "0.1rem",
                        marginRight: "1rem",
                      }}
                      type="checkbox"
                      className="form-check-input checkbox"
                      id="exampleCheck1"
                    />
                    Keep me signed in.{" "}
                    <a href="https://stupidlink.com">Details</a>
                  </p>
                  <p
                    style={{ width: "90%", margin: "auto", paddingTop: "1rem" }}
                  >
                    By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                  </p>
                </div>
              </div>
              <div className="form-check"></div>
              <button
                type="button"
                style={{
                  // marginLeft: "2rem",
                  height: "2.3rem",
                  cursor: "pointer",
                }}
                className="btn btn-warning"
                id="grey-button"
                onClick={() => {
                  Register();
                }}
              >
                Create your Amazon account
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center footer_1">
        <div className="row" style={{ marginLeft: "3rem", cursor: "pointer" }}>
          <div className="col">
            <p className="conditions">
              <a>Conditions of Use &nbsp &nbsp &nbsp </a>{" "}
              <a>Privacy Notice&nbsp &nbsp &nbsp </a>{" "}
              <a>Help&nbsp &nbsp &nbsp </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
