'use client'

import React, { createContext, useState } from 'react'

interface MyContextProps {
    toggle: boolean;
    toggleButton: () => void
}

export const ToggleContext = createContext<MyContextProps>({
    toggle: false,
    toggleButton: () => { }
});

function ToggleComponent({ children }: { children: React.ReactNode }) {
    const [toggle, setToggle] = useState<boolean>(false);

    const toggleButton = () => {
        setToggle(!toggle);
    }

    return (
        <ToggleContext.Provider value={{ toggle, toggleButton }}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleComponent