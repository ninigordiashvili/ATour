import { NextRequest, NextResponse } from "next/server";

const GITHUB_OWNER = "ninigordiashvili";
const GITHUB_REPO = "ATour";
const GITHUB_BRANCH = "main";

export async function POST(request: NextRequest) {
  try {
    const { emailOrPhone, message } = await request.json();

    if (!emailOrPhone) {
      return NextResponse.json(
        { error: "Email or phone is required" },
        { status: 400 }
      );
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      console.error("GITHUB_TOKEN is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.]/g, "-");
    const filePath = `content/contact-submissions/submission-${timestamp}.json`;

    const submission = {
      emailOrPhone,
      message: message || "",
      date: now.toISOString(),
    };

    const content = Buffer.from(
      JSON.stringify(submission, null, 2)
    ).toString("base64");

    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `New contact form submission from ${emailOrPhone}`,
          content,
          branch: GITHUB_BRANCH,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("GitHub API error:", error);
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
