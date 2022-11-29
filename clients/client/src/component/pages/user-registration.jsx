import { useState } from 'react'
import axios from 'axios'
// import verification from '../pages/verification'
import { useNavigate } from 'react-router-dom'
import Footer from './footer'

const UserReg = (e) => {
  const navigate = useNavigate()
  // e.prevent.default();
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirm_Password] = useState('')

  const register = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/users/register', {
        fullName,
        email,
        phone,
        address,
        password,
        confirm_password,
      })
      .then(
        (response) => {
          if (response.data.signature) {
            localStorage.setItem('signature', response.data.signature)
            navigate('/verification')
          }
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
          <h2 className='driver-h2'>Register To Book A Ride</h2>
        </div>

        <form action=''>
          <div className='driver-container'>
            <div class='driver-group'>
              <label className='driver-in' for='fullname'>
                Full Name
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='fullname'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='driver-group'>
              <label className='driver-in' for='email'>
                Email
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='driver-group'>
              <label className='driver-in' for='phone'>
                Phone
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='tel'
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='driver-group'>
              <label className='driver-in' for='address'>
                Address
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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

            <div class='driver-group'>
              <label className='driver-in' for='confirm_password'>
                Confirm Password
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='password'
                  id='confirm_password'
                  value={confirm_password}
                  onChange={(e) => setConfirm_Password(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='driver-submit'>
              <button className='driver-btn' onClick={register} type='submit'>
                {' '}
                Submit{' '}
              </button>
            </div>
          </div>
        </form>
      </div>
   <Footer/>
    </>
  )
}

export default UserReg
