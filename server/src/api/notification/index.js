import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { whatsapp, callCCR } from './controller'

const router = new Router({ mergeParams: true })

router.post('/whatsapp',
  body({ number: String, message: String }),
  whatsapp)

router.post('/callccr',
  body({ number: String, message: String }),
  callCCR)

export default router
