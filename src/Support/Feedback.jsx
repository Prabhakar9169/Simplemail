import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Nav1 from '../Navbar/Nav1'
import './Feedback.css'
import { ReactComponent as Layer } from '../assets/circle_vector.svg'
import axios from 'axios'
function Feedback() {

  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value })
  }

  console.log(feedback);

  return (
    <>
      <Nav1 />
      <div id='body' className='py-lg-5 py-4 position-relative'>
        <div class="circle_layer">
          <Layer />
        </div>
        <div className='container'>
          <form id='feedbackForm'>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="bg-grey p-5 radius-10">

                  <div className='text-center mb-4'>
                    <h1 class='h3' id='feedback-header'>Cancellation Subscription</h1>
                    <span>Please fill below details to cancel the subscription</span>
                  </div>

                  <div className="form-group mb-3">
                    <label>Name</label>
                    <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" onChange={handleChange} />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange} />
                  </div>
                  <div className="form-group mb-3">
                    <label>Message</label>
                    <textarea name='message' className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={handleChange}></textarea>
                  </div>

                  <div id='button' className='text-center'><button className='btn btn-md btn-outline-primary'>Submit</button></div>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Feedback