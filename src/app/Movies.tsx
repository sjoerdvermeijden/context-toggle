'use client'

import React, { useContext } from 'react'

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
                            <button className='bg-gray-900 rounded py-1 px-2 text-white' onClick={() => addMovie(movie.id)}>T</button>
                        </div>
                    </li>
                })
            }
        </ul>
    )
}

export default Movies