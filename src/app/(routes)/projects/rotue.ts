import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(request: Request) {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "projects.json");
    const fileContents = await fs.readFile(filePath, "utf-8");
    const projects = JSON.parse(fileContents);

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");

    let filteredProjects = [...projects];

    if (category) {
      filteredProjects = filteredProjects.filter((p) => p.category === category);
    }

    if (featured === "true") {
      filteredProjects = filteredProjects.filter((p) => p.featured);
    }

    return NextResponse.json(filteredProjects);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to load projects." }, { status: 500 });
  }
}
