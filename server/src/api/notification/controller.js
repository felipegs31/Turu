import httpStatus from 'http-status'
import twilio from 'twilio'
import totalvoice from 'totalvoice-node'

export const whatsapp = async ({ bodymen: { body: { number, message } } }, res, next) => {
  var client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

  let response = {}
  try {
    response = await client.messages.create({
      body: message,
      to: `whatsapp:+${number}`,
      from: process.env.TWILIO_WHATSAPP_SENDER
    })
  } catch (e) {
    console.log("error sendWhatsApp: ", e)
  }

  res.status(httpStatus.OK).json(response)
}

export const callCCR = async ({ bodymen: { body: { number, message } } }, res, next) => {
  const client = new totalvoice(process.env.TOTAL_VOICE_ACCESS_TOKEN)
  let response = {}
  const options = { velocidade: 1, tipo_voz: "br-Vitoria" }
  try {
    response = await client.tts.enviar(number, message, options)
  } catch (e) {
    console.log("erro callTTS", e)
  }
  res.status(httpStatus.OK).json(response)
}