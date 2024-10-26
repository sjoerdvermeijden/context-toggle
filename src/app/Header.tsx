'use client'

import React, { useContext, useEffect } from 'react'

import { ToggleContext } from './context/buttonToggle';

function Header() {
    const { toggle, toggleButton } = useContext(ToggleContext);

    useEffect(() => {
        console.log(toggle)
    }, [toggle])


    return (
        <div className={`${toggle ? 'bg-gray-500' : 'bg-red-500'} p-4 flex`}>
            <div className='mr-auto'>
                <h1 className='text-3xl'>Header</h1>
            </div>
            <button onClick={() => toggleButton()} className='bg-gray-900 cursor-pointer px-2 text-white rounded'>Toggle Theme</button>
        </div >
    )
}

export default Header