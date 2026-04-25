import { NextRequest, NextResponse } from "next/server";

// In-memory store (for demo purposes)
interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  createdAt: string;
}

const leads: Lead[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company } = body;

    // Validation
    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!/^\+?[\d\s-]{8,15}$/.test(phone)) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Store lead
    const newLead: Lead = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company.trim(),
      createdAt: new Date().toISOString(),
    };

    leads.push(newLead);

    console.log(`[Lead Captured] ${newLead.name} - ${newLead.email} - ${newLead.company}`);
    console.log(`[Total Leads] ${leads.length}`);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        data: { id: newLead.id },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    data: leads,
    total: leads.length,
  });
}
