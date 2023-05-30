"use client";

import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BiCheck } from 'react-icons/bi'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-background-light text-white dark:bg-background-dark'>

      {/* Navbar */}
      <div class="bg-gray-900">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
           
            <span class="text-xl tracking-wide text-gray-100">
              Marvin Steinborn
            </span>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Pricing
              </a>
            </li>
            <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer ml-8 dark:fill-primary' />
            </li>
            <li>
              <a
                href="/"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-transparent focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Kontakt aufnehmen
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-primary" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    
    {/* Hero section */}
    <section className="dark:primary dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Schaffe <br/>
				<span className="text-primary">digitalen Erfolg </span>für dein Unternehmen
			</h1>
			<p className="mt-6 text-lg ">Du hast noch keine Website?</p>
      <p className="mt-6 text-lg ">Du hast bereits eine Website, aber das Design ist veraltet und deine Fotos sind nicht mehr aktuell?</p>
      <p className="mt-6 text-lg mb-12"><span className='font-bold text-primary'>Glückwunsch!</span> Du hast soeben deine Lösung gefunden. Ich setze deine Webseite von Anfang bis Ende um.</p>
			
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-primary dark:text-background-dark">Kontakt aufnehmen</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">mehr erfahren</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>

        {/* Full Service section */}
        <section>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary">
                  Preise
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Das Rundum-Sorglos-Paket</span>
                </span>{' '}
              </h2>
              <p className="text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
              <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                <div className="text-center">
                  <div className="text-lg font-semibold">Start</div>
                  <div className="flex items-center justify-center mt-2">
                    <div className="mr-1 text-5xl text-accent font-bold">49€</div>
                    <div className="text-gray-700">/ mo</div>
                  </div>
                  <div className="mt-2 space-y-3">
                    <div className="text-gray-700">10 deploys per day</div>
                    <div className="text-gray-700">10 GB of storage</div>
                    <div className="text-gray-700">20 domains</div>
                  </div>
                </div>
                <div>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                  >
                    Start for free
                  </a>
                  <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                    Sed ut unde omnis iste natus accusantium doloremque.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border-2 rounded shadow-sm sm:items-center hover:shadow border-primary">
                <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                  <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-primary">
                    Meist Gekauft
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">Pro</div>
                  <div className="flex items-center justify-center mt-2">
                    <div className="mr-1 text-5xl text-primary font-bold">75€</div>
                    <div className="text-gray-700">/ mo</div>
                  </div>
                  <div className="mt-2 space-y-3">
                    <div className="text-gray-700 flex justify-center">
                    <BiCheck size={26} className='fill-primary' />
                      professionelle Fotos
                      </div>
                      <div className="text-gray-700 flex justify-center">
                    <BiCheck size={26} className='fill-primary' />Webhosting</div>
                    <div className="text-gray-700 flex justify-center">
                    <BiCheck size={26} className='fill-primary' />Domain</div>
                    <div className="text-gray-700 flex justify-center">
                    <BiCheck size={26} className='fill-primary' />Webdesign</div>
                    <div className="text-gray-700 flex justify-center">
                    <BiCheck size={26} className='fill-primary' />Wartung und Instandhaltung</div>
                  </div>
                </div>
                <div>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    jetzt anfragen
                  </a>
                  <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                    Sed ut unde omnis iste natus accusantium doloremque.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                <div className="text-center">
                  <div className="text-lg font-semibold">Business</div>
                  <div className="flex items-center justify-center mt-2">
                    <div className="mr-1 text-5xl text-accent font-bold">99€</div>
                    <div className="text-gray-700">/ mo</div>
                  </div>
                  <div className="mt-2 space-y-3">
                    <div className="text-gray-700">500 GB of storage</div>
                    <div className="text-gray-700">Unlimited domains</div>
                    <div className="text-gray-700">24/7 Support</div>
                  </div>
                </div>
                <div>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                  >
                    Buy Business
                  </a>
                  <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                    Sed ut unde omnis iste natus accusantium doloremque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* References section */}

        {/* Testimonials section */}

        {/* Contact section */}
        <div className="max-w-screen-xl mx-auto p-4  md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h3 className="text-primary font-semibold">
                        Kontakt
                    </h3>
                    <p className="text-primary text-3xl font-semibold sm:text-4xl">
                        Kontakt aufnehmen
                    </p>
                    <p>
                       Ich freue mich von dir zu hören! Bitte fülle das formular aus.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div>
                                <label className="font-medium">
                                    Vorname
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Nachname
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Telefon
                            </label>
                            <input
                                type="number"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        

{/* Footer section */}
<section>
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="text-xl font-bold tracking-wide ">
              Marvin Steinborn
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm ">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide ">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 ">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-primary hover:text-deep-purple-accent-400"
            >
             +4917657642327
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Email:</p>
            <a
              href="mailto:kontakt@marvinsteinborn.de"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-primary hover:text-deep-purple-accent-400"
            >
              kontakt@marvinsteinborn.de
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-primary hover:text-deep-purple-accent-400"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide ">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className=" transition-colors duration-300 hover:text-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className=" transition-colors duration-300 hover:text-primary"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className=" transition-colors duration-300 hover:text-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm ">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm ">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
        </section>

      </main>
    </div>
  )
}
