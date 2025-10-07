package com.project.vedantra.vedantra_ai.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    // ✅ 1. Send email to the client who submitted the contact form
    public void sendConfirmationToClient(String toEmail, String name) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(toEmail);
            helper.setSubject("Thank you for contacting us!");

            String htmlContent = """
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #1c0033; color: white;">
    <div style="max-width:600px; margin:auto; padding:20px; background-color:#2a004d; border-radius:10px;">
      <h2 style="color:#eebfff; text-align:center;">Thank You, %s!</h2>
      
      <p style="font-size:16px; line-height:1.6; margin-top:20px;">
        We’ve received your message and our team will respond shortly. Your interest in <strong style="color:#cba0ff;">Team Vedantra</strong> means a lot to us!
      </p>
      
      <p style="font-size:15px; color:#ccc;">While you wait, feel free to check out our website or reply to this mail for any further queries.</p>
      
      <div style="text-align:center; margin-top:30px;">
        <a href="https://vedantra.com" target="_blank"
           style="display:inline-block; padding:12px 24px; background-color:#6c2b9a; color:white; text-decoration:none; border-radius:8px;">
           Visit Our Website
        </a>
      </div>

      <hr style="margin-top:40px; border:1px solid #3a005f;">
      
      <p style="font-size:13px; color:#999; text-align:center;">
        © 2025 Vedantra. All rights reserved. | This message was sent from our contact form.
      </p>
    </div>
  </body>
</html>
""".formatted(name);

            helper.setText(htmlContent, true);
            helper.setFrom("no-reply@vedantra.com"); // Can also leave this blank if set in properties
            mailSender.send(message);

        } catch (MessagingException e) {
            e.printStackTrace(); // Log this in prod properly
        }
    }

    // ✅ 2. Notify your admin email with form details
    public void notifyAdmin(String name, String email, String phone, String service, String messageText) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo("vedantraai@gmail.com"); // Replace with valid admin email
            helper.setSubject("📝 New Contact Form Submission");

            String htmlContent = """
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #fff8f8; border-radius: 8px;">
                <h2 style="color: #6a1b9a;">🚀 New Contact Request Received</h2>
                <table style="width:100%%; font-size: 16px; margin-top: 10px;">
                    <tr><td><strong>Name:</strong></td><td>%s</td></tr>
                    <tr><td><strong>Email:</strong></td><td>%s</td></tr>
                    <tr><td><strong>Phone:</strong></td><td>%s</td></tr>
                    <tr><td><strong>Service Selected:</strong></td><td>%s</td></tr>
                    <tr><td><strong>Message:</strong></td><td>%s</td></tr>
                </table>
              
            </div>
        """.formatted(name, email, phone, service, messageText);

            helper.setText(htmlContent, true);
            helper.setFrom("no-reply@vedantra.com");

            mailSender.send(message);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

}
