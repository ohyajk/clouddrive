import { ClerkProvider } from "@clerk/nextjs"
import { Poppins } from "next/font/google"
import { v2 as cloudinary } from "cloudinary"
import { Toaster } from "react-hot-toast"
import "./globals.css"
const poppins = Poppins({ subsets: ["latin"], weight: "400" })

export const metadata = {
    title: "CloudDrive",
    description: "Host your data on the cloud...",
}

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
})

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <head>
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
                </head>
                <body className={poppins.className}>
                    <Toaster position='top-right' />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
