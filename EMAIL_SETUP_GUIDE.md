# Email Setup Guide for Contact Form

## Overview
This guide explains how to set up email functionality for the contact form so you receive emails when users submit the form.

## Backend Changes Made

### 1. New Files Created:
- `ContactController.java` - Handles contact form submissions
- `ContactFormDTO.java` - Data transfer object for form validation
- `EmailService.java` - Service for sending emails

### 2. Dependencies Added:
- Added `spring-boot-starter-mail` to `pom.xml`

### 3. Configuration Added:
- Email configuration in `application.properties`
- Updated `CompanyInfoService.java` to return your contact details

## Email Configuration Setup

### Step 1: Gmail App Password Setup
1. **Enable 2-Factor Authentication** on your Gmail account (aadhyaeduverse@divyaam.net)
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

### Step 2: Environment Variables
Set these environment variables on your system:

**Windows (PowerShell):**
```powershell
$env:EMAIL_USERNAME="aadhyaeduverse@divyaam.net"
$env:EMAIL_PASSWORD="your-16-character-app-password"
```

**Windows (Command Prompt):**
```cmd
set EMAIL_USERNAME=aadhyaeduverse@divyaam.net
set EMAIL_PASSWORD=your-16-character-app-password
```

**Linux/Mac:**
```bash
export EMAIL_USERNAME="aadhyaeduverse@divyaam.net"
export EMAIL_PASSWORD="your-16-character-app-password"
```

### Step 3: Alternative Configuration
If you prefer not to use environment variables, you can directly update `application.properties`:

```properties
spring.mail.username=aadhyaeduverse@divyaam.net
spring.mail.password=your-16-character-app-password
```

**⚠️ Security Warning:** Never commit real passwords to version control!

## How It Works

### 1. Contact Form Submission:
- User fills out the contact form on your website
- Form data is sent to `/api/contact/send` endpoint
- Backend validates the data using `ContactFormDTO`

### 2. Email Processing:
- `EmailService` creates an email with:
  - **To:** aadhyaeduverse@divyaam.net (your email)
  - **From:** User's email address
  - **Subject:** [Contact Form] + User's subject
  - **Body:** Formatted message with user details

### 3. Email Content Example:
```
Subject: [Contact Form] Inquiry about Java Training

New contact form submission from Aadhya Eduverse website:

Name: John Doe
Email: john.doe@example.com
Subject: Inquiry about Java Training

Message:
Hi, I'm interested in your Java training program. 
Could you please provide more details about the course duration and fees?

---
This email was sent from the contact form on your website.
Please reply directly to this email to respond to the sender.
```

## Testing the Setup

### 1. Start the Backend:
```bash
cd D:/projects/aadhya_studio/aadhya
mvn spring-boot:run
```

### 2. Start the Frontend:
```bash
cd D:/projects/aadhya_studio/aadhya/src/main/resources/static
npm start
```

### 3. Test the Contact Form:
1. Navigate to the Contact page
2. Fill out the form with test data
3. Submit the form
4. Check your email (aadhyaeduverse@divyaam.net) for the message

## Troubleshooting

### Common Issues:

#### 1. "Authentication failed" Error:
- **Solution:** Ensure 2FA is enabled and you're using an App Password, not your regular Gmail password

#### 2. "Connection refused" Error:
- **Solution:** Check if Gmail SMTP is blocked by firewall or antivirus

#### 3. Environment Variables Not Working:
- **Solution:** Restart your IDE/terminal after setting environment variables

#### 4. Contact Details Not Updating:
- **Solution:** The backend now returns default values. Clear browser cache or check if backend is running

### Email Provider Alternatives:

If Gmail doesn't work, you can use other providers:

**Outlook/Hotmail:**
```properties
spring.mail.host=smtp-mail.outlook.com
spring.mail.port=587
```

**Yahoo:**
```properties
spring.mail.host=smtp.mail.yahoo.com
spring.mail.port=587
```

## Security Best Practices

1. **Never commit passwords** to version control
2. **Use environment variables** for sensitive data
3. **Enable 2FA** on your email account
4. **Use App Passwords** instead of regular passwords
5. **Regularly rotate** App Passwords

## Frontend Changes Made

### 1. Contact Form Enhancements:
- Added loading state during submission
- Added success/error message display
- Improved form validation and user feedback

### 2. Contact Information Updates:
- Updated all hardcoded contact details to your information
- Added fallback data handling for API failures

### 3. API Integration:
- Added `sendContactEmail` function to `api.js`
- Integrated with backend contact endpoint

## Production Deployment Notes

### 1. Environment Variables:
Set these on your production server:
- `EMAIL_USERNAME`
- `EMAIL_PASSWORD`

### 2. CORS Configuration:
Update CORS settings in production to allow your domain only

### 3. Rate Limiting:
Consider adding rate limiting to prevent spam submissions

### 4. Email Templates:
You can enhance the email service to use HTML templates for better formatting

## Support

If you encounter any issues:
1. Check the backend logs for error messages
2. Verify environment variables are set correctly
3. Test email configuration with a simple test endpoint
4. Ensure your email provider allows SMTP access

The contact form is now fully functional and will send emails directly to your inbox at aadhyaeduverse@divyaam.net!