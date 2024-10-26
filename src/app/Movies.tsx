'use client'

import React, { useContext } from 'react'

import { IconHeart } from '@tabler/icons-react'

import { movies } from '../../data'

import { FavoriteContext } from './context/favoriteContext'

function Movies() {
    const { addMovie } = useContext(FavoriteContext);

    return (
        <ul className='flex flex-col gap-2'>
            {
                movies?.map((movie) => {
                    return <li key={movie.id} className='mb-2'>
                        <div className='bg-gray-200 p-3 flex items-center'>
                            <h3 className='mr-auto'>{movie.title}</h3>
                            <button className='bg-gray-900 rounded p-1 text-white' onClick={() => addMovie(movie.id)}><IconHeart stroke={2} size={16} /></button>
                        </div>
                    </li>
                })
            }
        </ul>
    )
}

export default Movies