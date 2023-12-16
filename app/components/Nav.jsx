"use client"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

const Nav = () => {
    const { isSignedIn } = useUser()
    const path = usePathname()
    if (path != "/") return null
    return (
        <header className='h-16 pt-4 w-full text-black flex justify-center'>
            <nav className='flex justify-between items-center w-full max-w-7xl'>
                <div className='flex justify-center items-center gap-2 p-4 text-[#521bc6]'>
                    <i className='fa-solid fa-cloud fa-lg sm:fa-2x'></i>
                    <h1 className='text-2xl sm:text-3xl font-bold'>CloudDrive</h1>
                </div>
                <ul className='px-4 sm:hidden'>
                    <Link href={isSignedIn ? "/cloud" : "/login"} className='bg-[#521bc6] text-white px-4 py-2 rounded-lg cursor-pointer myShadow'>
                        {isSignedIn ? "Cloud" : "Login"}
                    </Link>
                </ul>
                <ul className='px-4 hidden sm:block'>
                    <Link href={isSignedIn ? "/cloud" : "/login"} className='bg-[#521bc6] text-white px-4 py-2 rounded-lg cursor-pointer myShadow'>
                        {isSignedIn ? "My Cloud" : "Login / Register"}
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
