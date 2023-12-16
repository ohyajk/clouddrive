"use client"
import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useClerk } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Storage from "./Storage"

const Aside = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const { theme } = useTheme()
    const { signOut } = useClerk()
    const router = useRouter()
    if (windowWidth > 768) {
        return (
            <aside className={`${theme == "light" || !theme ? "bg-[#521bc6]" : "bg-[#0a0318]"}   text-white flex flex-col border-r-2 border-white/20`}>
                <div className='flex justify-center items-center gap-2 p-4 '>
                    <i className='fa-solid fa-cloud fa-2x'></i>
                    <h1 className='text-3xl font-bold'>CloudDrive</h1>
                </div>

                <div className='flex flex-col justify-between h-full'>
                    <ul className='flex flex-col justify-center items-center'>
                        <Link href='/cloud' className={` ${theme == "light" || !theme ? "hover:bg-[#0a0318]" : "hover:bg-[#521bc6]"} flex gap-4  justify-center items-center py-4 border-t-2 border-white/20  w-full`}>
                            <i className='fa-solid fa-file-lines fa-lg'></i>
                            <h4 className='text-xl font-semibold'>File Cloud</h4>
                        </Link>
                        <a href='https://www.linkedin.com/in/ohyajk/' className={` ${theme == "light" || !theme ? "hover:bg-[#0a0318]" : "hover:bg-[#521bc6]"} flex gap-4  justify-center items-center py-4 border-t-2 border-b-2 border-white/20  w-full`}>
                            <i className='fa-solid fa-building fa-lg'></i>
                            <h4 className='text-xl font-semibold'>Contact Me</h4>
                        </a>
                        <button onClick={() => signOut(() => router.push("/"))} className={` ${theme == "light" || !theme ? "hover:bg-[#0a0318]" : "hover:bg-[#521bc6]"} flex gap-4  justify-center items-center py-4 border-b-2 border-white/20  w-full`}>
                            <i className='fa-solid fa-right-from-bracket fa-lg'></i>
                            <h4 className='text-xl font-semibold'>Logout</h4>
                        </button>
                        <Storage />
                    </ul>
                    <ul className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-3  justify-center items-center py-4 border-t-2 border-white/20 w-full'>
                            <h4 className='text-sm font-medium text-white'>
                                Made with <i className='fa-solid fa-heart text-red-400'></i> by Jitender Kumar
                            </h4>
                            <ul className='flex justify-center gap-4 items-center'>
                                <li>
                                    <a href='/'>
                                        <i className='fa-solid fa-envelope fa-xl'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <i className='fa-brands fa-linkedin fa-xl'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <i className='fa-brands fa-github fa-xl'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </aside>
        )
    } else {
        return (
            <aside className={`${theme == "light" || !theme ? "bg-[#521bc6]" : "bg-[#0a0318]"}   text-white flex flex-col `}>
                <div className='flex justify-center items-center gap-2 p-4 h-fit'>
                    <i className='fa-solid fa-cloud fa-2x'></i>
                    <h1 className='text-3xl font-bold'>CloudDrive</h1>
                    <i
                        onClick={() => {
                            setMenu(!menu)
                            console.log(menu)
                        }}
                        className={`fa-solid ${menu ? "" : "fa-bars"} fa-2x absolute top-[18px] right-6 z-50`}></i>
                </div>
                {menu === true ? (
                    <div className={`${theme == "light" || !theme ? "bg-[#521bc6]" : "bg-[#0a0318]"} flex flex-col justify-between h-screen fixed top-0 left-0 w-full `}>
                        <ul className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center gap-2 p-4 h-fit'>
                                <i className='fa-solid fa-cloud fa-2x'></i>
                                <h1 className='text-3xl font-bold'>CloudDrive</h1>
                                <i
                                    onClick={() => {
                                        setMenu(!menu)
                                        console.log(menu)
                                    }}
                                    className={`fa-solid ${menu ? "fa-x" : "fa-bars"} fa-2x absolute top-[18px] right-6 z-50`}></i>
                            </div>
                            <Link onClick={() => setMenu(!menu)} href='/cloud' className={` ${theme == "light" || !theme ? "hover:bg-[#0a0318]" : "hover:bg-[#521bc6]"} flex gap-4  justify-center items-center py-4 border-t-2 border-white/20  w-full`}>
                                <i className='fa-solid fa-file-lines fa-lg'></i>
                                <h4 className='text-xl font-semibold'>File Cloud</h4>
                            </Link>
                            <a href='https://www.linkedin.com/in/ohyajk/' className={` ${theme == "light" || !theme ? "hover:bg-[#0a0318]" : "hover:bg-[#521bc6]"} flex gap-4  justify-center items-center py-4 border-t-2 border-b-2 border-white/20  w-full`}>
                                <i className='fa-solid fa-building fa-lg'></i>
                                <h4 className='text-xl font-semibold'>Contact Me</h4>
                            </a>
                            <button onClick={() => signOut(() => router.push("/"))} className={` ${theme == "light" || !theme ? "hover:bg-[#0a0318]" : "hover:bg-[#521bc6]"} flex gap-4  justify-center items-center py-4 border-b-2 border-white/20  w-full`}>
                                <i className='fa-solid fa-right-from-bracket fa-lg'></i>
                                <h4 className='text-xl font-semibold'>Logout</h4>
                            </button>
                            <Storage />
                        </ul>
                        <ul className='flex flex-col justify-center items-center w-full'>
                            <div className='flex flex-col gap-3  justify-center items-center py-4 border-t-2 border-white/20 w-full'>
                                <h4 className='text-sm font-medium text-white'>
                                    Made with <i className='fa-solid fa-heart text-red-400'></i> by Jitender Kumar
                                </h4>
                                <ul className='flex justify-center gap-4 items-center'>
                                    <li>
                                        <a href='/'>
                                            <i className='fa-solid fa-envelope fa-xl'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className='fa-brands fa-linkedin fa-xl'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className='fa-brands fa-github fa-xl'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                ) : (
                    ""
                )}
            </aside>
        )
    }
}

export default Aside
