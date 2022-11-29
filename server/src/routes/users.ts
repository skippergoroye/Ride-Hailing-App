import express, { Request, Response, NextFunction } from 'express'
import {
  UserLogin,
  UserRegister,
  verifyUser,
} from '../controllers/userController'

const router = express.Router()

import { acceptRide, bookRide, showRide } from '../controllers/tripController'
import { auth } from '../middlewares/auth'

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource')
})

router.post('/book-ride', auth, bookRide)
router.patch('/show-ride',auth, showRide)
router.patch('/accept-ride',auth, acceptRide)
router.patch('/end-ride',auth, acceptRide)

/* GET users listing. */
router.post('/register', UserRegister)

router.post('/verify/:signature', verifyUser)

router.post('/login', UserLogin)

export default router
