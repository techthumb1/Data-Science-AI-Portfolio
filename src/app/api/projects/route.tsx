import { NextResponse } from "next/server";
import projects from "@/data/projects.json"; // Ensure this file exists

export async function GET() {
  try {
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}
