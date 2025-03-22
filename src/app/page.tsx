import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#ECEFF4] text-[#333333]">


      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold text-[#2C3E50] leading-tight">
          Showcasing Data Science, AI, & Analytics Excellence
        </h2>
        <p className="text-lg text-[#333333] mt-4 max-w-2xl mx-auto">
          Elevating insights through cutting-edge machine learning and analytics.
          Explore innovative projects that push boundaries.
        </p>
        <div className="mt-6">
          <Link href="/projects">
            <button className="bg-[#1C2833] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#2C3E50] transition">
              View Projects
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-[#2C3E50] text-center">Featured Projects</h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* First Project */}
            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col">
              <Image 
                src="/images/brain-mri.png" 
                width={400} 
                height={250} 
                alt="Project Image" 
                className="rounded-lg object-cover w-full h-[250px]" 
              />
              <h4 className="text-xl font-semibold mt-4">Medical AI Diagnostic Tool</h4>
              <p className="text-sm text-gray-700 mt-2 flex-grow">
                An AI model identifying medical anomalies with precision.
              </p>
              <Link 
                href="/projects/medical-ai-diagnostic" 
                className="text-[#1C2833] font-medium mt-4 block"
              >
                Learn More →
              </Link>
            </div>

            {/* Second Project */}
            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col">
              <Image 
                src="/images/dna.png" 
                width={400} 
                height={250} 
                alt="Project Image" 
                className="rounded-lg object-cover w-full h-[250px]" 
              />
              <h4 className="text-xl font-semibold mt-4">Genomic Data Analysis</h4>
              <p className="text-sm text-gray-700 mt-2 flex-grow">
                AI-driven analysis for genetic risk predictions and mutations.
              </p>
              <Link 
                href="/projects/genomics-ai" 
                className="text-[#1C2833] font-medium mt-4 block"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
} 
    

