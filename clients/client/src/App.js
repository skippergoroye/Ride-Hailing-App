import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './component/pages/navbar'
import Section from './component/pages/section'
import NotFound from './component/pages/notFound'
import DriverReg from './component/pages/driver-registration'
import DriverLogin from './component/pages/driver-login'
import UserLogin from './component/pages/user-login'
import UserReg from './component/pages/user-registration'
import Payment from './component/pages/payment'
import Verified from './component/pages/verification'
import About from './component/pages/about'
import Test from './maptest/Test'
import RideAccepted from './maptest/RideAccepted'
import Footer from './component/pages/footer'


function App() {
  return (
    <>
      <main className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/about' element={<About />} />
          <Route path='payment' element={<Payment />} />
          <Route path='user-registration' element={<UserReg />} />
          <Route path='verification' element={<Verified />} />
          <Route path='driver-registration' element={<DriverReg />} />
          <Route path='driver-login' element={<DriverLogin />} />
          <Route path='user-login' element={<UserLogin />} />
          <Route exact path='/dashboard' element={<Test />}></Route>
          <Route exact path='/riding' element={<RideAccepted />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

    </>
  )
  // =======

  // function App() {
  //   return (
  //     <Router>
  //       <div className='App'>
  //         {/* <Link to="/map"> Map </Link> */}

  //         <Routes>
  //           <Route exact path='/map' element={<Test />}></Route>
  //           <Route exact path='/riding' element={<RideAccepted />}></Route>
  //         </Routes>
  //       </div>
  //     </Router>
  //   )
  // >>>>>>> dev
}

export default App
