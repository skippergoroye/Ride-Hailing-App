import { React, useState } from 'react'
import PaystackPop from '@paystack/inline-js'

const Payment = () => {
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [firstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const payWithPaystack = (e) => {
    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: 'pk_test_f8da1b4ee321fb831d8c425c14197a9adf1d63f2',
      amount: amount * 100,
      email,
      firstName,
      LastName,
      onSuccess(transaction) {
        let message = `Payment complete successfully ${transaction.reference}`
        alert(message)
        setEmail('')
        setAmount('')
        setFirstName('')
        setLastName('')
      },
      onCancel() {},
    })
  }
  return (
    <>
      <div className=' container-payment'>
        <div className='payment'>
          <h2 className='payment-h2'> Make Payment</h2>
        </div>

        <form id='paymentForm'>
          <div class='form-group'>
            <label className='payment-l' for='email'>
              Email
            </label>
            <input
              className='payment-e'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email-address'
              required
            />
          </div>
          <div class='form-group'>
            <label className='payment-l' for='amount'>
              Amount
            </label>
            <input
              className='payment-ad'
              type='tel'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              id='amount'
              required
            />
          </div>
          <div class='form-group'>
            <label className='payment-l' for='first-name'>
              First Name
            </label>
            <input
              className='payment-i'
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id='first-name'
            />
          </div>
          <div class='form-group'>
            <label className='payment-l' for='last-name'>
              Last Name
            </label>
            <input
              className='payment-i'
              type='text'
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              id='last-name'
            />
          </div>
          <div class='form-submit'>
            <button
              className='payment-btn'
              type='submit'
              onClick={payWithPaystack}
            >
              {' '}
              Pay{' '}
            </button>
          </div>
        </form>

        <script src='https://js.paystack.co/v1/inline.js'></script>
      </div>
    </>
  )
}

export default Payment
