# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to complete the setup:

## 1. Create an EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## 2. Add Email Service

1. In the dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy your **Service ID**

## 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello Tarun,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy your **Template ID**

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy it

## 5. Update Environment Variables

Open `.env.local` and replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Restart Dev Server

```bash
npm run dev
```

## 7. Test Your Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your email for the message!

## Template Variables

The form sends these variables to your EmailJS template:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message
- `{{to_name}}` - Your name (hardcoded as "Tarun Lakra")

## Troubleshooting

### Form not working?
- Check browser console for errors
- Verify all environment variables are set correctly
- Make sure you restarted the dev server after adding env vars

### Not receiving emails?
- Check EmailJS dashboard for delivery status
- Verify your email template is active
- Check spam folder
- Ensure your email service is connected properly

### Error messages?
- "EmailJS configuration missing" = Environment variables not set
- Check `.env.local` file exists and has correct values

## Free Tier Limits

- **200 emails/month** on free plan
- Upgrade to paid plan for more emails
- Monitor usage in EmailJS dashboard

## Security Note

✅ Your EmailJS credentials are safe because:
- They're only exposed on the client-side (NEXT_PUBLIC prefix)
- EmailJS requires domain verification
- Rate limiting is built into EmailJS
- Only your configured template can be used

---

**Need Help?** Visit [EmailJS Documentation](https://www.emailjs.com/docs/)
