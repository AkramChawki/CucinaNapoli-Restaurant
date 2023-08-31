import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Formulaire() {
    const { auth } = usePage().props
    const queryParameters = new URLSearchParams(window.location.search);
    const restau = queryParameters.get("restau");
    const { data, setData, post, processing, errors } = useForm({
        name: auth.user.name,
        restau: restau,
        date: '',
        produit: '',
        entite: '',
        plat: '',
        motif: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/erreur-cuisine')
    }
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-10 py-10">
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={submit}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Fiche d'Expiration
                            </h3>
                        </div>

                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Date
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <div className="max-w-lg flex rounded-md shadow-sm">
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            value={data.date} onChange={e => setData('date', e.target.value)}
                                            className="flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="produit"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Produit
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <div className="max-w-lg flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="produit"
                                            id="produit"
                                            value={data.produit} onChange={e => setData('produit', e.target.value)}
                                            className="flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="entite"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Entite
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <select
                                        id="entite"
                                        name="entite"
                                        value={data.entite} onChange={e => setData('entite', e.target.value)}
                                        className="max-w-lg block focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option selected>Selectionner l'entite ...</option>
                                        <option value={"Cuisine"}>Cuisine</option>
                                        <option value={"Pizzeria"}>Pizzeria</option>
                                        <option value={"Salle"}>Salle</option>
                                        <option value={"Laboratoire"}>Laboratoire</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="plat"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Plat ou Produit expire
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea
                                        id="plat"
                                        name="plat"
                                        value={data.plat} onChange={e => setData('plat', e.target.value)}
                                        rows={3}
                                        className="max-w-lg shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="motif"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Motif d'Expiration
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <select
                                        id="motif"
                                        name="motif"
                                        value={data.motif} onChange={e => setData('motif', e.target.value)}
                                        className="max-w-lg block focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option selected>Selectionner le motif ...</option>
                                        <option value={"Decongele"}>Decongele</option>
                                        <option value={"Date Expire"}>Date Expire</option>
                                        <option value={"Mauvais Gout"}>Mauvais Gout</option>
                                        <option value={"Manipulation"}>Manipulation</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link
                            type="button"
                            as="button"
                            href="/"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Annuler
                        </Link>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Ajouter
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
