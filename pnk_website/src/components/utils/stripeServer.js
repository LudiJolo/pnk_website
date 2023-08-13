const express = require('express');
const app = express();
const stripe = require('stripe')('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');

app.use(express.json());

app.post('/create-product', async (req, res) => {
    const { name, description, price, currency } = req.body;
  
    try {
      // Create the product on Stripe
      const product = await stripe.products.create({
        name: name,
        description: description,
      });
  
      // Create a price for the product
      const stripePrice = await stripe.prices.create({
        unit_amount: price * 100, // Stripe expects the amount in cents
        currency: currency,
        product: product.id,
      });
  
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'An error occurred while creating the product.' });
    }
  });
  
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });