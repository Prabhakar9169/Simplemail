import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
      <MDBFooter className='text-center text-lg-start text-white ' style={{ backgroundColor: " black" }}>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
           
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  Simplemail
                </h6>
                <p>
                  Simplemail is a start up company that aim at allowing everyone to take advantage of AI technology
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    simplemail.ai
                  </a>
                </p>


              </MDBCol>
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
                <p>
                  <a href='/pricing/feedback' className='text-reset'>
                    FeedBack
                  </a>
                </p>
                <p>
                  <a href='/pricing/business' className='text-reset'>
                    Business
                  </a>
                </p>
                <p>
                  <a href={`/pricing/cancelSubscription?id=${localStorage.getItem('id')}`}  className='text-reset'>
                    Cancellation Subscription
                  </a>
                </p>
                <p>
                  <a href='mailto:help@simplemail.ai' className='text-reset'>
                    Simplemail Not Working
                  </a>
                </p>


              </MDBCol>



              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Melbourne , Australia
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  help@simplemail.ai
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:
          <a className='text-reset fw-bold' href='https://www.simplemail.ai/'>
            Simplemail.ai
          </a>
        </div>
      </MDBFooter>
    </>
  )
}

export default Footer