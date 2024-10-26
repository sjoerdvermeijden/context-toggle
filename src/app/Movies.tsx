'use client'

import React, { useContext, useState, useEffect } from 'react'

import { IconHeart } from '@tabler/icons-react'

import { movies } from '../../data'

import { FavoriteContext } from './context/favoriteContext'

function Movies() {
    const { addMovie } = useContext(FavoriteContext);
    const [activeMovies, setActiveMovies] = useState<number[]>([]);

    return (
        <ul className='flex flex-col gap-2'>
            {
                movies?.map((movie) => {
                    let activeClass = activeMovies.includes(movie.id) ? 'bg-red-500' : "bg-gray-900";

                    return <li key={movie.id} className='mb-2'>
                        <div className='bg-gray-200 p-3 flex items-center'>
                            <h3 className='mr-auto'>{movie.title}</h3>
                            <button className={`${activeClass} rounded p-1 text-white`} onClick={() => {
                                addMovie(movie.id);
                                setActiveMovies([...activeMovies, movie.id])
                            }}><IconHeart stroke={2} size={18} /></button>
                        </div>
                    </li >
                })
            }
        </ul >
    )
}

export default Movies