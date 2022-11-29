import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from './footer'
const DriverLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Driversignin = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/driver/login', {
        email: email,
        password: password,
      })
      .then(
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
      <div className='driverReg-container'>
        <div className='driverReg-info'>
          <h2 className='driver-h2'> Driver's Login</h2>
        </div>

        <form action=''>
          <div className='driver-container'>
            <div class='driver-group'>
              <label className='driver-in' for='email'>
                Email
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='driver-group'>
              <label className='driver-in' for='password'>
                Password
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='driver-submit'>
              <button
                className='driver-btn'
                onClick={Driversignin}
                type='submit'
              >Login</button>
              <Link className='log-btn' to='/driver-registration'>
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default DriverLogin
