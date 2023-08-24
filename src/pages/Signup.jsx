import React from 'react'

export const Signup = () => {
  return (
    <>
      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Sign up
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create an Account</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div class="input-group input-group-lg">
                <input type="text" class="form-control m-3 p-2" placeholder='First Name*' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
              </div>
              <div class="input-group input-group-lg">
                <input type="text" class="form-control m-3 p-2" placeholder='Last Name' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
              </div>
              <div class="input-group input-group-lg">
                <span class="input-group-text ms-3 mt-3" id="inputGroup-sizing-lg">+91</span>
                <input type="number" class="form-control me-3 mt-3 p-2" placeholder='Mobile*' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
              </div>
              <div class="input-group input-group-lg">
                <input type="email" class="form-control m-3 mt-4 p-2" placeholder='Email*' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
              </div>
              <div class="input-group input-group-lg">
                <input type="password" class="form-control m-3 p-2" placeholder='Password*' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
              </div>
            </div>
            <div className='referal'>
              <span role="button" tabindex="0" className='referal ms-4 '><u>Got a Referral code?</u></span>
              (Optional)
            </div>
            <div class="form-check m-4">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Get updates on Watsapp
              </label>
              <img width="25" src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"/>
            </div>
            <div className='text ms-3'>
            By creating this account, you agree to our
            <a role="button" tabindex="0"  className='m-1'>Privacy Policy</a>
            </div>
            <button type="button" className="btn btn-secondary m-4 p-2 rounded-pill" data-bs-dismiss="modal">Create an Account</button>
            <div className='text ms-3'>
            Have an Account?
            <a role="button" tabindex="0"  className='m-1'>Sign In</a>
            </div>

          </div>
        </div>
      </div>
  </>
  
  )
}
