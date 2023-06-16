import { Link, useForm } from "@inertiajs/react";
import React from "react";
import MultipleValueTextInput from "react-multivalue-text-input";

export default function Formulaire() {
    const { data, setData, post, processing, errors } = useForm({
        numbers: [],
    })

    function submit(e) {
        e.preventDefault()
        post('/numeros')
    }
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex h-screen">
            <div className="m-auto w-[90%] relative   ">
                <form onSubmit={submit}>
                    <label
                        htmlFor="number"
                        className="px-1 bg-white text-xs font-medium text-gray-900"
                    >
                        Inserer les numeros
                    </label>
                    <MultipleValueTextInput name="number"
                        placeholder="Inserer les numeros"
                        onItemAdded={(item, allItems) => setData('numbers', allItems)}
                        onItemDeleted={(item, allItems) => setData('numbers', allItems)}
                    />
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
        </div>
    );
}
