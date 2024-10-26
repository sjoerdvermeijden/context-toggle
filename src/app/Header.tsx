'use client'

import React, { useContext } from 'react'

import Link from 'next/link'

import { ToggleContext } from './context/buttonToggle';

function Header() {
    const { toggle, toggleButton } = useContext(ToggleContext);

    return (
        <div className={`${toggle ? 'bg-gray-500' : 'bg-red-500'} p-4 flex`}>
            <div className='mr-auto'>
                <Link href="/">
                    <h1 className='text-3xl'>Header</h1>
                </Link>
            </div>
            <nav className='flex items-center mr-2'>
                <Link href="/favorites">Favorites</Link>
            </nav>
            <button onClick={() => toggleButton()} className='bg-gray-900 cursor-pointer px-2 text-white rounded'>Toggle Theme</button>
        </div >
    )
}

export default Header