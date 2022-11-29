import { useState } from 'react'

import axios from 'axios'

const Verified = () => {
  const [otp, setOtp] = useState('')
  const storage = localStorage.getItem('signature')

  const verify = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:3001/users/verify/${storage}`, { otp }).then(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  return (
    <>
      <div class='otp-container'>
        <>
          <h1> Enter OTP </h1>
          <p>Please enter an otp that was sent to your mobile or email</p>

          <form action=''>
            <div className='driverReg-info'>
              <label className='driver-name' for='otp'></label>
              <input
                className='payment-i'
                placeholder='Please Enter OTP'
                type='text'
                id='otp'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />

              <div class='otp-submit'>
                <button className='driver-btn' onClick={verify} type='submit'>
                  {' '}
                  Submit{' '}
                </button>
              </div>
            </div>
          </form>
        </>
      </div>
    </>
  )
}

export default Verified
