import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import linke from '../assets/lin.png'
import tik from '../assets/tiktok.jpeg'
import facebook from '../assets/facebooksq.png'

const Footer = () => {
    return ( 

       

    <footer>


<div className="real-footer">

<section className="real-footer-all">
    <div className="footer-container">
        <div id="first-footer">

            <h3 className='footer-h'>Companay</h3>
            <p className='footer-p'>About Us</p>
            <p className='footer-p'>Our Offers</p>
            <p className='footer-p'>Newsroom</p>
            <p className='footer-p'>Investors</p>
            <p className='footer-p'>Carrer</p>
            <p className='footer-p'>Brand Guidelines</p>
            <p className='footer-p'>All</p>
        </div>


        <div className="first-svg">

            <h3 className='footer-h'>Partner With US</h3>
            <p className='footer-p'>Sign Up AS A Partner</p>
            <p className='footer-p'>Sign To Be A Driver</p>
            <p className='footer-p'>Reffer A Friend</p>
            <p className='footer-p'>Influencers</p>
        </div>



        <div className="first-svg">

            <h3 className='footer-h'>Explore</h3>
            <p className='footer-p'>How to use  </p>
            <p className='footer-p'>News & Events</p>
            <p className='footer-p'>Blogs</p>
            <p className='footer-p'>Privacy Policy</p>
        </div>

        <div className="first-svg">

            <h3 className='footer-h'>Contact US</h3>
            <p>Okhoromi community, Decagon Institute, <br /> Ohen St, Benin City</p>
            <p>0-123456789</p>
            <p>support@help.com</p>
        </div>


        <div className="footer-img">
            <img className="footer-im" src={facebook} alt="facebook" />
            <img className="footer-im" src={twitter} alt="twitter" />
            <img className="footer-im" src={insta} alt="instagram" />
            <img className="footer-im" src={linke} alt="linkedin" />
            <img className="footer-im" src={tik} alt="tik-tok" />

        </div>
    </div>


</section>



</div>



          </footer>

   
        // <div className="footer">
        //     <h1> I am the footer</h1>
        // </div>
        
     );
}
 
export default Footer;