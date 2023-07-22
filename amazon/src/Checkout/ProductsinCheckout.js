import { useState, useEffect } from "react";
function Product(p) {
  let [ren, setren] = useState(0);

  // let [fakerender, setfakerender] = useState(Math.random());
  return (
    <>
      <div
        style={{
          display: "flex",
          // textAlign: "center",
          // width: "30%",
          backgroundColor: "white",
          // height: "max-content",
          margin: "1rem",
          padding: "2rem",
        }}
      >
        <img
          style={{ width: "12em", height: "12em", margin: ".5rem" }}
          src={p.CartImgurl}
          alt=""
        />
        <div style={{ width: "60%", paddingLeft: "2rem" }}>
          <h2 style={{ textAlign: "start",fontSize:"1.4rem" }}>{p.CartText}</h2>
          <br />
          <h2 style={{ textAlign: "start" ,fontSize:"1.2rem"}}>$ {p.CartItemPrice}</h2>
          <div style={{ textAlign: "start", display: "flex" }}>
            {Array(p.CartItemRate)
              .fill()
              .map((i) => (
                <p> ⭐</p>
              ))}
          </div>
          <br />
          <button
            id="cartbutt"
            style={{
              backgroundColor: "rgb(242,169,71)",
              height:"2rem",
            borderRadius:"2rem",
            borderColor:"rgb(242,169,71)",
            width: "10rem",
            marginTop:"1rem",
              // width: "30%",
              textAlign: "center",
            }}
            onClick={() => {
              setren(1);
              // localStorage.setItem("Data", JSON.stringify(Itemdata));
              setTimeout(() => {
                setren(0);
              }, 1500);
              const d = JSON.parse(localStorage.getItem("Data"));
              if (d)
                for (let i = 0; i < d.length; i++) {
                  if (d[i].Title == p.CartText) {
                    d.splice(i, 1);
                    localStorage.setItem("Data", JSON.stringify(d));
                    //  setfakerender(fakerender++);
                    // p.renderProp(fakerender++)
                    window.location.reload();
                    break;
                  }
                }
              else localStorage.setItem("Data", []);
            }}
          >
            Remove
          </button>
          <div style={{ width: "100%", height: "2rem", margin: "auto" }}>
            {ren ? <Addtocartpimp /> : <Addtocartpimpo />}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

function Addtocartpimp() {
  return (
    <>
      <h4 style={{ color: "green", padding: "1rem" }}>Successfully Removed !</h4>
    </>
  );
}

function Addtocartpimpo() {
  return <></>;
}
export default Product;
