import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4">
        I am a Senior Data Analyst specializing in AI, ML, and Data Science.
      </p>
      <p className="mt-4">
        My experience includes developing end-to-end AI-driven applications, model
        deployment, and advanced analytics, particularly in healthcare.
      </p>
      <Link href="/resume.pdf" className="mt-4 inline-block text-blue-600">
        Download Resume
      </Link>
    </div>
  );
}
