export default function Hero() {

  return (
    <section className="dark:primary dark:text-gray-100 mb-24">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
        <h1 className="text-5xl font-bold leading-none text-cool-grey-800 dark:text-white sm:text-6xl">Schaffe <br/>
          <span className="text-orange-vivid-400 transition duration-300 hover:translate-x-8">digitalen Erfolg </span>für dein Unternehmen
        </h1>
        <p className="my-6 text-cool-grey-600 text-xl">Hebe dich von deiner Konkurrenz ab. Mit einer individuellen Website im Abomodell, ganz ohne Intitialkosten.</p>
  
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a rel="noopener noreferrer" href="#contact" className="px-8 py-3 text-lg text-white cursor-pointer font-semibold rounded bg-orange-vivid-400 dark:text-background-dark">Kontakt aufnehmen</a>
          <a rel="noopener noreferrer" href="#solution" className="px-8 py-3 text-lg font-semibold cursor-pointer border border-background-dark rounded dark:border-gray-100">mehr erfahren</a>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
      </div>
    </div>
  </section>
  )
}