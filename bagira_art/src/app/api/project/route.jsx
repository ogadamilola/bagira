import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  if (!username || !password || !myEmail) {
    console.error('Missing environment variables');
    return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
  }

  try {
    const {
      projectType,
      existingBrand,
      projectBudget,
      brief,
      firstName,
      lastName,
      companyName,
      existingWebsite,
      email,
      telephone,
      message,
      hearAboutUs
    } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: username,
        pass: password,
      },
    });

    // Send email to site owner
    await transporter.sendMail({
      from: `"BAGI Creatives" <${username}>`,
      to: myEmail,
      replyTo: email,
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #333;">
          <h1>New Project Inquiry</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Telephone:</strong> ${telephone}</p>
          <p><strong>Existing Website:</strong> ${existingWebsite || 'N/A'}</p>
          <p><strong>Project Type:</strong> ${projectType.join(', ')}</p>
          <p><strong>Existing Brand:</strong> ${existingBrand}</p>
          <p><strong>Project Budget:</strong> ${projectBudget}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
          <p><strong>Project Brief:</strong> ${brief || 'N/A'}</p>
          <p><strong>How they heard about us:</strong> ${hearAboutUs || 'N/A'}</p>
        </div>
      `,
    });

    // Send confirmation email to the submitter
    await transporter.sendMail({
      from: `"BAGI Creatives" <${username}>`,
      to: email,
      subject: `Confirmation of Your Project Inquiry`,
      html: `
        <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #333;">
          <h1>Thank You for Your Project Inquiry</h1>
          <p>Hello ${firstName},</p>
          <p>Thank you for submitting a project inquiry. We have received your request and will get back to you as soon as possible. Here is a summary of your submission:</p>
          <p><strong>Project Type:</strong> ${projectType.join(', ')}</p>
          <p><strong>Existing Brand:</strong> ${existingBrand}</p>
          <p><strong>Project Budget:</strong> ${projectBudget}</p>
          <p><strong>Project Brief:</strong> ${brief || 'N/A'}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Existing Website:</strong> ${existingWebsite || 'N/A'}</p>
          <p>Best regards,</p>
          <p>BAGI Creatives</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Project inquiry submitted successfully" });
  } catch (error) {
    console.error('Error processing project submission:', error);
    return NextResponse.json({ message: "Error submitting project inquiry" }, { status: 500 });
  }
}