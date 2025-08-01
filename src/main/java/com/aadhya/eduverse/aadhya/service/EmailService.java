package com.aadhya.eduverse.aadhya.service;

import com.aadhya.eduverse.aadhya.dto.ContactFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${app.contact.email:aadhyaeduverse@divyaam.net}")
    private String contactEmail;

    @Value("${app.contact.name:Aadhya Eduverse}")
    private String contactName;

    public void sendContactEmail(ContactFormDTO contactForm) {
        try {
            // Create email message
            SimpleMailMessage message = new SimpleMailMessage();
            
            // Set recipient (your business email)
            message.setTo(contactEmail);
            
            // Set sender (must be the authenticated email address)
            message.setFrom(fromEmail);
            message.setReplyTo(contactForm.getEmail());
            
            // Set subject with prefix
            message.setSubject("[Contact Form] " + contactForm.getSubject());
            
            // Create email body
            StringBuilder emailBody = new StringBuilder();
            emailBody.append("New contact form submission from ").append(contactName).append(" website:\n\n");
            emailBody.append("Name: ").append(contactForm.getName()).append("\n");
            emailBody.append("Email: ").append(contactForm.getEmail()).append("\n");
            emailBody.append("Subject: ").append(contactForm.getSubject()).append("\n\n");
            emailBody.append("Message:\n");
            emailBody.append(contactForm.getMessage()).append("\n\n");
            emailBody.append("---\n");
            emailBody.append("This email was sent from the contact form on your website.\n");
            emailBody.append("Please reply directly to this email to respond to the sender.");
            
            message.setText(emailBody.toString());
            
            // Send the email
            mailSender.send(message);
            
        } catch (org.springframework.mail.MailAuthenticationException e) {
            throw new RuntimeException("Email authentication failed. Please check your email credentials and ensure you're using an App Password for Gmail.", e);
        } catch (org.springframework.mail.MailSendException e) {
            throw new RuntimeException("Failed to send email. Please check your email configuration and network connection.", e);
        } catch (Exception e) {
            throw new RuntimeException("Unexpected error while sending email: " + e.getMessage(), e);
        }
    }
}