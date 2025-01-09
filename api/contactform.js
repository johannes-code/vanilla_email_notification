import { Resend }  from "resend"

const apiKey = process.env.RESEND_API_KEY
const resend = new Resend(apiKey)

export async function POST(request) {
    const data = await request.json();
    console.log(data);
    // resend.emails.send({
    //     from: "contact@resend.dev",
    //     to: "johannes24sfj@gmail.com",
    //     subject: "Contact wanted",
    //     html: `
    //         <h1> Message from somebody</h1>
    //         <p> They said nice things about med</p>  `

    // })
    return new Response ("Hello world!")
}

