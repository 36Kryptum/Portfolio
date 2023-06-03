export default function Advantages() {
    const handleClick = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-center text-primary dark:text-white my-2 text-3xl font-bold mb-10">Deine Vorteile</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="bg-white border-zinc-400 text-accent rounded border dark:border-white p-4 hover:scale-105 duration-300">
                    <h3 className="text-center text-primary my-2 text-xl font-bold">Maßgeschneiderte Lösung</h3>
                    Du erhältst eine komplett individuelle Webpräsenz, die ganz auf die Bedürfnisse deines Unternehmens abgestimmt ist.
                </div>
                <div className="bg-white border-zinc-400 text-accent rounded border dark:border-white p-4 hover:scale-105 duration-300">
                    <h3 className="text-center text-primary my-2 text-xl font-bold">Null versteckte Kosten</h3>
                    Du bezahlst lediglich einen monatlichen Fixpreis, du musst also keine Fixkosten für die Erstellung deiner Website aufbringen!
                </div>
                <div className="bg-white border border-zinc-400 text-accent roundedborder dark:border-white p-4 hover:scale-105 duration-300">
                    <h3 className="text-center text-primary my-2 text-xl font-bold">Keine Kopfschmerzen</h3>
                    Du bekommst das Rundum-Sorglos-Paket. Ich kümmere mich um alles von der Erstellung, über die Online-Schaltung, bis hin zur Wartung, Anpassung und Optimierung. Somit kannst du dich voll und ganz auf dein Geschäft konzentrieren.
                </div>
                <div className="bg-white border-zinc-400 text-accent rounded border dark:border-white p-4 hover:scale-105 duration-300">
                    <h3 className="text-center text-primary my-2 text-xl font-bold">Kompetente Betreuung</h3>
                    Du bist nachhaltig für die Zukunft gerüstet. Wenn Inhalte oder Design geändert werden sollen, setze ich diese schnell und umkompliziert um.
                </div>
            </div>
        </div>
    )
}

