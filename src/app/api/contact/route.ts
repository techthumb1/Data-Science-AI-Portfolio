import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Here, integrate with an email service (e.g., SendGrid, Nodemailer)
    console.log(`Contact Request from: ${name} - ${email}`);
    console.log(`Message: ${message}`);

    return NextResponse.json({ success: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
