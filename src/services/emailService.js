// services/emailService.js
const nodemailer = require('nodemailer');

exports.sendEmail = (formData) => {
    return new Promise((resolve, reject) => {
        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `work@tixteen.com`,
                pass: 'iqexkytojdibsru'
            }
        });


        console.log(formData.email, 'email');
        // Email message
        const mailOptions = {
            from: `${formData.firstName} ${formData.email} `,
            to: 'sachingautam6239@gmail.com',
            subject: 'Testing Email',
            html: `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            padding: 20px;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: auto;
                            background-color: #fff;
                            padding: 40px;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #333;
                        }
                        p {
                            color: #666;
                            margin-bottom: 20px;
                        }
                        strong {
                            color: #000;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <h1>New Form Submission</h1>
                        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Phone:</strong> ${formData.phone}</p>
                        <p><strong>Address:</strong> ${formData.address}</p>
                        <p><strong>Message:</strong> ${formData.message}</p>
                    </div>
                </body>
            </html>
            `
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
};
