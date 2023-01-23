import React from "react";
import Nav1 from "../../Navbar/Nav1";
import Footer from "../../Footer/Footer";
import "./MonthlyPack.css";

import PayPalButton from "../Monthly";


function MonthlyPack() {
 
  return (
    <>
      <Nav1 />
      <div id='monthly-div'>
       <h2 className='payment-head'>Choose Payment Option</h2>
<div className='body1'>
<div className="row1 gx-lg-5">
<div className="col-lg-3 col-md-6 mb-4 ">
  <div className="card5 ">
    <div className='head5 ' id='paypal-card'>
    <h2 >Click To Pay</h2>
    <i className="fa-solid fa-arrow-down"></i>
    </div>
    <div id='body-paypal'>
    <PayPalButton />
    
    </div>

   
  </div>
</div>
</div>
           
           <div><h2 className='or'>Or</h2></div>


            <div className="row1 gx-lg-5">
<div className="col-lg-3 col-md-6 mb-4 ">
  <div className="card5 ">
    <div className='head5' id='stripe-card1'>
     <h2>Click To Pay</h2>
     <i className="fa-solid fa-arrow-down"></i>
    </div>
    <div id='body-card1'>
          <a className='href' href={`https://buy.stripe.com/fZe14a3Fq2SubdK288?`}><div className="container2"><img src='https://media.designrush.com/inspiration_images/135143/conversions/_1510164528_150_social-mobile.jpg'  width="255" height="87"/></div></a>      
    </div>

   
  </div>
</div>
</div>
    

</div>

</div>
      <Footer />
    </>
  );
}

export default MonthlyPack;
