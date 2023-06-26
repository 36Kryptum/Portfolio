import Image from 'next/image';

export default function Projects() {
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 text-center mb-16">
      <h2 className="text-center text-primary dark:text-white my-2 text-3xl font-semibold mb-10">Überzeuge dich selbst</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <div className="p-4 hover:scale-105 duration-300 cursor-pointer"
      onClick={() => window.open("https://www.abschlussball-fotograf.de/")}>
          <Image
            src="/marian1.png"
            width={0}
            height={0}
            alt="Picture of the author"
            className='w-full h-auto'
            
          />
          <h3 className="text-center text-primary my-2 text-xl font-bold">Abschlussball Fotograf kostenlos</h3>
        </div>
        <div className="p-4 hover:scale-105 duration-300 cursor-pointer"
        onClick={() => window.open("https://www.ilkasteinborn.de")}>
          <Image
            src="/ilka.png"
            width={0}
            height={0}
            alt="Picture of the author"
            className='w-full h-auto'
          />
          <h3 className="text-center text-primary my-2 text-xl font-bold">Kosmetik & Fußpflege Ilka Steinborn</h3>
        </div>
        <div className="p-4 hover:scale-105 duration-300 cursor-pointer"
        onClick={() => window.open("https://www.kaempfe-events.de/")}>
          <Image
            src="/marian2.png"
            width={0}
            height={0}
            alt="Picture of the author"
            className='w-full h-auto'
          />
          <h3 className="text-center text-primary my-2 text-xl font-bold">Kämpfe Events & Fotografie</h3>
        </div>
      </div>
    </div>
  )
}

