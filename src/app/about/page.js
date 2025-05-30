'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

const values = [
  {
    name: 'Excellence',
    description: 'We strive for excellence in everything we do, ensuring the highest quality of service for our clients.',
  },
  {
    name: 'Integrity',
    description: 'We maintain the highest standards of integrity and ethical conduct in all our business dealings.',
  },
  {
    name: 'Innovation',
    description: 'We continuously innovate and adapt to provide cutting-edge solutions in the certification industry.',
  },
  {
    name: 'Client Focus',
    description: 'We put our clients first, understanding their needs and delivering tailored solutions.',
  },
]

const team = [
  {
    name: 'Rajesh Sharma',
    role: 'CEO & Founder',
    image: '/images/team/rajesh-sharma.jpg',
  },
  {
    name: 'Priya Patel',
    role: 'Head of Operations',
    image: '/images/team/priya-patel.jpg',
  },
  {
    name: 'Amit Kumar',
    role: 'Technical Director',
    image: '/images/team/amit-kumar.jpg',
  },
  {
    name: 'Neha Singh',
    role: 'Client Relations Manager',
    image: '/images/team/neha-singh.jpg',
  },
]

export default function About() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero heading="About Satya" description="Your trusted partner in certification and compliance solutions."/>

        {/* Mission & Vision */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="relative">
                <Image
                  src="/images/about/1.png"
                  alt="Our Mission"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission & Vision</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Satya, we are committed to helping businesses navigate the complex world of certification and compliance. Our mission is to provide expert guidance and support, ensuring our clients achieve and maintain the highest standards of quality and safety.
                </p>
                <div className="mt-10 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
                    <p className="mt-4">
                      To provide comprehensive certification and compliance solutions that enable businesses to meet regulatory requirements and achieve excellence in their operations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
                    <p className="mt-4">
                      To be the leading provider of certification and compliance services, recognized for our expertise, integrity, and commitment to client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[var(--primary-blue)]">Our Values</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What drives us forward
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {values.map((value, index) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                  >
                    <dt className="text-base font-semibold leading-7 text-gray-900">{value.name}</dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{value.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[var(--primary-blue)]">Our Team</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Experts behind our success
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our team is collaboration of professionals & partners working together for customers to arrange product BIS registration and certification at the earliest. With the support of our expert team and partners, coming together, Satya Consultancy Services takes pride to serve its customers with a wide range of services including coordination with different organizations to provide hassle-free services. 
              </p>
            </div>
            {/* <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="relative h-48 w-48 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 