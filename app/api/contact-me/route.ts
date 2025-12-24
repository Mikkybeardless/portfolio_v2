import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  try {
    const { email, name, message } = await request.json();
    console.log("Contact Form Submission:", { email, name, message });
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["youremail@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Error submitting form" },
      { status: 500 }
    );
  }
}
