import { useState, useEffect, createContext, useContext } from "react";
import Img from "../src/assets/ProductImg/book.jfif";
import Checkout from "./Checkout/Checkout";
// import { useStateValue } from "./Stateprovider/Stateprovider";
export const DataProvider = new createContext();

function Product(p) {
  let [ren, setren] = useState(0);
  // let arr=[]
  // const [{basket}, dispatch] = useStateValue();
  // function print() {
  //   Itemdata.map((e) => {
  //     console.log(e.r);
  //     console.log(e.c);
  //     return e;
  //   });
  // function addtobasket() {
  //   dispatch({
  //     type: "ADDTOBASKET",
  //     item: {
  //       title: p.text,
  //       img: p.imgurl,
  //       rate: p.rating,
  //       price: p.cost,
  //     },
  //   });
  // }
  // let [arr, setItemdata] = useState([]);
  // const [t, sett] = useState(0);

  // useEffect(async () => {
  //   const d = await JSON.parse(localStorage.getItem("Data"));
  //   if (d) await setItemdata(d);
  //   // arr=d;
  // }, [ren]);

  // useEffect(
  function add() {
    setren(1);
    // localStorage.setItem("Data", JSON.stringify(Itemdata));
    setTimeout(() => {
      setren(0);
    }, 1500);
    const d = JSON.parse(localStorage.getItem("Data"));
    // if (d)

    const obj = {
      Img: p.imgurl,
      Title: p.text,
      Price: p.cost,
      rate: p.rating,
    };
    d.push(obj);
    // setItemdata(d);
    // setItemdata([...arr, obj]);
    localStorage.setItem("Data", JSON.stringify(d));
  }

  //   [t]
  // );
  // async function addtobasket2(t, c, r) {
  //   const obj = {
  //     Title: t,
  //     Price: c,
  //     rate: r,
  //   };
  //    setItemdata([...Itemdata, obj]);
  //   // await localStorage.setItem("Data", JSON.stringify(Itemdata));
  // }

  // }
  //   function inc() {
  //     const [val, setval] = useState([]);
  //     if (val.length < p.rating) {
  //       setval(val.push( "s"));
  //     }
  //   }
  //  await useEffect(() => {
  //     inc();
  //   }, [val.length]); **********error***********

  return (
    <>
      {/* <DataProvider.Provider value={{a:Item}}> */}
      {/* <div style={{ display: "none" }}> */}
      {/* <Checkout Data="name" /> */}
      {/* </div> */}
      {/* </DataProvider.Provider> */}
      <div
        style={{
          textAlign: "center",
          width: "30em",
          backgroundColor: "white",
          height: "max-content",
          margin: "1rem",
          padding: "2rem",
        }}
      >
        <h3 style={{ textAlign: "start" }}>{p.text}</h3>
        <h3 style={{ textAlign: "start" }}>Price : $ {p.cost}</h3>
        <div style={{ textAlign: "start", display: "flex" }}>
          {/* {val.map((i) => {
          <p>{i}</p>
        })}  ****************errror****** */}

          {Array(p.rating)
            .fill()
            .map((i) => (
              <p> ⭐</p>
            ))}
        </div>
        <img
          style={{ width: "40%", height: "60%", margin: ".5rem" }}
          src={p.imgurl}
          alt=""
        />
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            // setItemdata([...Itemdata, p.cost]);
            // addtobasket();

            // const d = JSON.parse(localStorage.getItem("Data"));
            // if (d)
            // setItemdata(d);
            // const obj = {
            //   Title: p.text,
            //   Price: p.cost,
            //   rate: p.rating,
            // };
            // setItemdata([...arr, obj]);
            //  arr.push(obj)
            // d.push(obj);
            // localStorage.setItem("Data", JSON.stringify(d));
            add();
            // localStorage.setItem("Data", obj);

            // sett(!t);
            // addtobasket2(p.text, p.cost, p.rating);
            // setItemdata(Itemdata.push({ c: p.cost, r: p.rating }));

            // Itemdata.map((e) => {
            //   console.log(e);
            //   // console.log(e.c);
            //   return e;
            // });
          }}
          style={{
            backgroundColor: "rgb(242,169,71)",
            height:"2rem",
            borderRadius:"2rem",
            borderColor:"rgb(242,169,71)",
            width: "10rem",
            marginTop:"1rem",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          Add to Cart
        </button>
        <div style={{ width: "100%", height: "2rem", margin: "auto" }}>
          {ren ? <Addtocartpimp /> : <Addtocartpimpo />}
        </div>
      </div>
    </>
  );
}

function Addtocartpimp() {
  return (
    <>
      <h4 style={{ color: "green", padding: "1rem" }}>Successfully Added !</h4>
    </>
  );
}

function Addtocartpimpo() {
  return <></>;
}
export default Product;
