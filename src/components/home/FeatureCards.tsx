const features = [
    { title: "AI-Powered Solutions", description: "Innovative AI applications for real-world problems." },
    { title: "Machine Learning Models", description: "Cutting-edge ML models for predictions and automation." },
    { title: "Full-Stack Development", description: "End-to-end web applications using modern tech stacks." }
  ];
  
  export default function FeatureCards() {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="p-6 bg-gray-100 rounded">
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  }
  