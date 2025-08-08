# Email Setup for Contact Form

## Setup Instructions

### 1. Create Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Gmail App Password Setup
For Gmail, you need to use an App Password instead of your regular password:

1. **Enable 2-Factor Authentication** on your Google account
2. Go to **Google Account settings** > **Security** > **App passwords**
3. Generate a new app password for "Mail"
4. Use that password in your `EMAIL_PASS` environment variable

### 3. Alternative Email Services
You can also use other email services by modifying the transporter configuration in `pages/api/contact.js`:

#### For Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransporter({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

#### For Custom SMTP:
```javascript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-host.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

### 4. Install Dependencies
Run the following command to install nodemailer:

```bash
npm install
```

### 5. Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the received message

## Security Notes
- Never commit your `.env.local` file to version control
- Use App Passwords instead of regular passwords
- Consider using email services like SendGrid or Resend for production
