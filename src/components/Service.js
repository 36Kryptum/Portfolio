import { BiCheck } from 'react-icons/bi'

export default function Service() {

  return (
    <section>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-md mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary">
            Preise
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-zinc-400 dark:text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
        <p className="text-base dark:text-white md:text-lg">
          Wähle aus drei verschiedenen Paketen mit transparenten Preisen. Somit bezahlst du nur, was du auch wirklich benötigst.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg mx-auto">
        <div className="flex flex-col hover:scale-105 duration-300 justify-between p-8 bg-white border border-zinc-400 rounded shadow-sm hover:shadow">
            <div>
            <div className="text-4xl font-semibold text-accent">Basic</div>
            <div className="mt-6 space-y-3">
            <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary' /></div>
                <div className='col-span-4'>Webdesign</div>
                </div>
                <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary' /></div>
                <div className='col-span-4'>1h Wartung mtl.</div>
                </div>
            </div>
            </div>
          <div>

            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-accent rounded shadow-md hover:bg-transparent hover:border-accent hover:border hover:text-accent focus:shadow-outline focus:outline-none"
            >
              jetzt anfragen
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            zwei Jahre Mindestvertragslaufzeit
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 hover:scale-105 duration-300 bg-white border-2 rounded shadow-sm hover:shadow border-primary">
          <div>
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-primary">
              Meist Gekauft
            </div>
          </div>
            <div className="text-4xl mx-auto font-semibold text-primary">Pro</div>
            <div className="mt-6 space-y-3 mx-auto">
              <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary' /></div>
                <div className='col-span-4'>Webdesign</div>
                </div>
                <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary' /></div>
                <div className='col-span-4'>Webhosting</div>
                </div>
                <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary' /></div>
                <div className='col-span-4'>Domainkosten</div>
                </div>
                <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary' /></div>
                <div className='col-span-4'>2h Wartung mtl.</div>
                </div>
            </div>
            </div>
          <div>
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-transparent hover:border-primary hover:border hover:text-primary focus:shadow-outline focus:outline-none">
              jetzt anfragen
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
            zwei Jahre Mindestvertragslaufzeit
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8 hover:scale-105 duration-300 bg-white border border-zinc-400 rounded shadow-sm hover:shadow">
          <div>
            <div className="text-4xl text-accent font-semibold">Premium</div>
            <div className="flex justify-center my-2">
            </div>
            <div className="mt-2 space-y-3">
            <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary'/></div>
                <div className='col-span-4'>Webdesign</div>
                </div>
                <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary'/></div>
                <div className='col-span-4'>Webhosting</div>
                </div>
                <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary'/></div>
                <div className='col-span-4'>Domainkosten</div>
                </div>
                <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary'/></div>
                <div className='col-span-4'>3h Wartung mtl.</div>
                </div>
                <div className="text-gray-700 grid grid-cols-5">
                <div> <BiCheck size={26} className='fill-primary'/></div>
                <div className='col-span-4'>Search Engine Optimisation (SEO)</div>
                </div>
            </div>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center cursor-pointer justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-accent rounded shadow-md hover:bg-transparent hover:border-accent hover:border hover:text-accent focus:shadow-outline focus:outline-none"
            >
              jetzt anfragen
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
             zwei Jahre Mindestvertragslaufzeit
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  )
}