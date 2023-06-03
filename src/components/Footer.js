export default function Footer() {
    return (
        <div className="p-4 pt-16 mx-auto max-w-md lg:max-w-screen-lg">
            <div className=" gird-cols-1 grid gap-10 row-gap-6 mb-8 sm:grid-cols-2">
                <div className="">
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
                    <div className="mt-2 lg:max-w-sm">
                        <p className="text-sm ">
                           Buchenweg 9
                        </p>
                        <p className="mt-2 text-sm ">
                           1537 Müncheberg
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm flex flex-col sm:items-end">
                    <div>
                    <p className="text-base font-bold tracking-wide ">
                        Kontakt
                    </p>
                    <div className="flex mt-1">
                        <p className="mr-1 ">Telefon:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-primary"
                        >
                            +4917657642327
                        </a>
                    </div>
                    <div className="flex mt-1">
                        <p className="mr-1 ">Email:</p>
                        <a
                            href="mailto:kontakt@marvinsteinborn.de"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-primary"
                        >
                            kontakt@marvinsteinborn.de
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm">
                    © Copyright 2023 Marvin Steinborn. Alle Rechte vorbehalten.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a
                            href="/datenschutz"
                            className="text-sm transition-colors duration-300 hover:text-primary"
                        >
                            Datenschutz
                        </a>
                    </li>
                    <li>
                        <a
                            href="/impressum"
                            className="text-sm transition-colors duration-300 hover:text-primary"
                        >
                            Impressum
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}