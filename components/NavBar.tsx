"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-xl font-bold text-gray-800 cursor-pointer">TaskFlow</span>
          </Link>
          <nav className="ml-10 flex space-x-4">
            <Link href="/dashboard">
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Dashboard</span>
            </Link>
            <Link href="/projects">
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Projects</span>
            </Link>
            <Link href="/team">
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Team</span>
            </Link>
          </nav>
        </div>
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center focus:outline-none">
            <svg className="w-8 h-8 text-gray-700 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <Link href="/profile">
                <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Your Profile</span>
              </Link>
              <Link href="/settings">
                <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Settings</span>
              </Link>
              <button onClick={() => {}} className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;