import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './monthly.css'
import Nav1 from '../Navbar/Nav1';
import { useEffect } from 'react';
import axios from 'axios'

const PayPalButton = () => {


  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  const createSubscription = function (data, actions) {
    return actions.subscription.create({
      /* Creates the subscription */
      custom_id: localStorage.getItem('id'),
       plan_id: 'P-8MY22973ER585953EMPHETQY'
     // plan_id: 'P-0L703587YA7278832MPAUJAI' //testing
    });
  }
  const onApprove = async function (data, actions) {
    console.log(data, "data")


    alert("subscribed")

    window.open("https://mail.google.com/mail/")

  }

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
    alert("An Error occured with your payment")
  };

  return (
    <>
      <div className='payment'>
        <PayPalScriptProvider
          options={{
             "client-id": "AUMwusyquj_wKP4zm3MjuSsKcVUN-FwgRXpbtYDmV8zbWZDBNGcdwbh4rMeXgX3b8qt0NpjzDnSdZKLt",
            //"client-id": "AdvvMAUbk5-ZygBTbbv_IUyV-Cy0upeEJU7gax9fFA1czPezd8rlYxZedTDLNpz10R-HxKiiNkqACgXB",
            //testing
            "vault": "true",
            "intent": "subscription"
          }}
        >
          <PayPalButtons
            style={{
              shape: 'rect',
              color: 'gold',
              layout: 'horizontal',
              label: 'subscribe',

            }}
            createSubscription={createSubscription}
            onApprove={onApprove}
            onError={onError}
          />
        </PayPalScriptProvider>
      </div>

      <div className='foot'></div>
    </>
  )
};

export default PayPalButton;