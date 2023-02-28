import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Nav1 from '../Navbar/Nav1'
import { ReactComponent as Layer } from '../assets/circle_vector.svg'
import './Business.css'

function Business() {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  console.log(data);

  return (
    <>
      <Nav1 />
      <div id='body' className='py-lg-5 py-4 position-relative'>
        <div class="circle_layer">
          <Layer />
        </div>
        <div className='container'>
          <form id='businessForm'>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="bg-grey p-5 radius-10">
                  <div className='text-center mb-4'>
                    <h1 id='business-header' className='h3'>Business</h1>
                  </div>

                  <div className="form-group mb-3">
                    <label >Name</label>
                    <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" onChange={handleChange} />
                  </div>
                  <div className="form-group mb-3">
                    <label >Email address</label>
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

export default Business