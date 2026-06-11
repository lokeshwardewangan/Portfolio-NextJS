import { NextResponse } from "next/server";
import Message from "@/models/Message";
import { contactSchema } from "@/schemas/contact";
import { connectDB } from "@/lib/db";
import { sendContactConfirmation } from "@/lib/email/send-contact";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation Failed", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;

    const newMessage = await Message.create({ name, email, subject, message });

    sendContactConfirmation({ name, email, subject, message }).catch((emailError) => {
      console.error("Contact confirmation email failed:", emailError);
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!", data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
