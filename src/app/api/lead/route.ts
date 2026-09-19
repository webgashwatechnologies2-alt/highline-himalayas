import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      formType = "Website Enquiry",
      name,
      phone,
      email,
      destination,
      departureCity,
      packageName,
      packageRoute,
      packagePrice,
      travelDate,
      travelMonth,
      travelers,
      travelType,
      hotelCategory,
      message,
      whatsappUpdates,
    } = data;

    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and phone number are required.",
        },
        { status: 400 }
      );
    }

    const leadEmail = process.env.LEAD_EMAIL || "info@highlinehimalayas.com";
    const smtpUser = process.env.SMTP_USER || "info@highlinehimalayas.com";
    const smtpPass = process.env.SMTP_PASS || "Highlinehim##2026!@#%123##";
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Build rows for email table
    const details: { label: string; value: string }[] = [];

    details.push({ label: "Lead Source / Form", value: formType });
    details.push({ label: "Customer Name", value: name });
    details.push({ label: "Phone / WhatsApp", value: phone });
    if (email) details.push({ label: "Email Address", value: email });
    if (destination) details.push({ label: "Destination", value: destination });
    if (packageName) details.push({ label: "Package Name", value: packageName });
    if (packageRoute) details.push({ label: "Package Route", value: packageRoute });
    if (packagePrice) details.push({ label: "Package Price", value: packagePrice });
    if (departureCity) details.push({ label: "Departure City", value: departureCity });
    if (travelDate) details.push({ label: "Travel Dates", value: travelDate });
    if (travelMonth) details.push({ label: "Travel Month / Timeline", value: travelMonth });
    if (travelers) details.push({ label: "Travelers", value: String(travelers) });
    if (travelType) details.push({ label: "Trip Type", value: travelType });
    if (hotelCategory) details.push({ label: "Hotel / Stay Category", value: hotelCategory });
    if (whatsappUpdates !== undefined) {
      details.push({
        label: "WhatsApp PDF Updates Requested",
        value: whatsappUpdates ? "Yes" : "No",
      });
    }
    if (message) details.push({ label: "Customer Message / Notes", value: message });

    const tableRows = details
      .map(
        (row, idx) => `
        <tr style="background-color: ${idx % 2 === 0 ? "#f8fafc" : "#ffffff"};">
          <td style="padding: 10px 14px; font-weight: bold; color: #334155; width: 35%; border-bottom: 1px solid #e2e8f0; font-size: 13px;">${row.label}</td>
          <td style="padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0; font-size: 13px;">${row.value}</td>
        </tr>`
      )
      .join("");

    const emailSubject = `[New Lead] ${formType} - ${name} (${phone})`;
    const plainText = details.map((d) => `${d.label}: ${d.value}`).join("\n");

    await transporter.sendMail({
      from: `"Highline Himalayas" <${smtpUser}>`,
      to: leadEmail,
      replyTo: `"Highline Himalayas" <${smtpUser}>`,
      subject: emailSubject,
      text: plainText,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${emailSubject}</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a;">
          <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 650px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
            <tr>
              <td style="background: linear-gradient(90deg, #D84315, #FF6B00); padding: 24px; color: #ffffff;">
                <h1 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: -0.5px;">Highline Himalayas</h1>
                <p style="margin: 6px 0 0 0; font-size: 13px; color: #ffe0b2;">New Lead Received: ${formType}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 24px;">
                <div style="background-color: #eff6ff; border-left: 4px solid #1565C0; padding: 12px 16px; border-radius: 4px; margin-bottom: 20px;">
                  <p style="margin: 0; font-size: 13px; color: #1e3a8a; font-weight: 600;">
                    Action Required: Please review and reach out to the customer via WhatsApp or phone.
                  </p>
                </div>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                  <tbody>
                    ${tableRows}
                  </tbody>
                </table>
                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center;">
                  This lead was submitted automatically from the Highline Himalayas official website.
                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully.",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send enquiry.",
      },
      { status: 500 }
    );
  }
}