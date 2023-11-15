/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */

import { Request, Response } from 'express';

const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);

const endpointSecret = process.env.ENDPOINT_SECRET;

const express = require('express');
export const stripeApp = express();

const bodyParser = require('body-parser');

const fulfillOrder = (lineItems: any) => {
  console.log('Fulfilling order', lineItems);
};

stripeApp.use(express.urlencoded({ extended: true }));
stripeApp.post(
  '/create-checkout-session',
  async (req: Request, res: Response) => {
    console.log(req.body.cart);
    const order = req.body.cart.split('-');
    order.pop();
    console.log(order);
    const order_items = order.map((line: string) => {
      const lineSplit = line.split(':');
      return [lineSplit[0], lineSplit[1], lineSplit[2]];
    });
    console.log(order_items);
    const line_items: {
      price_data: {
        currency: string;
        product_data: { name: any };
        unit_amount: number;
      };
      quantity: any;
    }[] = [];
    order_items.forEach((item: any[]) => {
      line_items.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item[0],
          },
          unit_amount: item[2],
        },
        quantity: item[1],
      });
    });
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:4242/success',
      cancel_url: 'http://localhost:4242/cancel',
    });

    res.redirect(303, session.url);
  }
);

stripeApp.post(
  '/webhook',
  bodyParser.raw({ type: 'application/json' }),
  async (
    request: { body: any; headers: { [x: string]: any } },
    response: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: string): any; new (): any };
        end: { (): void; new (): any };
      };
    }
  ) => {
    const payload = request.body;
    const sig = request.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err: any) {
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ['line_items'],
        }
      );
      const lineItems = sessionWithLineItems.line_items;

      // Fulfill the purchase...
      fulfillOrder(lineItems);
    }

    response.status(200).end();
  }
);
