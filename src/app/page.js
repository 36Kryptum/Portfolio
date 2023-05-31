"use client";
import emailjs from '@emailjs/browser';
import { BiCheck } from 'react-icons/bi'
import { useState, useRef }  from 'react'

export default function Home() { 
  const [darkMode, setDarkMode] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5uu7b5p', 'template_rgvxzi8', form.current, 'LRqHoYdeSwW-6rK6m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main>
    
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
                    <div className="">/ mo</div>
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
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div>
                                <label className="font-medium">
                                    Vorname*
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="sirname"
                                    className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Nachname*
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="family_name"
                                    className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Email*
                            </label>
                            <input
                                type="email"
                                required
                                name="mail"
                                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Telefon*
                            </label>
                            <input
                                type="number"
                                required
                                name="phone"
                                className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Nachricht*
                            </label>
                            <textarea required name="message" className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Kontakt aufnehmen
                        </button>
                    </form>
                </div>
            </div>
      </main>
    </div>
  )
}
