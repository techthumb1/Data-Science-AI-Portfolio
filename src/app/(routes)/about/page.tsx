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
          I am a Senior Data Analyst with a passion for building AI 
          systems that make a real difference, especially in healthcare 
          and finance, where better data can directly improve lives and 
          outcomes. I specialize in end-to-end data products, from designing 
          robust pipelines to deploying machine learning models in production.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
          My experience spans healthcare, finance, and sports analytics, where 
          I have applied deep learning, forecasting, NLP, and MLOps to solve 
          real-world problems. I am especially focused on automation, privacy-aware 
          AI, and real-time analytics that support decision-making within an environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I work primarily with Python, SQL, TensorFlow, Next.js, and cloud 
            platforms like AWS and GCP. My approach is rooted in performance, 
            clarity, and impact.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            <em>“If it doesn’t drive a decision or automate a task, it is not done yet.”</em>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            That is the lens I bring to every project, or solution that I strive to solve—practical, usable outcomes.
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
