import { Link } from "@inertiajs/react";

export default function Table({ categories }) {
    const queryParameters = new URLSearchParams(window.location.search);
    const name = queryParameters.get("nom");
    const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    return (
        <div className="flex flex-col h-screen">
            <div className="m-auto w-[90%]">
                <form method="post" action="/inventaire/stock" >
                    <input type="hidden" name="_token" defaultValue={csrf} />
                    <input type="hidden" name="name" defaultValue={name} />
                    <div className="border-b border-gray-200 px-4 dark:border-gray-700">
                        <nav
                            className="flex space-x-2 justify-center"
                            aria-label="Tabs"
                            role="tablist"
                        >
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-white"
                                    data-hs-tab={`#tab-${category.id}`}
                                    aria-controls={`tab-${category.id}`}
                                    role="tab"
                                >
                                    {category.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            {categories.map((category) => (
                                <div
                                    key={`c-${category.id}`}
                                    className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg hidden"
                                    id={`tab-${category.id}`}
                                    role="tabpanel"
                                >
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    image
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Designiation
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    IMPUTATION
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Stock
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {category.products.map(product => (
                                                <tr key={`p-${product.id}`}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                                                            alt=""
                                                            className="object-contain h-48 w-96 ..."
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {product.designation}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {product.imputation}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <div className="mt-1 relative rounded-md shadow-sm">
                                                            <input type="hidden" name="ids[]" defaultValue={product.id} />
                                                            <input
                                                                type="number"
                                                                name="stocks[]"
                                                                className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="0.00"
                                                                defaultValue={product.Stock}
                                                            />
                                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                                <span
                                                                    className="text-gray-500 sm:text-sm"
                                                                    id="price-currency"
                                                                >
                                                                    unité ({product.unit})
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
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
        </div>
    );
}
