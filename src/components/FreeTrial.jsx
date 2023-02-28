import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './monthly.css'
import Nav1 from '../Navbar/Nav1';

const FreePayPalButton = () => {

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "monthly subscription",
            amount: {
              currency_code: "USD",
              value: 6.79,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
  return (
    <>
      <div className='payment'>
        <div className='container'>
          <PayPalScriptProvider
            options={{
              "client-id": "AdvvMAUbk5-ZygBTbbv_IUyV-Cy0upeEJU7gax9fFA1czPezd8rlYxZedTDLNpz10R-HxKiiNkqACgXB",
            }}
          >
            {/* <PayPalButtons className='pay' style={{ layout: "horizontal" }} /> */}
            <PayPalButtons
              style={{ layout: "horizontal" }}
              createOrder={createOrder}
              onApprove={onApprove}
            />
          </PayPalScriptProvider>
        </div>

      </div>
      <div className='foot'></div>

    </>
  )
};

export default FreePayPalButton;