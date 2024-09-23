import Image from 'next/image';

export default function Projects() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 text-center mb-16">
      <h2 className="text-center text-primary dark:text-white my-2 text-3xl font-semibold mb-10">Überzeuge dich selbst</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">

      <div className="p-4 hover:scale-105 duration-300 cursor-pointer"
          onClick={() => window.open("https://staging-sonnenschein-ggmbh.webflow.io/")}>
          <Image
            src="/images/sonnenschein.jpg"
            width={0}
            height={0}
            alt="Storkower Sonnenschein gGmbH"
            className='w-full h-auto'
          />
          <h3 className="text-center text-primary my-4 text-xl font-bold">Storkower Sonnenschein gGmbH</h3>
        </div>

      <div className="p-4 hover:scale-105 duration-300 cursor-pointer"
          onClick={() => window.open("https://www.kaempfe-fotobox.de")}>
          <Image
            src="/images/fotobox.jpg"
            width={0}
            height={0}
            alt="KI Fotobox Seite Marian Kämpfe"
            className='w-full h-auto'
          />
          <h3 className="text-center text-primary my-4 text-xl font-bold">KI Fotobox Kämpfe Events</h3>
        </div>

      <div className="p-4 hover:scale-105 duration-300 cursor-pointer"
          onClick={() => window.open("https://www.juwelier-beeskow.de")}>
          <Image
            src="/images/juwelier.jpg"
            width={0}
            height={0}
            alt="Picture of the author"
            className='w-full h-auto'
          />
          <h3 className="text-center text-primary my-4 text-xl font-bold">Uhren & Schmuck Sybille Fünfhaus</h3>
        </div>

        <div className="p-4 hover:scale-105 duration-300 cursor-pointer"
          onClick={() => window.open("https://www.kaempfe-events.de")}>
          <Image
            src="/images/events.jpg"
            width={0}
            height={0}
            alt="Picture of the author"
            className='w-full h-auto'
          />
          <h3 className="text-center text-primary my-4 text-xl font-bold">Kämpfe Events & Fotografie</h3>
        </div>

        <div className="p-4 hover:scale-105 duration-300 cursor-pointer"
          onClick={() => window.open("https://www.atelier-die-zaubernadel.de")}>
          <Image
            src="/images/zaubernadel.jpg"
            width={0}
            height={0}
            alt="KI Fotobox Seite Marian Kämpfe"
            className='w-full h-auto'
          />
          <h3 className="text-center text-primary my-4 text-xl font-bold">Atelier die Zaubernadel</h3>
        </div>
      </div>
    </div>
  )
}

