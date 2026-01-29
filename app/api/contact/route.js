import nodemailer from 'nodemailer';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-\s()]{7,}$/;

async function sendErrorAlert({ error, payload }) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"ARCA AI Alerts" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      cc: process.env.CONTACT_CC_EMAIL,
      subject: '⚠️ Contact Form Submission Failed',
      text: `
A user attempted to submit the contact form, but an error occurred.

Error:
${error?.message || 'Unknown error'}

Payload (sanitized):
Name: ${payload.firstName} ${payload.lastName}
Email: ${payload.email}
Phone: ${payload.phone}
Interest: ${payload.interest}
Message: ${payload.message}

Timestamp:
${new Date().toISOString()}
      `,
    });
  } catch (err) {
    // last-resort logging only
    console.error('Failed to send error alert email', err?.message);
  }
}


export async function POST(req) {
    try {
        const body = await req.json();
        
        const {
            firstName,
            lastName,
            email,
            phone,
            interest,
            message,
        } = body;

        // 🔐 Server-side validation (never trust frontend)
        if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !interest ||
        !message
        ) {
        return Response.json(
            { message: 'Missing required fields' },
            { status: 400 }
        );
        }

        if (!emailRegex.test(email)) {
        return Response.json(
            { message: 'Invalid email address' },
            { status: 400 }
        );
        }

        if (!phoneRegex.test(phone)) {
        return Response.json(
            { message: 'Invalid phone number' },
            { status: 400 }
        );
        }

        if (message.length < 10) {
        return Response.json(
            { message: 'Message is too short' },
            { status: 400 }
        );
        }

        // google smtp transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        function renderRow(label, value) {
        return `
            <tr>
            <td style="padding:8px 0;font-size:13px;color:#6b7280;width:120px;vertical-align:top;">
                ${label}
            </td>
            <td style="padding:8px 0;font-size:14px;color:#111827;font-weight:500;">
                ${value}
            </td>
            </tr>
        `;
        }


        // Email content ( clean & professional )
        await transporter.sendMail({
            from: `"ARCA AI Website" <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL,
            cc: process.env.CONTACT_CC_EMAIL,
            replyTo: email,
            subject: `New Contact Form Submission – ${firstName} ${lastName}`,
            text: `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone}
            Interest: ${interest}
            Message:${message}`,

              // HTML version
            html: `
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8;padding:24px;font-family:Arial,Helvetica,sans-serif;">
                <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background-color:#0f766e;padding:20px 24px;">
                        <h1 style="margin:0;font-size:20px;color:#ffffff;font-weight:600;">
                            New Contact Form Submission
                        </h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding:24px;">
                        <p style="margin:0 0 16px;color:#374151;font-size:14px;">
                            A new enquiry has been submitted through the website contact form.
                        </p>

                        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                            ${renderRow('Name', `${firstName} ${lastName}`)}
                            ${renderRow('Email', email)}
                            ${renderRow('Phone', phone)}
                            ${renderRow('Interest', interest)}
                        </table>

                        <div style="margin-top:24px;">
                            <p style="margin:0 0 8px;font-size:13px;color:#6b7280;font-weight:600;">
                            Message
                            </p>
                            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:12px;font-size:14px;color:#111827;white-space:pre-line;">
                            ${message}
                            </div>
                        </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background:#f9fafb;padding:16px 24px;font-size:12px;color:#6b7280;">
                        This email was generated automatically from the ARCA AI website contact form.
                        </td>
                    </tr>

                    </table>
                </td>
                </tr>
            </table>
            `,
        });
        return Response.json({ success:true });
    } catch (error) {
        console.error('Contact form submission failed', {
            errorMessage:error?.message,
            errorCode: error?.code,
            source : '/api/contact',
        });

        await sendErrorAlert({
            error,
            payload: {
                firstName,
                lastName,
                email,
                phone,
                interest,
                message,
            },
        });

        return Response.json(
            { message: 'Something went wrong while submitting the form. Please try again later.'},
            { status: 500 }
        );
    }   
}


// mnio zqfh olst yssn 