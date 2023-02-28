import React from 'react'
import Nav1 from '../../Navbar/Nav1'
import Footer from '../../Footer/Footer'
import './FreePack.css'
import FreePayPalButton from '../FreeTrial'

function FreePack() {
  return (
    <>
      <Nav1 />

      <div id='div' className="py-4">
        <div id='Free-Pack-Body'>
          <div className="container">
            {/* <h3>Get Access To The All Features Free For 30 Days </h3> */}
            <div id='FreePack-Body' className="row justify-content-center">
              <div className="col-md-9">
                <div className='bg-grey radius-20 text-center pb-5'>
                  <div className='badge_header'>
                    <img src={BadgeHeader} alt="" className='w-100' />
                  </div>
                  <Badge />
                  <h6 className='h5 mt-4 mb-0'>Your free trial will expires in 30 days.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default FreePack