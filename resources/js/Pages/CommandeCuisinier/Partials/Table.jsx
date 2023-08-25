
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    MenuAlt2Icon,
    XIcon,
} from '@heroicons/react/outline'
import { Link } from '@inertiajs/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Table({ categories, ficheId, name }) {
    const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Fermer</span>
                                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-shrink-0 px-4 flex items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="/images/logo/logo.webp"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                    <nav className="px-2 space-y-1">
                                        {categories.map((category) => (
                                            <a
                                                key={category.id}
                                                // href={item.href}
                                                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 text-white hover:bg-green-900 bg-green-600
                      group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                                                data-hs-tab={`#tab-${category.id}`}
                                                aria-controls={`tab-${category.id}`}
                                            >
                                                <XIcon
                                                    className="text-white group
                        'mr-3 flex-shrink-0 h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                                {category.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14"></div>
                    </Dialog>
                </Transition.Root>

                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
                        <div className="flex-shrink-0 px-4 flex items-center">
                            <img
                                className="h-8 w-auto"
                                src="/images/logo/logo.webp"
                            />
                        </div>
                        <div className="flex-grow mt-5 flex flex-col">
                            <nav className="flex-1 px-2 pb-4 space-y-1">
                                {categories.map((category) => (
                                    <a
                                        key={category.id}
                                        // href={item.href}
                                        className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 text-white hover:bg-green-900 bg-green-600 group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                                        data-hs-tab={`#tab-${category.id}`}
                                        aria-controls={`tab-${category.id}`}
                                    >
                                        <XIcon
                                            className="text-white group mr-3 flex-shrink-0 h-6 w-6"
                                            aria-hidden="true"
                                        />
                                        {category.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="md:pl-64">
                    <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
                        <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
                            <button
                                type="button"
                                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 md:hidden"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <span className="sr-only">Ouvrir</span>
                                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <main className="flex-1">
                            <div className="py-6">
                                <div className="px-4 sm:px-6 md:px-0">
                                    <h1 className="text-2xl font-semibold text-gray-900">Articles</h1>
                                </div>
                                <div className="px-4 sm:px-6 md:px-0">
                                    <div className="py-4">
                                        <form method="post" action="/inventaire/stock" >
                                            <div>
                                                <input type="hidden" name="_token" defaultValue={csrf} />
                                                <input type="hidden" name="name" defaultValue={name} />
                                                <input type="hidden" name="ficheId" defaultValue={ficheId} />
                                                {categories.map((category) => (
                                                    <div key={`c-${category.id}`} className="hidden mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none" id={`tab-${category.id}`}
                                                        role="tabpanel">
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
                                                ))}
                                            </div>
                                            <button
                                                type="submit"
                                                className="inline-flex items-center w-[100%] mt-10 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                            >
                                                Commander
                                            </button>
                                            <Link
                                                type="button"
                                                as="button"
                                                href="/"
                                                className="inline-flex items-center w-[100%] mt-2 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                            >
                                                Annuler
                                            </Link>
                                        </form>
                                    </div>
                                    {/* /End replace */}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}
