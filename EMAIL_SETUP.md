# Email Setup Instructions

To enable the "Request Access" form to send emails to `promise@fela.ai`, you need to configure SMTP credentials.

## Quick Setup

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

```env
# SMTP Server Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false

# Email Authentication
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Optional: Custom "From" address
EMAIL_FROM=noreply@proco.com
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** in your Google Account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password
3. **Update `.env.local`**:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ```

## Other SMTP Providers

### SendGrid
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
```

### Mailgun
```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=your-mailgun-smtp-username
EMAIL_PASSWORD=your-mailgun-smtp-password
```

### AWS SES
```env
EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
EMAIL_PORT=587
EMAIL_USER=your-ses-smtp-username
EMAIL_PASSWORD=your-ses-smtp-password
```

## Testing

Without email configuration, the form will:
- Still work and show success messages
- Log request details to the console
- Return debug information in development mode

To test the email functionality:
1. Configure your SMTP credentials
2. Fill out the Request Access form
3. Check `promise@fela.ai` inbox for the email

## Email Format

The email sent will include:
- **Subject**: 🚀 New Access Request from [Name]
- **To**: promise@fela.ai
- **Reply-To**: User's email address
- **Content**: Name, Email, Company, Message

The email is beautifully formatted with HTML and includes a plain-text fallback.

