"use client"
import React from "react"
import { useDialogState } from "../lib/zustand/dialogState"
import { useRouter } from "next/navigation"
import { useImgNumState } from "../lib/zustand/imgNumState"
import { toast } from "react-hot-toast"

const Dialog = () => {
    const router = useRouter()
    const { state, data, close } = useDialogState()
    const { remOneNum } = useImgNumState()
    const del = async () => {
        await fetch(`/api/del`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ public_id: data.public_id }),
        })
        remOneNum()
        toast.success("Image deleted")
    }

    if (state) {
        return (
            <div className='fixed h-screen w-full bg-black/80 top-0 left-0 text-white z-10 flex justify-center items-center'>
                <div className='p-2 rounded-lg bg-[#521bc6]'>
                    <p className='flex gap-2 pb-2 items-center'>
                        <span className='font-semibold flex-1 flex flex-col'>{data.filename}</span>
                        <i
                            onClick={() => {
                                del()
                                router.refresh()
                                close()
                            }}
                            className='fa-solid fa-trash fa-lg cursor-pointer hover:text-white/90 text-red-600'></i>
                        <i
                            onClick={() => {
                                close()
                            }}
                            className='fa-solid fa-circle-xmark fa-lg cursor-pointer hover:text-white/90'></i>
                    </p>
                    <img className='resize max-w-[80vw] md:max-h-[80vh]' src={data.secure_url ? data.secure_url : "https://placehold.co/600x400?text=Select+Image"} alt='dialog' />
                </div>
            </div>
        )
    }
}

export default Dialog
