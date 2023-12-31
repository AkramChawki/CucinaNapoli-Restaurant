import { Link } from '@inertiajs/react'
import React from 'react'

export default function Type() {
    const queryParameters = new URLSearchParams(window.location.search);
    const restaurant = queryParameters.get("restau");
    const caisse = "";
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='grid md:grid-cols-2 grid-cols-1 w-[1200px] justify-items-center'>
                <div className="w-full max-w-sm border rounded-lg shadow bg-green-700 border-green-700 my-7 mx-2">
                    <div className="flex justify-end px-4 pt-8">
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/images/logo/caisse.png" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-mediumtext-white">Cloture Caisse</h5>
                        <span className="text-sm text-white">12h-18h</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <Link type="button"
                            as="button" method="get"
                            data={{ restau: restaurant, caisse: "1" }} href="/cloture-caisse/ajouter" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-green-900 bg-white border border-green-300 rounded-lg hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-200 dark:bg-green-800 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-green-700 dark:focus:ring-green-700">Accéder</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm border rounded-lg shadow bg-green-700 border-green-700 my-7 mx-2">
                    <div className="flex justify-end px-4 pt-8">
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/images/logo/caisse.png" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-mediumtext-white">Cloture Caisse</h5>
                        <span className="text-sm text-white">18h-00h</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <Link type="button"
                            as="button" method="get"
                            data={{ restau: restaurant, caisse: "2" }} href="/cloture-caisse/ajouter" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-green-900 bg-white border border-green-300 rounded-lg hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-200 dark:bg-green-800 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-green-700 dark:focus:ring-green-700">Accéder</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
