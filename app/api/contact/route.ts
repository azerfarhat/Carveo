import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, agency, fleetSize } = body

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouvelle demande de démo - ${agency}`,
      html: `
        <h2>Nouvelle demande de démonstration</h2>
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Nom :</strong> ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Agence :</strong> ${agency}</p>
        <p><strong>Taille de la flotte :</strong> ${fleetSize}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    )
  }
}
