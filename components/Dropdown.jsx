"use client"

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const Dropdown = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close the dropdown when a click occurs outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document body
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
       <AiOutlineUser onClick={toggleDropdown} className="p-2 text-4xl font-bold rounded-full hover:bg-gray-200 " />

      {isOpen && (
        <div className="origin-top-right absolute sm:-right-12 lg:-left-16 xl:left-0 mt-3 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {/* Dropdown content goes here */}
          <div className="">
          <div className='p-2 text-center bg-gray-100'>
            <h1 className=''>{user.name}</h1>
            <h2>{user.email}</h2>
          </div>
        
           <Link
              href="#"
               onClick={closeDropdown}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 2
            </Link>
           <button type='button'
              onClick={() => signOut()}
              className=" w-full bg-red-300 px-4 py-2 text-md text-gray-900 hover:bg-red-200"
            >
              logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
