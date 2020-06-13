import httpStatus from 'http-status'
import twilio from 'twilio'

export const whatsapp = async ({ bodymen: { body: { number, message } } }, res, next) => {
  var client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

  let response = {}
  try {
    response = await client.messages.create({
      body: message,
      to: `whatsapp:+${number}`,  // Text this number
      from: process.env.TWILIO_WHATSAPP_SENDER // From a valid Twilio number
    })
    console.log("chegou response: ", response)
  } catch (e) {
    console.log("dei erro: ", e)
  }

  res.status(httpStatus.OK).json(response)
}

export const callCCR = async ({ body }, res, next) => {
  res.status(httpStatus.OK).json({ ok: 'ok' })
}