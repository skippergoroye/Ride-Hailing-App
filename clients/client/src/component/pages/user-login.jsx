import { Link, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const [error, setErrorMsg] = useState("");

  const login = (e) => {
    e.preventDefault()
    const error = axios.post('http://localhost:3001/users/login', { email, password }).then(
     
      (response) => { if (email == email && password==password) {
        navigate('/dashboard')
      }
      },

      
    )
  }

  return (
    <>
    <div></div>
      <div className='driverReg-container'>
        <div className='driverReg-info'>
          <h2 className='driver-h2'>Login To Book A Ride</h2>
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
                 {error.test && <p>{error.response}</p>}
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
                  id='passworw'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='user-submit'>
              <button className='driver-btn' onClick={login} type='submit'>
                {' '}
                Login{' '}
              </button>
              <Link className='log-btn' to='/user-registration'>
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

export default UserLogin
