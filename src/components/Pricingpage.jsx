import React from 'react';
import Footer from '../Footer/Footer';
import Nav1 from '../Navbar/Nav1';
import './pricing.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const PricingPage = () => {
  const Location=useLocation();
  const[id,setid]=useState("")
  const navigate = useNavigate()
  const Monthly = () => {
    navigate('/pricing/monthlyPack', {
      userid:id
    })
  }
  const Yearly = () => {
    navigate('/pricing/yearlyPack',{
      usrid:id
    })
  }

useEffect(()=>{
  const queryparams=new URLSearchParams(Location.search);
  setid(queryparams.get('id'))
  localStorage.setItem("userid",queryparams.get('id') )

},[])
  return (
    <>
      <Nav1 />
      <div className="pricing-header">
        <label><i class="bi bi-arrow-right"></i>Our Pricing</label>
      </div>

      <div className='div'>

        <main className="main-body">

          <div className="container ">

            <section className="text-center">




              <div className="row gx-lg-5">


                <div className="col-lg-3 col-md-6 mb-4 ">

                  <div className='bg-img'></div>
                  <div className="card1">
                    <div className='head bg-success text-white' id='header-card1'>
                      <h3 className='h3'>Free</h3>
                      <h2>30 days Trial</h2>
                    </div>
                    <div id='body-card1'>
                      <ul>
                        <li>Compose AI</li>
                        <li>Summarise </li>
                        <li>AI Reply</li>
                        <li>Custom Reply
                        </li>
                      </ul>
                    </div>

                    <div className="card-footer ">
                      <a href="https://mail.google.com/mail/">  <button type="button" className="btn5 bg-success btn-sm text-white" >Try free</button></a>
                    </div>

                  </div>


                </div>

                <div className="col-lg-3 col-md-6 mb-4">


                  <div className="card2 ">

                    <div className='head bg-primary text-white' id='header-card2'>
                      <h3 className='h3'>Monthly</h3>
                      <h2>$6.99</h2>
                    </div>
                    <div id='body-card2'>
                      <ul>
                        <li> Compose AI </li>
                        <li>Summarise </li>
                        <li>AI Reply</li>
                        <li>Custom Reply
                        </li>
                      </ul>
                    </div>
                    <div id='card2-footer'>
                      <button type="button" className="btn6 bg-primary btn-sm text-white" onClick={Monthly}>Buy now</button>
                    </div>



                  </div>


                </div>



                <div className="col-lg-3 col-md-6 mb-4">


                  <div className="card3">
                    <div className='head bg-warning text-white' id='header-card3'>
                      <h3 className='h3'>Yearly</h3>
                      <h2>$70</h2>
                    </div>
                    <div id='body-card3'>
                      <ul>
                        <li>Compose AI</li>
                        <li>Summarise </li>
                        <li>AI Reply</li>
                        <li>Custom Reply
                        </li>
                      </ul>
                    </div>
                    <div id='card3-footer'>
                      <button type="button" className="btn7 bg-warning btn-sm text-white" onClick={Yearly}>Buy now</button>
                    </div>
                  </div>


                </div>


              </div>
            </section>

          </div>
        </main>

      </div>
      <Footer />
    </>
  );
};

export default PricingPage;