import cloudinary from "cloudinary"
import { NextResponse } from "next/server"

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    DELETE_TOKEN: process.env.NEXT_PUBLIC_CLOUDINARY_DELETE_TOKEN,
})

export async function POST(req, res) {
    const { public_id } = await req.json()
    try {
        const result = await cloudinary.v2.uploader.destroy(public_id, {
            invalidate: true,
            resource_type: "image",
        })
        return NextResponse.json({ result })
    } catch (error) {
        return NextResponse.json({ error })
    }
}
