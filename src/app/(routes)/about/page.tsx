"use client";
import Image from "next/image";
import TitleDivider from "@/components/TitleDivider";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-6 text-center">
      {/* Title Section with Divider */}
      <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
      <TitleDivider />

      {/* About Section - Profile & Text */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-gray-300">
          <Image 
            src="/images/profile-pic.png" 
            alt="Profile Picture" 
            width={256} 
            height={256} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-left">
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a <strong>Senior Data Analyst</strong> specializing in 
            <strong> AI, Machine Learning, and Data Science</strong>. I have expertise in 
            <strong> deep learning, data engineering, and analytics</strong>, I work on developing 
            <strong> end-to-end AI-driven applications</strong>, constructing model deployment pipelines, 
            and solutions that are effective, efficient, and provide <strong>data-driven decision-making</strong>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            My experience spans multiple industries, including <strong>Healthcare AI, Finance, 
            and Sports Analytics</strong>, and I continuously strive to 
            <strong> leverage AI for impactful solutions</strong>. Whether optimizing complex 
            data pipelines or building AI-powered tools, my focus remains on 
            <strong> innovation, scalability, and high performance</strong>.
          </p>

          {/* Download Resume Button */}
          <div className="mt-6"> 
          <a 
  href="/resume.pdf" 
  download 
  className="bg-[#1C2833] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#2C3E50] transition"
>
  Download Resume
</a>

          </div>
        </div>
      </div>
    </div>
  );
}
