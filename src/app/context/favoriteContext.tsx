'use client'

import React, { createContext, useState } from 'react'

import { movies } from '../../../data'

interface Movie {
    id: number;
    title: string;
}

interface MyContextProps {
    favorites: Movie[] | null;
    addMovie: (id: number) => void
}

export const FavoriteContext = createContext<MyContextProps>(
    {
        favorites: [],
        addMovie: () => { }
    }
);

function FavoriteComponent({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const addMovie = (id: number) => {
        const newArray = movies.filter((item) => item.id === id);

        setFavorites([...favorites, { id: newArray[0].id, title: newArray[0].title }])
    }

    return (
        <FavoriteContext.Provider value={{ favorites, addMovie }}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteComponent