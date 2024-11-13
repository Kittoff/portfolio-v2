import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, name, help, tel, company } = await request.json();

  // Validation simple des données
  if (!email || !name || !help) {
    return NextResponse.json(
      { error: "Tous les champs obligatoires doivent être remplis." },
      { status: 400 },
    );
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message de ${name} (${email})`,
    text: `Message: ${help}\nEntreprise: ${company}\nTéléphone: ${tel}`,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email envoyé avec succès" });
  } catch (err) {
    console.error("Erreur lors de l'envoi de l'email :", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email." },
      { status: 500 },
    );
  }
}
