"use client"
import React from "react"
import { useDialogState } from "../lib/zustand/dialogState"
import Image from "next/image"
const Img = ({ img }) => {
    const { open } = useDialogState()

    return (
        <li onClick={() => open(img)} key={img.filename} className='p-2 rounded-lg shadow-md shadow-black/70 bg-[#521bc6]  cursor-pointer hover:bg-[#290d63]'>
            <Image
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAEvUExURXZ2sHh2sHp1rntxq3prpndloXRfnnFennFio3NpqoZ+rYh/rYp+rIt6qIp1pIhun4RpnIFonYBqoIJwppuFppyHpp6HpZ+Eop6An5x7m5l2mZZ0mJV1m5Z4n7KOnLOQnLWRnbWQm7WNmLOJlbGFk66Bkq1/k61+lsiXkcmbk8qelcuflcqdk8mZkMeTjcWNi8SHisODi9ieiNqljNuqkNytktyrj9umi9ieh9aVg9WLgtSDguCfguKoh+Svjeazj+WxjOOrhuGigd6WfNyKetyAetuVfN+fguKnh+SriuOohuGigN6YetqMddiAdNd2dcl/dc+IetOPftWTgNWRfNKKds2Cccl4bsZtbsVmcKxibLNpb7lvcrxxcrtvb7hqarJkZqxdZahWZ6dSav///2qqXM0AAAABYktHRGTC2rgJAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5wwMDCkDnObkFgAAAHZJREFUCNdjYGBkYmZhZWPn4GTg4ubh5eMXEBQSZhARFROXkJSSlpFlkJNXUFRSVlFVU2fQ0NTS1tHV0zcwZDAyNjE1M7ewtLJmsLG1s3dwdHJ2cWVwc/fw9PL28fXzZwgIDAoOCQ0Lj4hkiIqOiY2LT0hMSgYAwk8TV/GBfx8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTJUMTI6NDA6NDUrMDA6MDC/yR7HAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTEyVDEyOjQwOjQ1KzAwOjAwzpSmewAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0xMi0xMlQxMjo0MTowMyswMDowMJHZ11oAAAAASUVORK5CYII='
                placeholder='blur'
                loading='lazy'
                height={300}
                width={300}
                key={img.filename}
                className='object-center object-cover h-[300px] w-[300px] rounded-lg'
                src={img.secure_url}
                alt={img.filename}
            />
        </li>
    )
}

export default Img
