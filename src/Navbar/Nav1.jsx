import React from 'react'
import './Nav.css'

function Nav1() {
  async function tut() {

    window.open('chrome-extension://epaoeoeofbdhoakmlhembafepfjgomme/tutorial.html')
  }
  return (
    <>

      <header className="header">
        <div className="container">
          <div className="d-flex justify-content-between">
         

            <div className="d-inline-block rht_col "  style={{height: "40px"}}>

              {/* <div className="nav-btn">
                <label for="nav-check">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div> */}

              

              {/* <div className="nav-links">
                <button className='tut' onClick={tut}> Back to Tutorial</button>
              </div> */}
            </div>
          </div>
        </div>
      </header>

{/*
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <img
            alt="logo"
            src="https://static.wixstatic.com/media/a3cb14_1c1fd63a3adc4208a5e3ca5917814765~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%20robot%20logo%20NO%20BG_edited.png"
            width="75"
            height="70"
            className="d-inline-block align-top"
          />
          <div className="nav-title">
            Simplemail
          </div>
        </div>

      </div> */}
    </>
  )
}

export default Nav1