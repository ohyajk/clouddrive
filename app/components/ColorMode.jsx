"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const ColorMode = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    return (
        <div className='absolute z-10 bottom-6 right-16 border border-[#521bc6] rounded-full hidden md:flex justify-center items-center cursor-pointer'>
            <button onClick={() => setTheme("light")} className={`rounded-full py-2 px-6 ${theme === "light" && "bg-[#521bc6] text-white"}`}>
                <i className='fa-solid fa-sun fa-lg'></i>
            </button>
            <button onClick={() => setTheme("dark")} className={`rounded-full py-2 px-6 ${theme === "dark" && "bg-white text-[#521bc6]"}`}>
                <i className='fa-solid fa-moon fa-lg'></i>
            </button>
        </div>
    )
}

export default ColorMode
