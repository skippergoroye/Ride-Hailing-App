import React from 'react'
import Video from '../assets/car.mp4'
import Image from '../assets/driv.jpeg'
import img from '../assets/car.png'
import phone from '../assets/phone.webp'
import map from '../assets/mapp.png'
import apple from '../assets/apple.png'
import google from '../assets/google2.png'
import wallet from '../assets/wahlet.jpeg'
import { Link, Outlet } from 'react-router-dom'
import facebook from '../assets/facebooksq.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import linke from '../assets/lin.png'
import tik from '../assets/tiktok.jpeg'

const Section = () => {
  return (
    <>
      <main>
        <div className='main'>
          <div className='overlay'></div>
          <video src={Video} autoPlay loop muted />
          <div className='content'>
            <h1 className='main-h'>welcome</h1>
            <p className='main-p '> To</p>
            <p className='main-p '> Affordable Rides!....</p>

            <ul className='main-links'>
              <li>
                {' '}
                <Link className='main-link' to='/user-login'>
                  Book A Ride
                </Link>
              </li>
              <li>
                {' '}
                <Link className='main-link' to='/driver-login'>
                  Login As A Driver{' '}
                </Link>
              </li>
            </ul>
          </div>

          <div className='body'>
            <div className='container'>
              <div className='container-img'>
                <img src={Image} alt='Driver' />
              </div>
              <div className=''>
                <h1 className='container-text'>
                  Ride With The Most Comfortable,
                  <br />
                  Affordable, Experience <br />
                  And Fast Drivers{' '}
                </h1>
              </div>
            </div>
          </div>

          <div className='hero'>
            <div className='banner-hero'>
              <div className='banner-text'>
                <h1 className='banner-h'>Earn Extra Money Driving</h1>
                <p className='banner-p '>
                  Set your own schedule, be your own boss.
                </p>
              </div>
              <div className='banner-btn'>
                <Link className='banner-link' to='/driver-registration'>
                  Sign Up To Become A Driver{' '}
                </Link>
              </div>
            </div>
          </div>

          <section className='svg-all'>
            <div className='svg-container'>
              <div className='first-svg'>
                <img className='svg' src={img} alt='kar' />
                <h3 className='svg-h'>Book A Ride</h3>
                <p className='svg-p '>Get to your destination with ease</p>
              </div>

              <div className='first-svg'>
                <img className='svg' src={wallet} alt='wallet' />
                <h3 className='svg-h'>The Most Affordable Price</h3>
                <p className='svg-p '>
                  We aim to offer the most affordable <br /> ride prices in
                  every city.
                  <br /> See for yourself!...
                </p>
              </div>

              <div className='first-svg'>
                <img className='svg' src={phone} alt='phone' />
                <h3 className='svg-h'>Easy To Use</h3>
                <p className='svg-p '>
                  Get too your destination as quick and as fast as possible.
                </p>
              </div>
            </div>
          </section>

          <section className='pick-ride'>
            <div className='pick-container'>
              <img className='map' src={map} alt='mapp' />
              <div className='pick'>
                <h3 className='pick-h'>Get a ride with ease!</h3>
                <p className='pick-p '>
                  Pick your destination, book a ride, <br /> meet your driver
                  and enjoy the ride!......
                </p>
              </div>
            </div>
          </section>

          <section className='win'>
            <div className='win-container'>
              <h1 className='win-h'>Want A Free Ride? Download Now</h1>
              <p className='win-p '>
                Refer a friend to win free rides, concert tickets and so much
                more on Us.
              </p>
              <p className='win-av'>Available for all mobile devices</p>
              <img className='svg' src={apple} alt='phone' />
              <img className='svg' src={google} alt='phone' />
            </div>
            <div className='win-img'></div>
          </section>

          <div className='footer'>
            <section className='footer-all'>
              <div className='footer-container'>
                <div id='first-footer'>
                  <h3 className='footer-h'>Companay</h3>
                  <p className='footer-p'>About Us</p>
                  <p className='footer-p'>Our Offers</p>
                  <p className='footer-p'>Newsroom</p>
                  <p className='footer-p'>Investors</p>
                  <p className='footer-p'>Carrer</p>
                  <p className='footer-p'>Brand Guidelines</p>
                  <p className='footer-p'>All</p>
                </div>

                <div className='first-svg'>
                  <h3 className='footer-h'>Partner With US</h3>
                  <p className='footer-p'>Sign Up AS A Partner</p>
                  <p className='footer-p'>Sign To Be A Driver</p>
                  <p className='footer-p'>Reffer A Friend</p>
                  <p className='footer-p'>Influencers</p>
                </div>

                <div className='first-svg'>
                  <h3 className='footer-h'>Explore</h3>
                  <p className='footer-p'>How to use </p>
                  <p className='footer-p'>News & Events</p>
                  <p className='footer-p'>Blogs</p>
                  <p className='footer-p'>Privacy Policy</p>
                </div>

                <div className='first-svg'>
                  <h3 className='footer-h'>Contact US</h3>
                  <p>
                    Okhoromi community, Decagon Institute, <br /> Ohen St, Benin
                    City
                  </p>
                  <p>0-123456789</p>
                  <p>support@help.com</p>
                </div>
              </div>
            </section>

            <div className='footer-img'>
              <img className='footer-im' src={facebook} alt='facebook' />
              <img className='footer-im' src={twitter} alt='twitter' />
              <img className='footer-im' src={insta} alt='instagram' />
              <img className='footer-im' src={linke} alt='linkedin' />
              <img className='footer-im' src={tik} alt='tik-tok' />
            </div>
          </div>
        </div>

        <Outlet />
      </main>
    </>
  )
}

export default Section
