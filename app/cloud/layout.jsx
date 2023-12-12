import React from "react"
import Aside from "../components/Aside"
import ColorMode from "../components/ColorMode"
import Dialog from "../components/Dialog"
import Providers from "../lib/nextThemes/Providers"
const layout = ({ children }) => {
    return (
        <>
            <Providers>
                <main className='flex flex-col justify-center md:grid md:grid-cols-[300px_1fr] md:h-screen relative'>
                    <Aside />
                    <div className='overflow-y-scroll'>
                        {children}
                        <ColorMode />
                    </div>
                    <Dialog />
                </main>
            </Providers>
        </>
    )
}

export default layout
