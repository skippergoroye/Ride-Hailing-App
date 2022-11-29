import { useState } from 'react'
import axios from 'axios'
import Footer from './footer'

const DriverReg = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [driverL, setDriverL] = useState('')
  const [typeOfcar, setTypeOfcar] = useState('')

  const DriverRegister = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/driver/register', {
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        password: password,
        typeOfcar: typeOfcar,
        driverL: driverL,
      })
      .then(
        (response) => {
          // if(response.data.signature) {
          //     localStorage.setItem('user', JSON.stringify(response))
          // }
          // return response.data
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
          <h2 className='driver-h2'> Driver's Info Registration </h2>
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
              <label className='driver-in' for='driverL'>
                Driver's Licence
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='driverL'
                  value={driverL}
                  onChange={(e) => setDriverL(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='driver-group'>
              <label className='driver-in' for='typeOfcar'>
                Type Of Car
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='typeOfcar'
                  value={typeOfcar}
                  onChange={(e) => setTypeOfcar(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='driver-submit'>
              <button
                className='driver-btn'
                onClick={DriverRegister}
                type='submit'
              >
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

export default DriverReg
