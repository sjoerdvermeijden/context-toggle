'use client'

import React, { useContext } from 'react'

import { FavoriteContext } from '../context/favoriteContext'

function FavoritePage() {
    const { favorites } = useContext(FavoriteContext);

    return (
        <>
            <div className='container mx-auto py-8'>
                <h1 className='mb-6 text-3xl'>Favorites</h1>
                <ul className='list-none flex flex-col gap-2'>
                    {
                        favorites?.map((item) => {
                            return <li key={item.id}>
                                <div className='p-2 bg-gray-200'>
                                    <h3 className='text-xl'>{item.title}</h3>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default FavoritePage