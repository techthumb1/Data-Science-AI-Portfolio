import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/common/Button'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#ECEFF4] text-[#333333]">
      {/* Header */}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold text-[#2C3E50] leading-tight">
          Showcasing Data Science, AI, & Analytics Excellence
        </h2>
        <p className="text-lg text-[#333333] mt-4 max-w-2xl mx-auto">
          Elevating insights through cutting-edge machine learning and analytics.
          Explore innovative projects that push boundaries.
        </p>
        <div className="mt-6 flex justify-center">  {/* Center the button */}
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
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Project Card 1 */}
            <div className="bg-[#ECEFF4] shadow-md p-6 rounded-lg border border-gray-300 flex gap-6 items-center">
              <Image src="/assets/images/brain-predictions.png" width={220} height={220} className="rounded-lg object-cover" alt="Project Image"/>
              <div className="flex-1">
                <h4 className="text-xl font-semibold">Medical AI Diagnostic Tool</h4>
                <p className="text-sm text-gray-700 mt-2">An AI model identifying medical anomalies with precision.</p>
                <Link href="/projects/medical-ai-diagnostic">
                  <Button className="mt-4">Learn More →</Button>
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[#ECEFF4] shadow-md p-6 rounded-lg border border-gray-300 flex gap-6 items-center">
              <Image src="/assets/images/math-design.png" width={220} height={220} className="rounded-lg object-cover" alt="Genomic Analysis Project"/>
              <div className="flex-1">
                <h4 className="text-xl font-semibold">Genomic Data Analysis</h4>
                <p className="text-sm text-gray-700 mt-2">Leveraging AI for predicting genetic mutations and disease risk factors.</p>
                <Link href="/projects/genomic-data-analysis">
                  <Button className="mt-4">Learn More →</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
