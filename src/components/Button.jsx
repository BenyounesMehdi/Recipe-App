/* eslint-disable react/prop-types */
export default function Button ({title, onClick, activeTab}) {
    return (
        <>
                <div
                    className={`inline-block outline-none ring-white rounded border border-neutral-600 dark:border-white px-12 py-3 text-sm font-medium text-neutral-600 dark:text-white hover:bg-neutral-600 hover:text-white cursor-pointer focus:outline-none 
                        ${
                            activeTab === title 
                            ? "bg-neutral-600 text-white dark:bg-white dark:text-gray-700" 
                            : "text-neutral-500 dark:text-white"
                        }`}
                    onClick={onClick}
                >
                    {title}
                </div>
        </>
    )
}