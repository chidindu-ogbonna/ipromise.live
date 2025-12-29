import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Create email HTML content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0B0E14 0%, #1a1d24 100%); color: #00FF41; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
            .value { font-size: 16px; color: #0B0E14; }
            .footer { text-align: center; margin-top: 30px; color: #999; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🎯 New Access Request</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">ProCo Landing Page</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #00FF41;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message || 'No message provided'}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent from ProCo Landing Page • ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Access Request from ProCo Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message || 'No message provided'}

---
Sent from ProCo Landing Page
${new Date().toLocaleString()}
    `.trim();

    // Check if email credentials are configured
    const emailConfigured = process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASSWORD;

    if (emailConfigured) {
      // Create transporter
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Send email
      await transporter.sendMail({
        from: `"ProCo Access Requests" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
        to: 'promise@fela.ai',
        subject: `🚀 New Access Request from ${name}`,
        text: emailText,
        html: emailHtml,
        replyTo: email,
      });

      return NextResponse.json(
        {
          success: true,
          message: 'Request sent successfully'
        },
        { status: 200 }
      );
    } else {
      // Log to console if email is not configured
      console.log('\n' + '='.repeat(60));
      console.log('📧 NEW ACCESS REQUEST');
      console.log('='.repeat(60));
      console.log(emailText);
      console.log('='.repeat(60) + '\n');

      return NextResponse.json(
        {
          success: true,
          message: 'Request received successfully (email not configured)',
          debug: process.env.NODE_ENV === 'development' ? {
            note: 'Email credentials not configured. Set EMAIL_HOST, EMAIL_USER, EMAIL_PASSWORD in .env.local',
            to: 'promise@fela.ai',
            from: email,
            content: emailText
          } : undefined
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

