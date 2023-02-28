import React from "react";
import Nav1 from "../../Navbar/Nav1";
import Footer from "../../Footer/Footer";
import "./MonthlyPack.css";
import PayPalButton from "../Monthly";
import { ReactComponent as Layer } from '../../assets/circle_vector.svg'

function MonthlyPack() {

  return (
    <>
      <Nav1 />

      <div className="plan_sec">
        <div class="circle_layer">
          <Layer />
        </div>
        <div className="container">
          <div className='text-center mb-4'>
            <h1 class='h1'>Choose a Payment Option</h1>
            <span>Please choos below payment method to continue</span>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="bg-grey p-4 radius-10">
                <div className="row gx-lg-5 align-items-center payment_method">

                  <div className="col-md-6 my-2">
                    <PayPalButton />
                  </div>

                  <div className="col-md-6 my-2">
                    <div className="stripe-payment">
                      <a className='href1' href={`https://buy.stripe.com/fZe14a3Fq2SubdK288?client_reference_id=${localStorage.getItem("id")}`}>
                        <img src='https://media.designrush.com/inspiration_images/135143/conversions/_1510164528_150_social-mobile.jpg' className="img-fluid" />
                      </a>
                    </div>
                  </div>

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