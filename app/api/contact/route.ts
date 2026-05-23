import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      website,
      service_type,
      specialty,
      healthcare_type,
      message,
      form_origin,
    } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        {
          error: 'Missing required fields: fullName, email, and phone are required.',
        },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_FORM_RECIPIENT || 'meditrackservicesllc@gmail.com';
    const formOrigin = form_origin || 'Contact Form Submission';
    const emailSubject = `${formOrigin} from ${fullName}`;
    const emailText = `New Contact Form Submission\n\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website || 'Not provided'}\nService Type: ${service_type || 'Not specified'}\nSpecialty: ${specialty || 'Not specified'}\nHealthcare Type: ${healthcare_type || 'Not specified'}\n${message ? `Message: ${message}\n` : ''}Submitted on: ${new Date().toLocaleString()}`;
    const emailHtml = `<p><strong>New Contact Form Submission</strong></p><p><strong>Full Name:</strong> ${fullName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Website:</strong> ${website || 'Not provided'}</p><p><strong>Service Type:</strong> ${service_type || 'Not specified'}</p><p><strong>Specialty:</strong> ${specialty || 'Not specified'}</p><p><strong>Healthcare Type:</strong> ${healthcare_type || 'Not specified'}</p>${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}<p><em>Submitted on: ${new Date().toLocaleString()}</em></p>`;

    await sendEmail({
      to: recipient,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Email sent successfully.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}