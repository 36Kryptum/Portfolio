export default function Information() {
   const handleClick = () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };
   return (
      <div className="w-full bg-primary mx-auto px-4 my-24 flex items-center justify-center">
         <div className="max-w-screen-xl text-center py-10 flex flex-col justify-center items-center h-full">
           <h1 className="text-3xl text-white font-bold">Die Lösung - Dein individuelles Abomodell</h1>
         <p className="text-lg p-4 text-white dark:text-background-dark">Du erhältst eine maßgeschneiderte Website zu einem festen monatlichen Preis. Das Paket umfasst nicht nur die Erstellung der Website, sondern je nach Option auch das Hosting, die Domainkosten und ein anpassbares Service-Paket während der gesamten Laufzeit. Das Abonnement-Modell deckt alle deine Bedürfnisse ab, ohne versteckte Kosten. Ich jegliche Art von Anpassungen. So kannst du dich auf dein Business konzentrieren und musst dir keine Sorgen um deine Website machen.</p>
         <a
              onClick={handleClick}
              className="inline-flex items-center cursor-pointer justify-center h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-transparent border-white border rounded shadow-md hover:bg-transparent hover:bg-white hover:border hover:text-primary focus:shadow-outline focus:outline-none"
            >
              Lass uns loslegen
            </a>
      </div>
      </div>
   )
}

