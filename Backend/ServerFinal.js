const stripe = require("stripe")("sk_test_tR3PYbcVNZZ796tH88S4VQ2u");
const express = require("express");
const ser = new express();
var cors = require("cors");
const bp = require("body-parser");
ser.use(bp.urlencoded({ extended: false }));
ser.use(bp.json());
const db = require("./DatabaseFiles/Atlas_Connect");
const order_model = require("../Backend/DatabaseFiles/Admin_Order_SchemaandModel");

ser.use(cors());

//stripe start
const YOUR_DOMAIN = "http://localhost:5000";

ser.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.redirect(303, session.url);
});
//stripe end

//api for seller postiing order
ser.post("/admin_order", async (req, res) => {
  const new_order = new order_model.order_model_j({
    Title: req.body.title,
    Price: req.body.price,
    Rating: req.body.rating,
    ImgUrl: req.body.imgurl,
    //address_of_delivery: req.body.address
  });

  await new_order.save((err, ok) => {
    if (ok) {
      res.status(200);
      console.log("order saved");
    }
    if (err) {
      console.log(err);
    }
  });

  order_model.order_model_j
    .findOne({ Title: req.body.title, ImgUrl: req.body.imgurl }, (err, ok) => {
      if (err) {
        console.log("error");
      }
      if (ok) {
        // console.log(ok)
        res.send(ok);
      }
    })
    .select({ _id: 1 });
});

//api to fetch all ites from mongo
ser.get("/product", async (req, res) => {
  const all_item = await order_model.order_model_j.find();
  //   await res.json(all_item);
  console.log(all_item);
  // console.log("asdad");

  await res.send(all_item);
});

ser.listen(5000, () => {
  console.log("server started");
});
