'use client'

import React from 'react'

import ToggleComponent from './context/buttonToggle'
import FavoriteComponent from './context/favoriteContext'

type Props = {
    children: React.ReactNode
}

function Providers({ children }: Props) {
    return (
        <>
            <FavoriteComponent>
                <ToggleComponent>
                    {children}
                </ToggleComponent>
            </FavoriteComponent>
        </>
    )
}

export default Providers