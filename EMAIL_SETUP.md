# Email System Setup Guide

## Overview
The CNS Events website now uses an external API endpoint for form submissions instead of direct SMTP. This approach is more secure and reliable.

## Current Configuration

### Contact Form
- **Endpoint**: `https://bixid.in/form-response`
- **Method**: POST
- **Content-Type**: application/json

### Data Format
The form sends the following data structure:
```json
{
  "Subject": "New Event Inquiry from [Customer Name]",
  "message": "Event description/details",
  "name": "Customer Name",
  "phone": "Mobile Number",
  "event_date": "Event Date",
  "guests": "Number of Guests",
  "Website": "CNS Events",
  "recipient_email": "support@cnsevent.in"
}
```

### Newsletter Subscription
- **Endpoint**: Same as contact form
- **Data Format**: Similar structure with newsletter-specific subject

## Setup Instructions

### 1. Update API Endpoint
Replace `https://bixid.in/form-response` in `src/utils/emailService.js` with your actual API endpoint.

### 2. API Response Format
Your API should return a response in this format:
```json
{
  "Status": "Success",
  "message": "Optional message"
}
```

### 3. Test the Connection
Use the "Test API Connection" button in the contact form to verify your API endpoint is working.

## Features

### ✅ What's Working
- Contact form submission
- Newsletter subscription
- Form validation
- Success/error messages
- Loading states
- API connection testing

### 🔧 What You Need to Set Up
- Your actual API endpoint URL
- API authentication (if required)
- Email sending logic on your backend

## Example Backend Implementation

If you want to create your own backend, you can use the provided `backend/server.js` file as a reference. It includes:
- Express server setup
- SMTP configuration for Hostinger
- Form processing endpoints
- Error handling

## Troubleshooting

### Form Not Submitting
1. Check browser console for errors
2. Verify API endpoint URL is correct
3. Test API connection using the test button
4. Check if your API endpoint is accessible

### Newsletter Not Working
1. Ensure newsletter form is properly connected
2. Check API endpoint configuration
3. Verify form validation is passing

## Security Notes
- API keys and sensitive data should be stored securely
- Use HTTPS for all API communications
- Implement rate limiting on your API endpoint
- Validate all incoming data on your backend

## Support
If you need help setting up your API endpoint or have questions, please contact your development team.
