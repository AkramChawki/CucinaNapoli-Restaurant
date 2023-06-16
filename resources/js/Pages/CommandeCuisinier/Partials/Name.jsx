import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

export default function Name() {
    const [name, setName] = useState('');
    const handleChange = event => {
        setName(event.target.value);
    };
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex h-screen">
            <div className="m-auto w-[90%] relative   ">
                <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600">
                    <label
                        htmlFor="name"
                        className="px-1 bg-white text-xs font-medium text-gray-900"
                    >
                        Votre Nom
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder=""
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                {name !== "" && (
                    <>
                        <Link
                            type="button"
                            as="button"
                            href="/commande-cuisinier/commander"
                            method="get"
                            data={{ nom: name }}
                            className="inline-flex w-full mt-8 text-left items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Suivant
                        </Link>
                        <Link
                            type="button"
                            as="button"
                            href="/"
                            className="inline-flex w-full mt-2 text-left items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Annuler
                        </Link>
                    </>

                )}
            </div>
        </div>
    );
}
