
import React from 'react';
import Footer from '../Footer/Footer';
import Nav1 from '../Navbar/Nav1';
import './pricing.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ReactComponent as Layer } from '../assets/circle_vector.svg'

const PricingPage = () => {
  const apiUrl = "https://localhost:3000"; //local

 //const apiUrl = "https://api.simplemail.ai"; //local
  const Location = useLocation();
  const [id, setid] = useState("")
  const [Check, setCheck] = useState(null)
  const navigate = useNavigate()
  const Monthly = () => {
    navigate('/pricing/monthlyPack', {
      userid: id
    })
  }
  const Yearly = () => {
    navigate('/pricing/yearlyPack', {
      usrid: id
    })
  }
  async function freetrialcheck(id) {
    const check = await axios.post(apiUrl + "/check", { userid: id })
      .catch(err => console.log(err));
    console.log(check.data);
    setCheck(check.data)
    if (check.data) {
      document.getElementById('free').style.visibility = "hidden";
    }
  }

  useEffect(() => {
    const queryparams = new URLSearchParams(Location.search);
    setid(queryparams.get('id'))
    localStorage.setItem("id", queryparams.get('id'))
    console.log(queryparams.get('id'), "id")
    freetrialcheck(queryparams.get('id'));

  }, [])

  //freetrial
  async function freetrial() {
    if (localStorage.getItem('id') == 'null') {
      alert("Please login")

    } else {
      await axios.post(apiUrl + '/freesubscription', { userid: localStorage.getItem('id'), method: "Freetrial/Stripe" })
        .then(res => {
          console.log(res)

          if (!res.data.update) {
            window.open("https://mail.google.com/mail/")

          } else {
            alert(res.data.update.message)
          }

        });
    }
  }
  return (
    <>

      <Nav1 />

      <div className="plan_sec">
        <div class="circle_layer">
          <Layer />
        </div>
        <div className="container">
       <div className='background_color'>
        <div className='center_div'>
         

          <div className='heading'>Avail Simplemail</div>
          <div className='btn_gmail'>  <button className='gmail' onClick={()=>{
                 window.open("https://mail.google.com/mail/")
              
              }}></button>
      <button className='outlook' onClick={()=>{
                 window.open("https://outlook.live.com/mail/")
              
              }}></button></div>
              
        </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
