import React from 'react';

const skillsData = [
  { skill: "Machine Learning", level: "Expert", description: "Built predictive models using TensorFlow, PyTorch, and Scikit-learn. Developed AI-driven applications for medical diagnostics." },
  { skill: "Deep Learning", level: "Expert", description: "Worked on CNNs, RNNs, and Transformer-based models for NLP and computer vision projects." },
  { skill: "Reinforcement Learning", level: "Intermediate", description: "Applied RL algorithms to develop autonomous decision-making systems." },
  { skill: "Data Science", level: "Advanced", description: "Feature engineering, predictive analytics, and large-scale data processing using SQL, Pandas, and Spark." },
  { skill: "AI & NLP", level: "Advanced", description: "Developed NLP models using BERT, GPT, and Transformer-based architectures." },
  { skill: "Computer Vision", level: "Advanced", description: "Implemented image classification, object detection, and segmentation models." },
  { skill: "Data Analytics", level: "Expert", description: "Experience in data visualization, statistical analysis, and business intelligence tools." },
  { skill: "Systems Administration", level: "Intermediate", description: "Managed cloud and local server environments, automation, and infrastructure monitoring." },
  { skill: "Cloud Computing", level: "Intermediate", description: "Deployed AI models using AWS, GCP, and Azure for scalable production." },
  { skill: "Data Engineering", level: "Advanced", description: "Created ETL pipelines and optimized data workflows with Apache Spark and Kafka." },
  { skill: "Full-Stack Web Development", level: "Advanced", description: "Built modern web applications using Next.js, React, Flask, and PostgreSQL." },
  { skill: "Big Data Analytics", level: "Advanced", description: "Processed and analyzed large datasets using Hadoop, Spark, and Dask." },
  { skill: "Explainable AI", level: "Intermediate", description: "Integrated interpretability methods such as SHAP and LIME to AI workflows." },
];

export default function SkillsPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      {/* Section Header */}
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 tracking-wide bg-gray-100 py-4 rounded-lg shadow-md">
        Skills & Expertise
      </h1>

      {/* Table Wrapper */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <table className="w-full border-collapse border border-gray-800 text-lg text-gray-900 bg-gray-100">
          
          {/* Table Header */}
          <thead className="bg-gray-800 text-white text-lg">
            <tr>
              <th className="py-4 px-6 text-center border border-gray-800">Skill</th>
              <th className="py-4 px-6 text-center border border-gray-800">Experience Level</th>
              <th className="py-4 px-6 text-center border border-gray-800">Description</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {skillsData.map((skill, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-gray-200" : "bg-gray-50"}`}>
                <td className="py-4 px-6 border border-gray-800 font-bold">{skill.skill}</td>
                <td className="py-4 px-6 border border-gray-800 text-center">{skill.level}</td>
                <td className="py-4 px-6 border border-gray-800">{skill.description}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
