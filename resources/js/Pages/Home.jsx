import { Head, Link, usePage } from "@inertiajs/react";

function Home() {
    const { auth } = usePage().props

    return (
        <>
            <Head title="Accueil" />
            <div className="relative">
                <main className="lg:relative bg-light-gray">
                    <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-0 lg:h-screen lg:flex lg:items-center lg:text-left md:h-[100vh] sm:h-[100vh] min-[320px]:h-screen">
                        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                            <img
                                src="/images/logo/logo_cucina.webp"
                                alt="Logo"
                                className="h-[300px] w-[400px] mb-8 mx-auto lg:mx-0"
                            />
                            <h1 className="text-4xl tracking-tight font-extrabold text-dark-gray sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span className="block">Pizza Au Feu</span>
                                <span className="block text-green-600">
                                    De Bois
                                </span>
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                Livraison Jusqu'à chez vous !!
                            </p>
                            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow mx-3">
                                    <a
                                        href="#restaurants"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:opacity-90 md:py-4 md:text-lg md:px-10"
                                    >
                                        Accéder
                                    </a>
                                </div>
                                <div className="rounded-md shadow mx-3">
                                    <Link
                                        href={route('logout')} method="post" as="button"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:opacity-90 md:py-4 md:text-lg md:px-10"
                                    >
                                        Se Deconnecter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-64 sm:h-72 md:h-96 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/images/cover/banner.webp"
                            alt=""
                        />
                    </div>
                </main>
            </div>
            <div
                className="min-h-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3"
                id="restaurants"
            >
                {auth.user.role.includes("caisse") && (
                    <div className="relative flex">
                        <img
                            src="/images/restau/green.jpeg"
                            alt=""
                            className="absolute inset-0 w-full h-full object-center object-cover"
                        />
                        <div className="relative w-full flex flex-col items-center justify-center text-center py-20">
                            <a href="#" className="my-2 text-5xl font-bold text-white">
                                Caissier
                            </a>
                            <Link
                                href="/caissier"
                                className="mt-4 font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
                            >
                                Accéder
                            </Link>
                        </div>
                    </div>
                )}
                {auth.user.role.includes("cuisine") && (
                <div className="relative flex">
                    <img
                        src="/images/restau/white.jpeg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-center object-cover"
                    />
                    <div className="relative w-full flex flex-col items-center justify-center  text-center py-20">
                        <a href="#" className="my-2 text-5xl font-bold text-black">
                            Cuisinier
                        </a>
                        <Link
                            href="/cuisinier"
                            className="mt-4 font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
                        >
                            Accéder
                        </Link>
                    </div>
                </div>
                )}
                {auth.user.role.includes("laboratoire") && (
                <div className="relative flex">
                    <img
                        src="/images/restau/red.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-center object-cover"
                    />
                    <div className="relative w-full flex flex-col items-center justify-center text-center py-20">
                        <a href="#" className="my-2 text-5xl font-bold text-white">
                            Laboratoire
                        </a>
                        <Link
                            href="/laboratoire"
                            className="mt-4 font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
                        >
                            Accéder
                        </Link>
                    </div>
                </div>
                )}
                {auth.user.role.includes("pizzaolo") && (
                <div className="relative flex">
                    <img
                        src="/images/restau/green.jpeg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-center object-cover"
                    />
                    <div className="relative w-full flex flex-col items-center justify-center  text-center py-20">
                        <a href="#" className="my-2 text-5xl font-bold text-white">
                            Pizzaiolo
                        </a>
                        <Link
                            href="/pizzaolo"
                            className="mt-4 font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
                        >
                            Accéder
                        </Link>
                    </div>
                </div>
                )}
                {auth.user.role.includes("magasin") && (
                <div className="relative flex">
                    <img
                        src="/images/restau/white.jpeg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-center object-cover"
                    />
                    <div className="relative w-full flex flex-col items-center justify-center  text-center py-20">
                        <a href="#" className="my-2 text-5xl font-bold text-black">
                            Magasin Général
                        </a>
                        <Link
                            href="/magasin"
                            className="mt-4 font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
                        >
                            Accéder
                        </Link>
                    </div>
                </div>
                )}
                {auth.user.role.includes("salle") && (
                <div className="relative flex">
                    <img
                        src="/images/restau/red.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-center object-cover"
                    />
                    <div className="relative w-full flex flex-col items-center justify-center  text-center py-20">
                        <a href="#" className="my-2 text-5xl font-bold text-white">
                            Salle
                        </a>
                        <Link
                            href="/salle"
                            className="mt-4 font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
                        >
                            Accéder
                        </Link>
                    </div>
                </div>
                )}
            </div>
            <>
                {/* This example requires Tailwind CSS v2.0+ */}
                <footer className="bg-white">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                        <div className="flex justify-center space-x-6 md:order-2">
                            <a
                                href="https://www.facebook.com/Cucina.Napoli/"
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/cucina.napoli/"
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/cucina_napoli"
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                        <div className="mt-8 md:mt-0 md:order-1">
                            <p className="text-center text-base text-gray-400">
                                © {new Date().getFullYear()} Cucina Napoli.
                            </p>
                        </div>
                    </div>
                </footer>
            </>
        </>
    );
}

export default Home;
