'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import services from '@/data/services' // Assuming you have a services data file

// const services = [
//   {
//     title: 'BIS Registration',
//     description: 'Expert guidance and support for Bureau of Indian Standards (BIS) registration process, ensuring compliance with Indian regulations and standards.',
//     image: '/images/services/bis-registration.jpg',
//     details: [
//       'Documentation preparation and review',
//       'Testing coordination with BIS-approved labs',
//       'Factory inspection support',
//       'Application submission and follow-up',
//       'Ongoing compliance monitoring',
//     ],
//   },
//   {
//     title: 'Foreign Manufacturers Certification Scheme (FMCS)',
//     description: 'Comprehensive support for foreign manufacturers seeking BIS certification, helping international businesses enter the Indian market.',
//     image: '/images/services/fmcs-certification.jpg',
//     details: [
//       'Initial assessment and planning',
//       'Documentation preparation',
//       'Factory inspection coordination',
//       'Testing arrangement',
//       'Certification process management',
//     ],
//   },
//   {
//     title: 'ISI Mark Certification',
//     description: 'Professional assistance in obtaining ISI Mark certification, ensuring your products meet Indian quality and safety standards.',
//     image: '/images/services/isi-mark-certification.jpg',
//     details: [
//       'Product evaluation',
//       'Testing coordination',
//       'Documentation preparation',
//       'Factory inspection support',
//       'Certification process management',
//     ],
//   },
//   {
//     title: 'Compulsory Registration Scheme (CRS)',
//     description: 'End-to-end support for CRS registration, making your electronic and IT products eligible for the Indian market.',
//     image: '/images/services/crs-registration.jpg',
//     details: [
//       'Product assessment',
//       'Testing coordination',
//       'Documentation preparation',
//       'Application submission',
//       'Compliance monitoring',
//     ],
//   },
//   {
//     title: 'Product Testing & Certification',
//     description: 'Coordination of product testing with accredited laboratories to ensure compliance with relevant standards.',
//     image: '/images/services/product-testing.jpg',
//     details: [
//       'Test plan development',
//       'Lab coordination',
//       'Sample preparation',
//       'Test monitoring',
//       'Report review',
//     ],
//   },
//   {
//     title: 'Compliance Consulting',
//     description: 'Expert guidance on regulatory compliance and certification requirements for your business.',
//     image: '/images/services/compliance-consulting.jpg',
//     details: [
//       'Regulatory assessment',
//       'Compliance strategy development',
//       'Documentation review',
//       'Training and support',
//       'Ongoing compliance monitoring',
//     ],
//   },
// ]

export default function Services() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero heading="Our Services" description="We offer a range of services to help you achieve your certification goals."/>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto mt-16 max-w-7xl space-y-24 sm:mt-20">
                        {services.map((service, index) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
                          >
                            <div className="relative h-[400px] w-full lg:w-1/2">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="rounded-2xl object-cover"
                              />
                            </div>
                            <div className="flex flex-col justify-center lg:w-1/2">
                              <h3 className="text-2xl font-semibold leading-8 text-gray-900">{service.title}</h3>
                              <p className="mt-4 text-base leading-7 text-gray-600 text-justify">{service.description}</p>
                              <p className="mt-4 text-base leading-7 text-gray-600 text-justify">{service.d2}</p>
                              <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center text-sm font-semibold leading-6 text-[var(--primary-blue)] hover:text-[var(--primary-light-blue)]"
                              >
                                Contact Us <span aria-hidden="true" className="ml-2">→</span>
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[var(--primary-blue)]">Our Process</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How We Work
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our streamlined process ensures efficient and effective certification services.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="relative">
                <Image
                  src="/images/services/process-flow.jpg"
                  alt="Our Process Flow"
                  width={1200}
                  height={600}
                  className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 