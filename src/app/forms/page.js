'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

const forms = [
  'Form I - AManufacturing Machinery & Test equipment details in manufacturing Premise',
  'Form II - List of Test Equipments',
  'Form III - Checklist for Application',
  'Form IV - Test report',
  'Form V - BIS Application',
  'Form VI - Authorised Indian Representative Nomination (Application for Foreign manufacturers)',
  'Form IX - Agreement (applicable for foreign manufacturers)',
  'Form X - Indemnity Bond (applicable for foreign manufacturers)',
  'Form XI - Performance Bank Guarantee (applicable for foreign manufacturers)',
]

export default function Forms() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero heading="Forms & Formats" description="Essential forms and templates for your certification process."/>

        {/* Forms List */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="space-y-8">
                {forms.map((form, index) => (
                  <motion.div
                    key={form}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-x-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--primary-blue)]">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {form}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 