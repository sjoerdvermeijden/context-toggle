'use client'

import React from 'react'

import ToggleComponent from './context/buttonToggle'

type Props = {
    children: React.ReactNode
}

function Providers({ children }: Props) {
    return (
        <>
            <ToggleComponent>
                {children}
            </ToggleComponent>
        </>
    )
}

export default Providers