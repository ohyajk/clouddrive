"use client"
import React from "react"
import { useImgNumState } from "../lib/zustand/imgNumState"

const Storage = () => {
    const { imgNum } = useImgNumState()

    return (
        <div className='flex flex-col justify-center items-center gap-2 px-4 py-2 bg-black/50 w-full'>
            <h2 className='font-bold text-xl'>Your Storage</h2>
            <div className='w-full bg-gray-300 rounded-full h-8 '>
                <div style={{ width: `${imgNum * 5}%` }} className='bg-[#521bc6] h-8 rounded-full text-center font-semibold text-white flex items-center justify-center'>
                    {imgNum == 0 ? "" : `${imgNum * 5}%`}
                </div>
            </div>
            <h2>{imgNum} of 20 images are used.</h2>
        </div>
    )
}

export default Storage
