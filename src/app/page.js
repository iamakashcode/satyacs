'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import services from '@/data/services'

// const services = [
//   {
//     title: 'BIS Registration',
//     description: 'Expert guidance for Bureau of Indian Standards (BIS) registration process, ensuring compliance with Indian regulations and standards.',
//   },
//   {
//     title: 'FMCS Certification',
//     description: 'Comprehensive support for Foreign Manufacturers Certification Scheme (FMCS), helping international manufacturers enter the Indian market.',
//   },
//   {
//     title: 'ISI Mark Certification',
//     description: 'Professional assistance in obtaining ISI Mark certification, ensuring your products meet Indian quality and safety standards.',
//   },
//   {
//     title: 'CRS Registration',
//     description: 'Streamlined process for Compulsory Registration Scheme (CRS) compliance, making your products eligible for the Indian market.',
//   },
// ]

const testimonials = [
  {
    content: "Satya's expertise in BIS certification helped us navigate the complex regulatory requirements smoothly. Their team was professional and efficient throughout the process.",
    author: "Rajesh Kumar",
    role: "CEO, Tech Solutions India",
  },
  {
    content: "Working with Satya was a game-changer for our international expansion. Their knowledge of Indian certification standards is unmatched.",
    author: "Sarah Chen",
    role: "Operations Director, Global Electronics",
  },
  {
    content: "The team at Satya provided exceptional support during our ISI Mark certification process. Their attention to detail and proactive approach made all the difference.",
    author: "Amit Patel",
    role: "Quality Manager, Industrial Products Ltd",
  },
]

const features = [
  {
    title: 'Expert Team',
    description: 'Our team consists of certified professionals with extensive experience in certification standards.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Fast Turnaround',
    description: 'We ensure quick processing of your certification applications with minimal delays.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'End-to-End Support',
    description: 'From initial assessment to final certification, we provide comprehensive support at every step.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Cost-Effective',
    description: 'We offer competitive pricing without compromising on the quality of our services.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Home() {
  const topServices = services.slice(0, 4); // Display only the first 4 services

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative isolate pt-14">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                  >
                    Introduction
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-lg leading-8 text-gray-600 text-justify"
                  >
                    Bureau of Indian Standards in short BIS, is rendering a significant role in ensuring the manufactured products meet specific quality & safety standards in India. It is mandatory for certain manufacturers, whether Indian or foreign, producing products that fall under mandatory certification categories are required to obtain a BIS certificate. This process is also helping in increasing the credibility of manufacturer & their products. The Bureau of Indian Standards has laid down certain procedure for obtaining certification. Satya Consultancy Services, a technically oriented liaisoning organization is at your service for the purpose.    
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex items-center gap-x-6"
                  >
                    <Link
                      href="/contact"
                      className="rounded-md bg-[var(--primary-blue)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary-light-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Contact Us
                    </Link>
                    <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <Image
                    src="/images/hero.jpeg"
                    alt="Certification and Compliance"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* about section */}
        <section className="py-14 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[var(--primary-blue)]">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Trusted Partner in Certification
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide services to businesses to navigate the complexities of obtaining BIS certification for their products. We assist to provide guidance, application preparation, product testing, liaison with BIS authorities, and ensuring compliance with relevant Indian standards.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="relative">
                <Image
                  src="/images/about/1.png"
                  alt="Our Office"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col"
                    >
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[var(--primary-blue)] text-white">
                          {feature.icon}
                        </div>
                        {feature.title}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">{feature.description}</p>
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2> */}
              {/* <p className="mt-2 text-lg leading-8 text-gray-600">
                Comprehensive certification and compliance solutions for your business needs.
              </p> */}
            </div>
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
          </div>
        </section>
        <div className="pb-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto text-center">
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-[var(--primary-blue)] text-white p-4 rounded-lg mb-3">Procedure, documents & other terms & conditions  :</p>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>Procedures:</p>
              <ul>
                <li>1.	Normal Procedure (takes 60 - 65 days)</li>
                <li>2.	Simplified Procedure (takes 35 - 40 days)</li>
              </ul>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>Normal Procedure:</p>
              <ul>
                <li>1.	Relevant Product Code selection</li>
                <li>2.	ISI Mark Registration online Application form fill up with the required documents</li>
                <li>3.	Factory audit by BIS authorized auditor</li>
                <li>4.	Sample Report submission by BIS authorized laboratory</li>
                <li>5.	Grant of licence by BIS Authority. </li>
              </ul>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>Simplified Procedure:</p>
              <ul>
                <li>1.	Initially, the applying party submits the report of the samples already tested and approved by BIS as per Indian Standard.</li>
                <li>2.	Afterward, the applicant has to submit BIS online registration application and BIS Certification Cost along with other required sets of documents.</li>
                <li>3.	During scrutiny of application documents, the BIS official will conduct an inspection process of products along with the factory/industry.</li>
                <li>4.	Once the inspection gets completed, the sealed samples of the goods are further sent for testing at the BIS approved laboratories.</li>
                <li>5.	Then, if verified and approved according to the recommended standards, the certificate is granted by the BIS within 35 to 40 days of application</li>
              </ul>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>Documentation</p>
              <p>Documentations requirement is very specific and generic for the BIS Certification application which includes:</p>
              <ul>
                <li>1.	Laboratory Test Reports as per Product Standard</li>
                <li>2.	Factory Registration Documents</li>
                <li>3.	Manufacturing process flow chart</li>
                <li>4.	In-house Testing Facilities</li>
                <li>5.	Details of Authorized Signatory and other related documents.</li>
              </ul>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>Documents Required For BIS Certification</p>
              <p>Below is the list of documents needed to get BIS certificate for products:</p>
              <ul>
                <li>1.	Name and address proof of office</li>
                <p>
                  <ul className='pl-4'>
                    <li>1.	Certificate from the registrar of the firm, OR</li>
                    <li>2.	Certificate from the directorate of industries, OR</li>
                    <li>3.	Certificate from industries centre, OR</li>
                    <li>4.	Memorandum of articles, etc</li>
                  </ul>
                </p>
                <li>2.	Name and address proof of factory</li>
                <ul className='pl-4'>
                    <li>1.	Certificate from the registrar of the firm, OR</li>
                    <li>2.	Certificate from the directorate of industries, OR</li>
                    <li>3.	Certificate from industries centre, OR</li>
                    <li>4.	Memorandum of articles</li>
                    <li>5.	Valid lease deed showing occupancy of the firm over the premises, etc</li>
                  </ul>
                <li>3.	Valid MSME certificate, if applicable</li>
                <li>4.	Authorized representative letter, in the case signed by a person other than the CEO of the firm.</li>
                <li>5.	Manufacturing process flow chart</li>
                <li>6.	Manufacturing machinery list </li>
                <li>7.	Whether any manufacturing operation is outsourced</li>
                <li>8.	Testing equipments list</li>
                <li>9.	Any testing arrangements outside the factory</li>
                <li>10.	Calibration certificates copy, if available (NABL approved)</li>
                <li>11.	In-house reports</li>
                <li>12.	Third-party laboratory test reports as per Indian Standards, if applicable</li>
                <li>13.	Layout Plan of the factory indicating the office, lab, storage area, production area, and finished good storage.</li>
                <li>14.	Test certificate copy of each raw material.</li>
              </ul>
                <p>The above listed are the major documents required for BIS certification. Therefore, make sure you have gathered all of them before applying for BIS certificate.</p>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>How To Apply For BIS Certification?</p>
              <p>Here we have listed the easiest way to apply for BIS Certification, follow these steps accordingly:</p>
              <ul className='list-disc pl-4'>
                <li>Access the BIS certification portal and log in.</li>
                <li>Fill out and submit the online application form.</li>
                <li>Request product testing through the portal.</li>
                <li>Make the necessary payment for the application.</li>
                <li>The application will go through scrutiny, approval, & queries.</li>
                <li>A BIS officer will inspect your product.</li>
                <li>Obtain login credentials from the BIS website.</li>
                <p className='pt-2'>By following these steps, you will be able to apply for the BIS Certification process efficiently.</p>
              </ul>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>What Are The Penalties For Non-Compliance With BIS Certificate?</p>
              <p>There are several penalties you will face if you don’t follow the BIS Standards such as fines, legal action, reputation damage, etc. Therefore it’s important to follow the BIS standards to avoid these kinds of issues and difficulties.</p>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>What Is The Validity Period Of BIS Certification?</p>
              <p>The BIS Certificate is valid for 1 year. After the expiration, the BIS certification must be renewed by submitting an updated application form.</p>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>Can BIS Certification Be Transferred?</p>
              <p>Yes, BIS Certification can be transferred. If you want to change the location or business structure, you must file a new application.</p>
            </div>
          </div>
        </div>

        <section className="py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-7xl space-y-24 sm:mt-20">
                <motion.div
                  key="FMCS"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col gap-12 lg:flex-row lg:items-center}`}
                >
                  <div className="relative h-[400px] w-full lg:w-1/2">
                    <Image
                      src="/images/services/2.png"
                      alt="/images/services/2.png"
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center lg:w-1/2">
                    <h3 className="text-2xl font-semibold leading-8 text-gray-900">ISI MARK CERTIFICATION - FOREIGN MANUFACTURERS CERTIFICATION SCHEME (FMCS) </h3>
                    <p className="mt-4 text-base leading-7 text-gray-600 text-justify">The Foreign Manufacturers Certification Scheme (FMCS) is tailored for manufacturers out of India who wish to export their products to the Indian market. Foreign manufacturers can apply for BIS certification through an Authorized Indian Representative (AIR) or by establishing their own representative office in India. FMCS certification facilitates international trade by ensuring that imported products meet Indian standards, improving consumer safety and protecting national interests. It smoothens the process for foreign manufacturers to certify their products in line with Indian regulations.</p>
                    <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    FMCS (ISI Mark) is a Scheme operated by the Bureau of Indian Standards since year 2000 under Scheme-I of Schedule-II, BIS Act, 2016 and (Conformity Assessment) Regulations, 2018 for foreign manufacturers. This scheme enables the overseas applicants/manufacturers to use the standard mark, which is also called ISI Mark, to sell their products in India. The foreign manufacturers Certification Department (FMCD) is the only eligible authority that can grant BIS Certificate for import to the foreign manufacturers. The major motive of BIS for granting a Manufacturing certificate to Foreign manufactures is that the public gets good quality, safe, reliable and risk-free products. 
                    </p>
                    <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    BIS FMCS Certificate in India from the FMCD department is meant for the manufacturing units located overseas, which will undergo for factory audit to determine whether the manufacturer is complying with all the necessary requirements illustrated by BIS. ISI Mark under Foreign Manufacturers Certification Scheme is issued by FMCD since 2000. BIS Standard Mark or ISI Mark consists of Licence number as CM/L-XXXXXXXXXX at the bottom of ISI Mark and Indian standard number at the top of above ISI Mark. This mark shall be rewarded by the Bureau of Indian Standards after the successful grant of the BIS Certificate. Approx. 700 items are listed by BIS under FMCS certification & are available on BIS website.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center text-sm font-semibold leading-6 text-[var(--primary-blue)] hover:text-[var(--primary-light-blue)]"
                    >
                      Contact Us <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                  </div>
                </motion.div>
            </div>
          </div>
        </section>


        <div className="pb-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto text-center">
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-[var(--primary-blue)] text-white p-4 rounded-lg mb-3">Procedure, documents & other terms & conditions :</p>
            </div>
            <div className='pt-6'>
              <p className='text-lg font-semibold pb-2'>The Certification process involves the following steps:</p>
              <ul>
                <li className='font-semibold'>1.	Submit application:</li>
                <p>
                  <ul className='pl-4 list-disc pt-1'>
                    <li>Compile all required documents</li>
                    <li>Submit the application with required documents to BIS online and hardcopy to FMCD department</li>
                    <li>BIS authority will verify the application</li>
                  </ul>
                </p>
                <li>2.	Query raised (if any):</li>
                <p>
                  <ul className='pl-4 list-disc pt-1'>
                    <li>In case, any document or test equipment or any other requirement is missing or incomplete, communication will be done by email with applicant</li>
                    <li>If the application is found satisfactory in all respects, it will be recorded</li>
                    <li>Acknowledgement number will be allotted for future purpose</li>
                  </ul>
                </p>
                <li className='font-semibold'>3.	Audit/Inspection:</li>
                <p>
                  <ul className='pl-4 list-disc pt-1'>
                    <li>BIS Officer will arrange a visit at factory premises of applicant on the mutually agreed date</li>
                    <li>Remittance of inspection/audit fee</li>
                    <li>BIS Officer will verify the manufacturing process, testing infrastructure and also test the product in your in-house laboratory</li>
                    <li>BIS Officer will collect the sample, seal it, and forward it for testing with an independent laboratory</li>
                  </ul>
                </p>
                <li className='font-semibold'>4.	Sample Testing:</li>
                <p>
                  <ul className='pl-4 list-disc pt-1'>
                    <li>Sample collected sent to BIS Approval Laboratory</li>
                    <li>BIS(FMCS) receive the test report</li>
                    <li>Charges for testing will be paid by the application firm</li>
                  </ul>
                </p>
                <li className='font-semibold'>5.	Grant of Licence:</li>
                <p>
                  <ul className='pl-4 list-disc pt-1'>
                    <li>Satisfactory inspection report of the auditor visited the factory premises, and test report of the product received according to Indian Standards</li>
                    <li>Applicant should pay a Licence fee, advance minimum Marking fee & if any outstanding due</li>
                    <li>Letter for Grant of Licence issued</li>
                  </ul>
                </p>
              </ul>
            </div>
          </div>
        </div>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-7xl space-y-24 sm:mt-20">
                <motion.div
                  key="FMCS"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col gap-12 lg:flex-row lg:items-center}`}
                >
                  <div className="flex flex-col justify-center lg:w-1/2">
                    <h3 className="text-2xl font-semibold leading-8 text-gray-900">COMPULSORY REGISTRATION SCHEME (CRS) :</h3>
                    <p className="mt-4 text-base leading-7 text-gray-600 text-justify">BIS Licence for Electronic,  IT products and their operation is governed by the conformity assessment scheme outlined in Scheme II of Schedule II of the BIS (Conformity Assessment) Regulations, 2018. Under the Compulsory Registration Scheme (CRS), the Bureau of Indian Standards issues a BIS registration certificate to manufacturers to use a standard mark with a unique registration number on their electronics and IT products. The products must be certified before being placed on the Indian market. The primary goals of CRS is to protect consumer safety, safeguard the environment, and enhance national security. These products must comply with relevant Indian standards and be tested in ACPI-registered laboratories. BIS CRS registration is a prerequisite for their sale or import into India.</p>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center text-sm font-semibold leading-6 text-[var(--primary-blue)] hover:text-[var(--primary-light-blue)]"
                    >
                      Contact Us <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                  </div>
                  <div className="relative h-[400px] w-full lg:w-1/2">
                    <Image
                      src="/images/services/2.png"
                      alt="/images/services/2.png"
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-7xl space-y-24 sm:mt-20">
                <motion.div
                  key="FMCS"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col gap-12 lg:flex-row lg:items-center}`}
                >
                  <div className="relative h-[400px] w-full lg:w-1/2">
                    <Image
                      src="/images/services/2.png"
                      alt="/images/services/2.png"
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center lg:w-1/2">
                    <h3 className="text-2xl font-semibold leading-8 text-gray-900">CERTIFICATE OF CONFORMITY (Scheme - IV)</h3>
                    <p className="mt-4 text-base leading-7 text-gray-600 text-justify">The Bureau of Indian Standards (BIS) began issuing Certificates of Conformity in accordance with Scheme-IV of Schedule II of the BIS (Conformity Assessment) Regulation, 2018. The Bureau may issue a Certificate of Conformity (CoC) for goods and articles (products) that are manufactured in accordance with the specifications outlined in the relevant Indian Standards. A Certificate of Conformity from BIS is necessary for every manufacturer of a product covered by a CoC. Each product covered by mandatory CoC must be marked with the CoC Number. All CoC-covered products must be manufactured using BIS Standard-marked (ISI Marked) materials. Due to several factors such as national security, public interest, the prevention of unfair trade practices, etc., the government has made a number of products subject to mandatory compliance with Indian Standards through Quality Control Orders</p>
                    <p className='mt-4 text-base leading-7 text-gray-600 text-justify font-semibold'>PRODUCTS COVERED UNDER CERTIFICATE OF CONFORMITY (COC)</p>
                    <p className='text-base leading-7 text-gray-600 text-justify'>BIS has added the following two products in compliance with the CoC scheme:</p>
                    <ul className='pl-4 list-disc pt-1'>
                      <li>Stampings/laminations/cores of transformers (with or without winding)</li>
                      <li>Requirement of Retro-Reflective Devices for Bicycles</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center text-sm font-semibold leading-6 text-[var(--primary-blue)] hover:text-[var(--primary-light-blue)]"
                    >
                      Contact Us <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                  </div>
                  
                </motion.div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        

        {/* Testimonials Section */}
        {/* <section className="py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Dont just take our word for it - hear from our satisfied clients.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                >
                  <div>
                    <div className="flex items-center gap-x-4">
                      {/* <div className="relative h-12 w-12">
                        <Image
                          src={`/images/testimonials/${testimonial.author.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                          alt={testimonial.author}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div> */}
                      {/* <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          {testimonial.author}
                        </h3>
                        <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">{testimonial.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>  */}

        {/* Call to Action Section */}
        <section className="relative isolate mt-10 px-6 py-32 sm:py-40 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/cta-background.png"
              alt="Background"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 bg-gray-900/80" /> */}
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
            >
              Contact us today to discuss your certification needs and take the first step towards compliance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
