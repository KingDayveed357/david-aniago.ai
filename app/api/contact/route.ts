// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation function
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateInput = (data: any) => {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!data.email || typeof data.email !== 'string' || !validateEmail(data.email)) {
    errors.push('Valid email is required');
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return errors;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, budget, message } = body;

    // Validate input
    const validationErrors = validateInput(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { success: false, error: validationErrors.join(', ') },
        { status: 400 }
      );
    }

    // Clean and sanitize data
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      budget: budget?.trim() || 'Not specified',
      message: message.trim(),
    };

    // Send email
    const emailData = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'davidaniago@gmail.com',
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${sanitizedData.name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> 
              <a href="mailto:${sanitizedData.email}" style="color: #007bff;">${sanitizedData.email}</a>
            </p>
            <p style="margin: 0 0 10px 0;"><strong>Budget:</strong> ${sanitizedData.budget}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
              ${sanitizedData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
            <p>This email was sent from your portfolio contact form at ${new Date().toLocaleString()}.</p>
          </div>
        </div>
      `,
      // Also send a plain text version for better compatibility
      text: `
        New Contact Form Submission
        
        Name: ${sanitizedData.name}
        Email: ${sanitizedData.email}
        Budget: ${sanitizedData.budget}
        
        Message:
        ${sanitizedData.message}
        
        Sent at: ${new Date().toLocaleString()}
      `,
    });

    console.log('Email sent successfully:', emailData);

    return NextResponse.json(
      { success: true, data: emailData },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More specific error handling
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}