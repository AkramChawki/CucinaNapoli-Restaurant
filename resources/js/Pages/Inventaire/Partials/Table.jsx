import React from 'react'
import { Link } from '@inertiajs/react';

export default function Table({ categories, ficheId, name }) {
    const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return (
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <form method="post" action="/inventaire/stock" >
                <div>
                    <input type="hidden" name="_token" defaultValue={csrf} />
                    <input type="hidden" name="name" defaultValue={name} />
                    <input type="hidden" name="ficheId" defaultValue={ficheId} />
                    {categories.map((category) => (
                        <div key={`c-${category.id}`}>
                            <h1 className='p-4 text-4xl font-bold text'>{category.name}</h1>
                            <div className="mt-12 max-w-lg mx-auto grid gap-3 lg:grid-cols-5 lg:max-w-none">
                            {category.products.map(product => (
                                <div key={`p-${product.id}`} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="flex-shrink-0">
                                        <img className="h-48 w-full object-cover" src={"https://admin.cucinanapoli.com/storage/" + product.image} alt="" />
                                    </div>
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <a className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-900 text-center">{product.designation}</p>
                                            </a>
                                        </div>
                                        <div className="mt-6 flex items-center">
                                            <div className="ml-3">
                                                <input
                                                    type="number"
                                                    name="qty[]"
                                                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-center"
                                                    placeholder="0"
                                                />
                                                <div className='text-center my-4'>
                                                    unité ({product.unite})
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-center my-4'>
                                            <input
                                                type="checkbox"
                                                name="products_ids[]"
                                                value={product.id}
                                                className="focus:ring-green-500 h-7 w-7 text-green-600 border-black border-4 rounded "
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='px-4 py-4'>
                <button
                    type="submit"
                    className="inline-flex items-center w-[100%] mt-10 px-4 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Commander
                </button>
                <Link
                    type="button"
                    as="button"
                    href="/"
                    className="inline-flex items-center w-[100%] mt-2 px-4 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Annuler
                </Link>
                </div>
            </form>
        </div>
    )
}
