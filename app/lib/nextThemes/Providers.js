"use client"
import React from "react"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }) => {
    return (
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem='false'>
            {children}
        </ThemeProvider>
    )
}

export default Providers
