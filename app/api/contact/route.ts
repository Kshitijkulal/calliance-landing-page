import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, jobTitle, email, phone } = body;

    // Securely retrieve the Google Apps Script Web App URL from environment variables
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not defined in environment variables.");
      return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
    }

    // Forward the data to Google Sheets via the Apps Script Web App
    // This is executed server-side, completely hiding the URL from the client
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, company, jobTitle, email, phone }),
      cache: 'no-store', // Prevent Next.js from caching the response (important for 302 redirects from Google)
      redirect: 'follow' // Follow the redirect to googleusercontent.com
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Script Error Response:", errorText);
      throw new Error(`Failed to save to Google Sheets. Status: ${response.status}`);
    }

    return NextResponse.json({ success: true, message: "Data successfully saved." }, { status: 200 });

  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
