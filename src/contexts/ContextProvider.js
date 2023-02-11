import React, { createContext, useContext, useState } from "react";


const stateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}


export const ContextProvider = ({ children }) => {

    const previousColor = localStorage.getItem('colorMode')
    const previousMode = localStorage.getItem('themeMode')

    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState(previousColor ? previousColor : '#03C9D7')
    const [currentMode, setCurrentMode] = useState(previousMode ? previousMode : 'Light')
    const [themeSetting, setThemeSetting] = useState(false)


    // setCurrentMode(() => localStorage.getItem('themeMode') ) 
    // currentColor = localStorage.getItem('colorMode');



    const setMode = (e) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)

        setThemeSetting(false)
    }
    const setColor = (color) => {
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)

        setThemeSetting(false)
    }

    const handleClick = (clicked) => {
        setIsClicked({
            ...initialState,
            [clicked]: true
        })
    }



    return (
        <stateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor, currentMode,
                themeSetting, setThemeSetting,
                setMode, setColor

            }}
        >
            {children}
        </stateContext.Provider>
    )
}


export const useStateContext = () => useContext(stateContext)