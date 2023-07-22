import "./Pay.css";
import { useEffect, useState } from "react";
import BasketProduct from "../Checkout/ProductsinCheckout";
import { useHistory } from "react-router";
import { auth } from "../FirebaseInitialConfigCode";
import Home from "../Login/Login";
import "../fontawesome-f/css/all.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// ***Stripe ***

function Pay() {
  let [fakeren, setfakeren] = useState(0);
  let [Total, setTotal] = useState(0);

  const d = JSON.parse(localStorage.getItem("Data"));
  let total = 0;
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  //stripe
  const [message, setMessage] = useState("");
  useEffect(() => {
    d.map((e, i) => {
      total += parseInt(e.Price);
      // console.log(total);
      return 0;
    });
    setTotal(total);
  }, []);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/payment-stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: Total * 100 }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
        // console.log(clientSecret);
      });
  }, []);


  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);


  
const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);



  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    history.push("/thanks");
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        // card: elements.getElement(CardElement),
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name: "",
          // address: {
          //   ...billingAddress
          // }
        },
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      history.push("/");
    }
  };

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

  let [Name, setName] = useState("Please Put Name");
  let [City, setCity] = useState("Select City");
  let [StateIN, setStateIN] = useState("Select State");
  let [Pin, setPin] = useState("Select pin");
  let [Address, setAddress] = useState("Select Address");

  useEffect(() => {
    // let del = JSON.parse(localStorage.getItem("Delivery"));
    setName(localStorage.getItem("Name"));
    setCity(localStorage.getItem("City"));
    setStateIN(localStorage.getItem("Statename"));
    setPin(localStorage.getItem("Pin"));
    setAddress(localStorage.getItem("Address"));

    //   if (Name != null)
    // setName(del[0].Name);
    // //   if (del[2].City != null)
    // setCity(del[2].City);
    // //   if (del[3].State != null)
    // setStateIN(del[3].State);
    // //   if (del[0].Addresses != null) s
    // setAddress(del[1].Addresses);
    // //   if (del[4].Pin != null)
    // setpin(del[4].Pin);
  }, []);

  // async function pay(params) {
  //   await fetch("/payment-stripe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({}),
  //   });
  // }
  const history = useHistory();

  return (checkuserlogged) ? (
    <>
    <Message message={message} />
      {/* <div className="row"> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap-reverse",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="container"
          style={{
            width: "40rem",
            height: "min-content",
            alignSelf: "start",
            margin: "3rem",
          }}
        >
          {/* <div className="col-50"> */}
          <h1>Payment</h1>
          <br />
          <label for="fname">Accepted Cards</label>
          <div className="icon-container">
            <i className="fab fa-cc-visa" style={{ color: "navy" }}></i>{" "}
            <i className="fab fa-cc-amex" style={{ color: "blue" }}></i>{" "}
            <i className="fab fa-cc-mastercard" style={{ color: "red" }}></i>{" "}
            <i className="fab fa-cc-discover" style={{ color: "orange" }}></i>
          </div>
          <label for="cname">Name on Card</label>
          <input
            type="text"
            id="cname"
            name="cardname"
            placeholder="John More Doe"
          />

          {/* *******STRIPE****** */}

          <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement
              id="card-element"
              options={cardStyle}
              onChange={handleChange}
            />
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "rgba(242,169,71,.5)",
                width: "35%",
                height: "2rem",
                textAlign: "center",
                marginLeft: "30%",
                marginTop: "3rem",
                // margin:'2rem',
              }}
              disabled={processing || disabled || succeeded}
              id="submit"
            >
              <span id="button-text">
                {processing ? (
                  <div className="spinner" id="spinner"></div>
                ) : (
                  "Pay now"
                )}
              </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
              <div className="card-error" role="alert">
                {error}
              </div>
            )}
            {/* Show a success message upon completion */}
          </form>

          {/* *******STRIPE****** */}

          {/* </form> */}
        </div>
        {/* </div> */}
        {/* <div className="col-25"> */}

        <div
          className="container"
          style={{ height: "min-content", alignSelf: "start", margin: "2rem" }}
        >
          <h2 style={{ textAlign: "center", padding: "1rem" }}>
            Checkout&nbsp;<span>( {d.length} Items )</span>
          </h2>
          <div
            style={{
              width: "30rem",
              backgroundColor: "white",
              height: "25vh",
              overflowY: "scroll",
              //   border: "2px solid red",
            }}
          >
            {d.map((e, i) => {
              {
                /* total += parseInt(e.Price); */
              }
              return (
                <div id="finalcart" style={{ fontSize: ".6rem" }}>
                  <BasketProduct
                    // renderProp={setdelRender}

                    CartImgurl={e.Img}
                    CartText={e.Title}
                    CartItemRate={0}
                    CartItemPrice={e.Price}
                  />
                </div>
              );
            })}
          </div>
          <hr />
          <h3 style={{ textAlign: "end", padding: "1rem" }}>
            Order Total :&nbsp;&nbsp;&nbsp; <span>$ {Total}</span>
          </h3>
          <button
            onClick={() => {
              //   let d=[]
              localStorage.setItem("Data", JSON.stringify([]));
              setfakeren(!fakeren);
            }}
            style={{
              cursor: "pointer",
              backgroundColor: "rgb(242,169,71)",
              width: "35%",
              height: "2rem",
              textAlign: "center",
              //   marginLeft: "30%",
            }}
          >
            <b>Remove All Items</b>
          </button>
          <div
            className="container"
            style={{
              height: "min-content",
              alignSelf: "start",
              margin: "2rem",
            }}
          >
            <div style={{ padding: ".5rem" }}> To , {Name}</div>
            <div style={{ padding: ".5rem" }}>
              {StateIN} {City}
            </div>
            <div style={{ padding: ".5rem" }}>{Address}</div>
            <div style={{ padding: ".5rem" }}> {Pin}</div>
            <button
              onClick={() => {
                //   let d=[]
                history.push("/delivery");
              }}
              style={{
                cursor: "pointer",
                backgroundColor: "rgb(242,169,71)",
                width: "55%",
                height: "2rem",
                textAlign: "center",
                //   marginLeft: "30%",
              }}
            >
              <b>Enter Delivery Address</b>
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Home />
  );
}

export default Pay;
