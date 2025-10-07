package com.project.vedantra.vedantra_ai.Controller;

import com.project.vedantra.vedantra_ai.Model.ContactMessage;
import com.project.vedantra.vedantra_ai.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    @ResponseBody
    public ResponseEntity<String> submitContactForm(@RequestBody ContactMessage message) {
        try {
            // ✅ Basic validation
            if (message.getEmail() == null || message.getEmail().isEmpty() ||
                    message.getName() == null || message.getName().isEmpty() ||
                    message.getMessage() == null || message.getMessage().isEmpty()) {
                return ResponseEntity.badRequest().body("Please fill out all required fields.");
            }

            // ✅ Send confirmation to client
            emailService.sendConfirmationToClient(message.getEmail(), message.getName());

            // ✅ Notify admin with full details
            emailService.notifyAdmin(
                    message.getName(),
                    message.getEmail(),
                    message.getPhone(),
                    message.getService(),
                    message.getMessage()
            );

            return ResponseEntity.ok("Your message has been successfully sent!");
        } catch (Exception e) {
            System.err.println("Error in submitContactForm: " + e.getMessage());
            return ResponseEntity.status(500).body("Something went wrong. Please try again later.");
        }
    }
}
