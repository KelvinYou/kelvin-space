"use client";

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenuGroup, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { MoreHorizontal } from 'lucide-react'
import React, { useState, useEffect } from 'react'

type FilterOptionType = {
  label: string,
  value: string
}

const Filter: React.FC = () => {
  const saveOptions: FilterOptionType[] = [
    {
      label: 'Profile',
      value: 'profile'
    },
    {
      label: 'Billing',
      value: 'billing'
    },
    {
      label: 'Settings',
      value: 'settings'
    },
    {
      label: 'Keyboard shortcuts',
      value: 'keyboard-shortcuts'
    },
  ]

  const [selectedValue, setSelectedValue] = useState<FilterOptionType>(saveOptions[0]);

  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<FilterOptionType[]>(saveOptions);

  useEffect(() => {
    const results = saveOptions.filter(option =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredOptions(results);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the search submit logic here if needed
    console.log('Search Value:', searchValue);
  };

  return (
    <Card className='p-5'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="w-56">
          <Button variant="outline" className=' hover:border-cyan-300'>
            {selectedValue.label}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <div className='px-2'>
            <form className="max-w-md mx-auto">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search ..."
                  value={searchValue}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            {filteredOptions.map((option, index) => {
              return (
                <DropdownMenuItem key={index} onClick={() => setSelectedValue(option)}>
                  <span>{option.label}</span>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  )
}

export default Filter;
