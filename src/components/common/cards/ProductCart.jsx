import React from 'react'

export default function ProductCart({title,price,qty,description,image}) {
  return (
    <div className="flow-root ">
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="shrink-0">
            <img
              alt={title}
              height="70"
              src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s"}
              width="70"
              className="rounded-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-2xl font-medium text-gray-900 dark:text-white">
              {title || "No title"}
            </p>
            <p className="truncate text-base text-gray-500 dark:text-gray-400">
              {description || "No decription"}
            </p>
          </div>
          <div className="inline-flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            {price? price : "Unavailable"}$
          </div>
        </div>
      </li>
    </ul>
  </div>
  )
}
