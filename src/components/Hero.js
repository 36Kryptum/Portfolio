import { BiCheck } from 'react-icons/bi'

export default function Hero() {
    const handleClick = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <section className="dark:primary dark:text-gray-100 ">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Schaffe <br/>
          <span className="text-primary transition duration-300 hover:translate-x-8">digitalen Erfolg </span>für dein Unternehmen
        </h1>
        <p className="my-6 text-xl"><span className='transition ease-in-out hover:text-primary duration-300'>hebe dich von deiner Konkurrenz ab</span>, mit einer individuellen Website im Abomodell, ganz ohne Intitialkosten</p>
  
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a rel="noopener noreferrer" onClick={handleClick} className="px-8 py-3 text-lg cursor-pointer font-semibold rounded bg-primary dark:text-background-dark">Kontakt aufnehmen</a>
          <a rel="noopener noreferrer" onClick={handleClick} className="px-8 py-3 text-lg font-semibold cursor-pointer border rounded dark:border-gray-100">mehr erfahren</a>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
      </div>
    </div>
  </section>

  )
}