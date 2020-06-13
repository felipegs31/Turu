import { Router } from 'express'
import notification from './notification'
const router = new Router()

router.use('/notification', notification)

export default router
