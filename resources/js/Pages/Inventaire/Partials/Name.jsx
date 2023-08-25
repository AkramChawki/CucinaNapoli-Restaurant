import { RadioGroup } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Name({fiches}) {
    const [name, setName] = useState('');
    const [ficheId, setficheId] = useState(null);
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
                <RadioGroup value={ficheId} onChange={setficheId}>
                    <RadioGroup.Label className="text-base font-medium text-gray-900">Select Fiche</RadioGroup.Label>

                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                        {fiches.map((fiche) => (
                            <RadioGroup.Option
                                key={fiche.id}
                                value={fiche.id}
                                className={({ checked, active }) =>
                                    classNames(
                                        checked ? 'border-transparent' : 'border-gray-300',
                                        active ? 'ring-2 ring-green-500' : '',
                                        'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                                    )
                                }
                            >
                                {({ checked, active }) => (
                                    <>
                                        <div className="flex-1 flex">
                                            <div className="flex flex-col">
                                                <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                                    {fiche.name}
                                                </RadioGroup.Label>
                                            </div>
                                        </div>

                                        <svg
                                            className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-green-600')}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div
                                            className={classNames(
                                                active ? 'border' : 'border-2',
                                                checked ? 'border-green-500' : 'border-transparent',
                                                'absolute -inset-px rounded-lg pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
                {name !== "" && (
                    <>
                        <Link
                            type="button"
                            as="button"
                            href="/inventaire/stock"
                            method="get"
                            data={{ nom: name, ficheId }}
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
