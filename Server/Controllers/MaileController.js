import express from "express";
import mailer from "nodemailer";

const sendMail = async(user, res) =>
{
    const transporter = mailer.createTransport(
        {
            host : process.env.HOST,
            service : process.env.SERVICE,
            post : Number(process.env.PORT),
            secure : Boolean(process.env.SECURE),
            auth : {
                user : process.env.USER,
                pass : process.env.PASS
            },
            tls : 
        {
            rejectUnauthorized : false
        }
        }
    );

    console.log(user.body);

    const messageOptions = {
        from : `"Biotikos" <${process.env.USER}>`,
        to : user.body.email,
        subject : "Welcome To Biotikos Event",
        html : `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biotikos Orientation</title>
</head>
<body>
    <p>Dear Candidate,</p>

    <p>We are pleased to invite you to the orientation of biotikos event.</p>

    <p>Venue</p>
    <ul>
        <li><strong>Date:</strong> 29th March 2024, Monday</li>
        <li><strong>Reporting Time:</strong> 9:00 AM</li>
    </ul>

    <p>Best regards,</p>
    <p>Orgainising Team</p>
    <p>Biotikos</p>
</body>
</html>
`,
        attachments: [
            {
                filename: 'Agenda for SAMHITHA 2024.pdf',
                path: './hello.pdf'
            },
            {
                filename: 'ENTRY PASS FOR SAMHITHA.pdf',
                path: './hello2.pdf'
            }
        ]
    }

    transporter.sendMail(messageOptions, (error, info) => {
        if(error)
        {
            console.log(error);
            res.status(500).json({message : error});
        }
        res.status(200).json({message : "Successfull"});
    })
}

export default sendMail;