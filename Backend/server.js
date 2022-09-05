// not work tried for stripe js
const express = require("express");
const app = express();
// This is your real test secret API key.
const stripe = require("stripe")(
  "sk_test_51JfUL9SBuLC1QLc4I3hv4dvtg9TRwpuTVn7tMl7oQr7XKMvwzu9M1kTMGTYM4SR307xF8vsNzBbau01bra5nPEfG00s9MVMixl"
);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
