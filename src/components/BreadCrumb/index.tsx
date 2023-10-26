"use client"
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

export interface BreadcrumbProps {
  items: { label: string; link?: string; }[];
}

const BreadCrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
        {items.map((item, index) => (
          <li key={index} className='flex flex-row items-center justify-center'>
            {index !== 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            {item.link ? (
              <Link href={item.link} className="block transition hover:text-gray-700 dark:hover:text-gray-100">
                {item.label}
              </Link>
            ) : (
              <span className="block">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;

