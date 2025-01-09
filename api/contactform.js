import { Resend }  from "resend"

const apiKey = process.env.RESEND_API_KEY
const resend = new Resend(apiKey)

export async function POST(request) {
    const contactFormData = await request.json();
    const result = await resend.emails.send({
        from: "contact@resend.dev",
        to: "johannes24sfj@gmail.com",
        replyTo: contactFormData.email,
        subject: "ContactForm",
        html: `
            <h1> You got attention! </h1>
            <h2>${contactFormData.name} </h2>
            <h2>${contactFormData.email} </h2>
            <p>${contactFormData.message} </p>  `

    })
    return new Response ("Hello world!")
}

