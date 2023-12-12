"use client"
import React, { useEffect } from "react"
import { CldUploadButton } from "next-cloudinary"
import { useAuth } from "@clerk/nextjs"
import { useImgNumState } from "../lib/zustand/imgNumState"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

const Upload = ({ totalCount }) => {
    const router = useRouter()
    const { userId } = useAuth()
    const { setNum, addOneNum } = useImgNumState()

    useEffect(() => {
        setNum(totalCount)
    }, [])
    if (totalCount >= 20) return null
    return (
        <>
            <CldUploadButton
                options={{
                    sources: ["local"],
                    context: { userId: userId },
                    multiple: false,
                    singleUploadAutoClose: true,
                }}
                onSuccess={(res) => {
                    router.refresh()
                    addOneNum()
                    toast.success("Image uploaded", {
                        icon: "👏",
                        duration: 3000,
                    })
                }}
                uploadPreset='cloudDrive'>
                <li className='rounded-lg bg-[#521bc6] h-[316px] w-[316px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#290d63]'>
                    <span className='p-2 bg-white rounded-full h-12 w-12 flex justify-center items-center'>
                        <i className='fa-solid fa-plus fa-lg text-[#521bc6] '></i>
                    </span>
                </li>
            </CldUploadButton>
        </>
    )
}

export default Upload
